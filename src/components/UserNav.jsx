// // import React from "react";
// // import { Link } from "react-router-dom";

// // const UserNav = ({cartLength}) => {
// //   return (
// //     <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
// //       <Link to="/user">Home</Link>
// //       <br />
// //       <Link to="/orderStatus">Order Status</Link>
// //       <br />
// //       <Link to="/toReceive">To Receive</Link>
// //       <br />
// //       <Link to="/received">Received</Link>
// //      <p className="border p-2 text-black">{cartLength}</p>
// //       <br />
// //       <Link to="/userCart">Cart</Link>
// //        <br />
// //       <Link to="/">Switch Role</Link>
// //     </nav>
// //   );
// // };

// // export default UserNav;









// import React, { useEffect } from "react";
// import { Link, useSearchParams } from "react-router-dom";

// const UserNav = ({ cartLength }) => {
    
    
    
//   return (
//     <nav className="flex border p-5 m-5 justify-around rounded-lg bg-emerald-300 text-gray-700 font-semibold">
//       <Link to="/user">Home</Link>
//       <br />
//       <Link to="/orderStatus">Order Status</Link>
//       <br />
//       <Link to="/toReceive">To Receive</Link>
//       <br />
//       <Link to="/received">Received</Link>
//       <br />

//       <div className="relative">
//         <Link to="/userCart" className="relative inline-block">
//           Cart
//           {cartLength > 0 && (
//             <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//               {cartLength}
//             </span>
//           )}
//         </Link>
//       </div>

//       <br />
//       <Link to="/">Switch Role</Link>
//     </nav>
//   );
// };

// export default UserNav;






import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../supabaseClient"; // make sure this import is correct

const UserNav = () => {
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const fetchCartLength = async () => {
      const { data, error } = await supabase.from("cart").select("*");
      if (!error && data) {
        setCartLength(data.length);
      }
    };

    fetchCartLength();

  }, []);

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

      <div className="relative">

        <Link to="/userCart" className="relative inline-block">
          Cart
          {cartLength > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartLength}
            </span>
          )}
        </Link>
      </div>

      <br />
      <Link to="/">Switch Role</Link>
    </nav>
  );
};

export default UserNav;
