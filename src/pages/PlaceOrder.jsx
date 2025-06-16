// what this page does
// When user clicks Buy, they go to /order/5
// 👉 5 is the product ID

// On this page we will:

// Read that ID from the URL

// Fetch that product from Supabase

// Show product info

// Later, we'll add an order form

import React, { useState, useEffect } from "react";
import supabase from "../supabaseClient";
import { useParams } from "react-router-dom";

const PlaceOrder = () => {
  const { productId } = useParams(); //url bata id lina ko lagi: http://localhost:5173/order/3
  const [quantity, setQuantity] = useState(1);
  const [userId, setuserId] = useState(null);

  const [product, setProduct] = useState(null);

  const handleBuy = async () => {
    const { data, error } = await supabase.from("orders").insert([
      {
        user_id: userId, // supabase auth bata aucha
        product_id: product.id,
        quantity: quantity,
        status: "pending",
      },
    ])
    .select(); // return garcha insert data lai
    if (error) {
      console.error("Order error:", error);
    } else {
      alert("Order placed!");
      console.log("data:", data)
    }
  };
  if (!productId) return <div>No product selected</div>;


  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from("products") // connect to products table
        .select("*") // get all columns
        //find rows jaha id column equal cha productId ko
        .eq("id", productId) //supabase bata auta product id bata fetch garna ko lagi

        // 1 uta matra object return garna ko lagi, array not return garna ko lagi
        .single();

      if (error) {
        console.error(error);
      } else {
        setProduct(data);
      }
    }
    fetchProduct();
  }, [productId]);

  // fetching hudha loading show
  if (!product) return <div>Loading...</div>;

  return (
    // product information show
    <div className="border p-5 w-fit m-5">
      <div>
        <h1>{product.name}</h1>
        <img className="w-23" src={product.image_url} alt={product.name} />
        <p>{product.description}</p>
        <p>Price: Rs. {product.price}</p>
      </div>
      <br />
      <div>
        <div className="flex gap-2 border p-1 ">
          <p>quantity:</p>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <button
          onClick={handleBuy}
          className="border p-2 cursor-pointer hover:bg-amber-300 bg-green-400"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;

// buy ma click hudha we go to route order/4
// on the order page we get that
// id form url ra tio id ko info fetch
