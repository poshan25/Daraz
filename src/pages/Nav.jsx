import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/admin">Admin</Link>
      <br />
      <Link to="/user">User</Link>
      <br />
      <Link to="/order">Order</Link>
    </nav>
  );
};

export default Nav;
