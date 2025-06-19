import React, { useEffect, useState } from 'react'
import UserNav from './UserNav'
import supabase from '../supabaseClient';

const ToReceive = () => {
     const [orders, setOrders] = useState([]);
       const [popupMsg, setPopupMsg] = useState("");
     

  async function confirmOrder(id) {
    const { error } = await supabase
      .from("orders")
      .update({ status: "received" })
      .eq("id", id);

    if (error) {
      setPopupMsg("failed while submitting received status");
      console.error(error);
      return;
    }

    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));

    setPopupMsg("Order received!");

    // Hide popup after 1 second
    setTimeout(() => setPopupMsg(""), 1000);
  }

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
        .eq("status", "confirmed");

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
    <UserNav/>
     {popupMsg && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#4caf50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
          {popupMsg}
        </div>
      )}
        <div>ToReceive</div>
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
          <p>Status: {order.status} <span>order is on the way</span></p>
          <br />

          {/* <button
            className="border rounded-xl cursor-pointer p-2 bg-green-300 m-2"
            onClick={() => confirmOrder(order.id)}
          >
            Confirm Order
          </button> */}
          <button
            className="border rounded-xl cursor-pointer p-2 bg-green-300 m-2"
            onClick={() => confirmOrder(order.id)}
          >
            Order Received
          </button>
        </div>
      ))}

    </>
  )
}

export default ToReceive;