// import { useEffect, useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import supabase from "../supabaseClient";

// const AdminRoute = ({ children }) => {
//     const navigate = useNavigate()
//   const [authorized, setAuthorized] = useState(null); // null = loading
// useEffect(() => {
//   const checkAuth = async () => {
//     const { data: { session } } = await supabase.auth.getSession();
//     console.log("AdminRoute session:", session);

//     if (session && session.user.email.trim().toLowerCase() === "admin@123.com") {
//       console.log("AdminRoute: authorized");
//       setAuthorized(true);
//     } else {
//       console.log("AdminRoute: NOT authorized");
//       setAuthorized(false);
//     }
//   };

//   checkAuth();
// }, []);

//   if (authorized === null) {
//     return <div>Loading...</div>; // or spinner
//   }

//   if (!error) {
//   alert("Admin logged in successfully!");
//   navigate("/adminlayout"); // <-- make sure this is correct
// }


// };

// export default AdminRoute;
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../supabaseClient";

const AdminRoute = ({ children }) => {
  const [authorized, setAuthorized] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
    //   console.log("AdminRoute session:", session);

      if (session && session.user.email.trim().toLowerCase() === "admin@123.com") {
        // console.log("AdminRoute: authorized");
        setAuthorized(true);
      } else {
        // console.log("AdminRoute: NOT authorized");
        setAuthorized(false);
      }
    };

    checkAuth();
  }, []);

  if (authorized === null) {
    return <div>Loading...</div>;
  }

  if (!authorized) {
    alert("Unauthorized! Please login as admin.");
    return <Navigate to="/form" replace />; // redirect to login page
  }

  return children; // user is authorized, render the protected component
};

export default AdminRoute;