import React from "react";
import { Link } from "react-router-dom";
// import supabase from "../supabaseClient";


const AdminNav = () => {

  

  return (
    <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
      <Link to="/admin">Home</Link>
      {/* <br /> */}
      {/* <Link to="/vieworder">View Order</Link> */}
      <br />
      <Link to="/adminAddProduct">Add Product</Link>
      <br />
      <Link to="/vieworder">View Order</Link>
      <br />
            <Link to="/">Switch Role</Link>
            <br />

    </nav>
  );
};

export default AdminNav;
