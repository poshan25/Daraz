// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import supabase from "../supabaseClient";
// // // import UserNav from "./UserNav";

// // // const User = () => {
// // //   const navigate = useNavigate();
// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       const { data, error } = await supabase.from("products").select("*");

// // //       if (error) {
// // //         console.error("Error fetching products:", error);
// // //       } else {
// // //         setProducts(data);
// // //       }
// // //     };

// // //     fetchProducts();
// // //   }, []);

// // //   async function addToCart(productId) {

// // //     const { error } = await supabase
// // //       .from("cart")
// // //       .insert([{  product_id: productId }]);

// // //     if (error) {
// // //       alert("Failed to add to cart");
// // //       console.error(error);
// // //     } else {
// // //       alert("Product added to cart!");
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 py-8 px-4">
// // //       <UserNav />
// // //       <h1 className="text-2xl font-bold mb-6 text-center">
// // //         Available Products
// // //       </h1>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {products.map((product) => (
// // //           <div
// // //             key={product.id}
// // //             className="bg-white border shadow-md rounded-xl p-4 flex flex-col items-center"
// // //           >
// // //             <img
// // //               src={product.image_url}
// // //               alt={product.name}
// // //               className="w-full h-48 object-cover rounded-md mb-4"
// // //             />
// // //             <h2 className="text-lg font-semibold">{product.name}</h2>
// // //             <p className="text-gray-600 mb-2">Rs. {product.price}</p>
// // //             <p className="text-sm text-gray-500 mb-4">{product.description}</p>

// // //             <button
// // //               onClick={() => navigate(`/order/${product.id}`)}
// // //               className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all"
// // //             >
// // //               Buy
// // //             </button>

// // //             <button
// // //               onClick={() => addToCart(product.id)}
// // //               className="border p-2 m-2 bg-blue-500 hover:bg-blue-700 rounded-2xl text-white cursor-pointer"
// // //             >
// // //               Add to cart
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default User;













// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import supabase from "../supabaseClient";
// // // import UserNav from "./UserNav";

// // const User = () => {
// //   const navigate = useNavigate();
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       const { data, error } = await supabase.from("products").select("*");

// //       if (error) {
// //         console.error("Error fetching products:", error);
// //       } else {
// //         setProducts(data);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   async function addToCart(productId) {
// //     const { error } = await supabase
// //       .from("cart")
// //       .insert([{ product_id: productId }]);

// //     if (error) {
// //       alert("Failed to add to cart");
// //       console.error(error);
// //     } else {
// //       alert("Product added to cart!");
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen mt-[-50px] bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4]  sm:px-6 pb-20">
// //       <div className=" px-38">
// //  {/* <UserNav /> */}
      
// //       <div className="max-w-7xl mx-auto ">
// //         <h1 className="text-3xl  pt-30 sm:text-4xl font-bold mb-8 text-center text-gray-800">
// //           New Products
// //         </h1>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {products.map((product) => (
// //             <div
// //               key={product.id}
// //               className="bg-[#f9f3ef] rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
// //             >
// //               <img
// //                 src={product.image_url}
// //                 alt={product.name}
// //                 className="w-full h-64 object-cover"
// //               />
              
// //               <div className="p-6">
// //                 <h2 className="text-xl font-bold text-gray-800 mb-2">
// //                   {product.name}
// //                 </h2>
// //                 <p className="text-lg font-semibold text-green-600 mb-3">
// //                   Rs. {product.price}
// //                 </p>
// //                 <p className="text-gray-600 mb-6">{product.description}</p>

// //                 <div className="flex flex-col sm:flex-row gap-3">
// //                   <button
// //                     onClick={() => navigate(`/order/${product.id}`)}
// //                     className="flex-1 bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 px-4 rounded-lg transition-all"
// //                   >
// //                     Buy Now
// //                   </button>
// //                   <button
// //                     onClick={() => addToCart(product.id)}
// //                     className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all"
// //                   >
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       </div>
     
// //     </div>
// //   );
// // };

// // export default User;




// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import supabase from "../supabaseClient";

// const User = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase.from("products").select("*");

//       if (error) {
//         console.error("Error fetching products:", error);
//       } else {
//         setProducts(data);
//       }
//     };

//     fetchProducts();
//   }, []);

//   async function addToCart(productId) {
//     const { error } = await supabase
//       .from("cart")
//       .insert([{ product_id: productId }]);

//     if (error) {
//       alert("Failed to add to cart");
//       console.error(error);
//     } else {
//       alert("Product added to cart!");
//     }
//   }

//   return (
//     <div className="min-h-screen mt-[-50px] bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 lg:px-38 pb-20">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800 pt-20 sm:pt-30">
//           New Products
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-[#f9f3ef] rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
//             >
//               <img
//                 src={product.image_url}
//                 alt={product.name}
//                 className="w-full h-48 sm:h-56 md:h-64 object-cover"
//               />
              
//               <div className="p-4 sm:p-6">
//                 <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
//                   {product.name}
//                 </h2>
//                 <p className="text-base sm:text-lg font-semibold text-green-600 mb-3">
//                   Rs. {product.price}
//                 </p>
//                 <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-2">
//                   {product.description}
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
//                   <button
//                     onClick={() => navigate(`/order/${product.id}`)}
//                     className="flex-1 bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-md sm:rounded-lg transition-all text-sm sm:text-base"
//                   >
//                     Buy Now
//                   </button>
//                   <button
//                     onClick={() => addToCart(product.id)}
//                     className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-3 sm:py-2 sm:px-4 rounded-md sm:rounded-lg transition-all text-sm sm:text-base"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User;




import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

const User = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  async function addToCart(productId) {
    const { error } = await supabase
      .from("cart")
      .insert([{ product_id: productId }]);

    if (error) {
      alert("Failed to add to cart");
      console.error(error);
    } else {
      // alert("Product added to cart!");
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-[-50px] bg-gradient-to-r from-[#fcf1f7] to-[#fff4f4] px-4 sm:px-6 md:px-8 lg:px-38 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800 pt-20 sm:pt-30">
          New Products
        </h1>

        {/* Mobile Layout - 2 columns */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#f9f3ef] rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              
              <div className="p-3">
                <h2 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h2>
                <p className="text-xs font-semibold text-green-600 mb-2">
                  Rs. {product.price}
                </p>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => navigate(`/order/${product.id}`)}
                    className="w-full bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-1.5 px-2 rounded text-xs"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-1.5 px-2 rounded text-xs"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#f9f3ef] rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-base sm:text-lg font-semibold text-green-600 mb-3">
                  Rs. {product.price}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={() => navigate(`/order/${product.id}`)}
                    className="flex-1 bg-gradient-to-r from-[#94ce4c] to-[#5baf2f] hover:from-[#a37878] hover:to-[#c1a9a9] text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-md sm:rounded-lg transition-all text-sm sm:text-base"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-3 sm:py-2 sm:px-4 rounded-md sm:rounded-lg transition-all text-sm sm:text-base"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;