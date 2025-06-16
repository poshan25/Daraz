import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
      <Link to="/">Home</Link>
      <br />
      <Link to="/trackOrder">Track Order</Link>
      <br />
      <Link to="/toReceive">To Receive</Link>
      <br />
      <Link to="/received">Received</Link>
      <br />
      <Link to="/userCart">Cart</Link>
    </nav>
  );
};

export default UserNav;
