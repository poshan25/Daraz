import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import supabase from "../supabaseClient";

const Received = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      let { data, error } = await supabase
        .from("orders")
        .select(
          `
      *,
      products(id, name, price, image_url)
    `
        )
        .eq("status", "received");

      if (error) {
        console.error("err fetching orders:", error);
      } else {
        setOrders(data);
      }
    }
    fetchOrders();
  }, []);

  return (
    <>
      <UserNav />
      {orders.length === 0 && <p>No orders found.</p>}
      {orders.map((order) => (
        <div
          key={order.id}
          style={{ border: "1px solid gray", margin: 10, padding: 10 }}
        >
          <h3>{order.products?.name}</h3>
          <img
            src={order.products?.image_url}
            alt={order.products?.name}
            width="100"
          />
          <p>Price: Rs. {order.products?.price}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Status: {order.status}</p>
          <br />

          {/* <button
            className="border rounded-xl cursor-pointer p-2 bg-green-300 m-2"
            onClick={() => confirmOrder(order.id)}
          >
            Confirm Order
          </button> */}
        </div>
      ))}
    </>
  );
};

export default Received;
