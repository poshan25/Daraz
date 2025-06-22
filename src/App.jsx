import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdminAddProduct from "./pages/AdminAddProduct";
// import UserProducts from "./pages/UserProducts";
import { Form, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import ViewOrder from "./pages/ViewOrder";
import Verify from "./components/Verify";
import User from "./components/User";
import Admin from "./components/Admin";
// import TrackOrder from "./components/OrderStatus";
import ToReceive from "./components/ToReceive";
import '@fontsource/prata';

// import { Routes, Route } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./components/AdminLayout";

// import AdminLayout from "./components/AdminLayout";
import UserLayout from "./components/UserLayout";
import './index.css'; 
import Received from "./components/Received";
import UserCart from "./components/UserCart";
// import Form from "./components/Form";

import UserProducts from "./pages/UserProducts";
// import AdminLogin from "./components/AdminLogin"; // or your login component path

import OrderStatus from "./components/OrderStatus";
import Products from "./pages/Products";
import AdminForm from "./components/AdminForm";
import AdminLogin from "./components/AdminForm";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={
          <AdminRoute>
             <Admin />
          </AdminRoute>
         }></Route>
      <Route path="/adminAddProduct" element={<AdminAddProduct />}></Route>
            <Route path="/products" element={<Products />}></Route>
      <Route path="/login" element={<AdminLogin />} />

      <Route path="/userCart" element={<UserCart />}></Route>
            <Route path="/viewOrder" element={<ViewOrder />}></Route>

            <Route path="/adminform" element={<AdminForm />}></Route>

      <Route path="/orderStatus" element={<OrderStatus />}></Route>

      <Route path="/toReceive" element={<ToReceive />}></Route>

      <Route path="/Received" element={<Received />}></Route>

      <Route path="/user" element={<User />}></Route>
      <Route path="/order/:productId" element={<PlaceOrder />}></Route>
      <Route path="/verify" element={<Verify />}></Route>

      {/* <Route
        path="/admin/*"
        element={
          <AdminLayout>
            <Admin/>
            <Routes>
                    <Route path="/adminAddProduct" element={<AdminAddProduct />}></Route>

                    <Route path="/vieworder" element={<ViewOrder />}></Route>

            </Routes>
          </AdminLayout>
        }
      />

      <Route
        path="/user/*"
        element={
          <UserLayout>
            <UserProducts/>
            <Routes>
              <Route path="Usercart" element={<UserCart />} />
              <Route path="trackOrders" element={<TrackOrder />} />
            </Routes>
          </UserLayout>
        }
      /> */}
    </Routes>
  );
}

export default App;
