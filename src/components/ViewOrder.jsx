import { useState, useEffect } from "react";
import supabase from "../supabaseClient";


const ViewOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchORders = async() => {
            const {data: orderData, error: orderError} = await supabase
            .from("orders")
            .select("*");

            if(orderError){
                console.log("err fetching orders:", orderError)
                return;
            }

            //each order ko lagi proderinfo fetch

            const ordersWithProduct = await Promise.all(
                orderData.map(async (order) => {
                    const {data: productData, error: productError} = await supabase
                    .from("products")
                    .select("*")
                    .eq("id", order.product_id)
                    .single(); //1 id = 1 product

                    return{
                        ...order,
                        product: productData, //merge product info inside order ko lagi
                    }
                })
            )
setOrders(ordersWithProduct)
        }
        fetchORders()
    })
  return (
<div>
      <h1 className="font-bold text-xl">Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="border p-4 m-4">
          <h2 className="font-semibold">{order.product?.name}</h2>
          <img src={order.product?.image_url} alt={order.product?.name} className="w-40" />
          <p>{order.product?.description}</p>
          <p>Price: Rs. {order.product?.price}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>  )
}

export default ViewOrder
