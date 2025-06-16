import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdminAddProduct from "./pages/AdminAddProduct";
// import UserProducts from "./pages/UserProducts";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import ViewOrder from "./pages/ViewOrder";
import Verify from "./components/Verify";
import User from "./components/User";
import Admin from "./components/Admin";
import TrackOrder from "./components/TrackOrder";
import ToReceive from "./components/ToReceive";
import Received from "./components/Received";
import UserCart from "./components/UserCart";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/admin" element={<AdminAddProduct />}></Route> */}
      <Route path="/admin" element={<Admin />}></Route>
            <Route path="/adminAddProduct" element={<AdminAddProduct />}></Route>
                        <Route path="/userCart" element={<UserCart />}></Route>
                                                <Route path="/trackOrder" element={<TrackOrder />}></Route>


      <Route path="/toReceive" element={<ToReceive />}></Route>

      <Route path="/Received" element={<Received />}></Route>

      <Route path="/user" element={<User />}></Route>
      <Route path="/order/:productId" element={<PlaceOrder />}></Route>
      <Route path="/vieworder" element={<ViewOrder />}></Route>
            <Route path="/verify" element={<Verify />}></Route>

      {/* <Route path="/order" element={<Order />}></Route> */}


    </Routes>
  );
}

export default App;
