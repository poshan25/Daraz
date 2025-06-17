import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
      <Link to="/user">Home</Link>
      <br />
      <Link to="/orderStatus">Order Status</Link>
      <br />
      <Link to="/toReceive">To Receive</Link>
      <br />
      <Link to="/received">Received</Link>
     
      <br />
      <Link to="/userCart">Cart</Link>
       <br />
      <Link to="/">Switch Role</Link>
    </nav>
  );
};

export default UserNav;
