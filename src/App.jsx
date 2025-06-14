import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdminAddProduct from "./pages/AdminAddProduct";
import UserProducts from "./pages/UserProducts";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<AdminAddProduct />}></Route>
      <Route path="/user" element={<UserProducts />}></Route>
            <Route path="/order/:productId" element={<Order />}></Route>
                        <Route path="/order" element={<Order />}></Route>


    </Routes>
  );
}

export default App;
