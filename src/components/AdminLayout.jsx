import React from "react";
import AdminNav from "./AdminNav";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
// import AdminNav from "./AdminNav";
// import Footer from "./Footer";

const AdminLayout = () => {
    const navigate = useNavigate();

  useEffect(() => {
  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    console.log("Session in AdminLayout:", session);

    if (!session || session.user.email.trim().toLowerCase() !== "admin@123.com") {
      alert("Unauthorized");
      navigate("/adminform");
    }
  };

  checkSession();
}, []);



  return (
    <>
      <AdminNav />
       <div className=' bg-fuchsia-500 p-5 text-gray-100 flex flex-col items-center  '>
             <h3 className='text-3xl font-bold'>Welcome Admin</h3>
             <br />
             <h1 className='text-xl'>Hope You Are Doing Great</h1>
        </div>
      {/* <main>{children}</main> */}
      <Footer />
    </>
  );
};

export default AdminLayout;
