import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdminAddProduct from "./pages/AdminAddProduct";
import UserProducts from "./pages/UserProducts";

function App() {

  return (
    <div>
      <AdminAddProduct />
      <UserProducts />
      
    </div>
  );
}

export default App;
