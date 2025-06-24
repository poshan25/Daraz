// // import React, { useState } from 'react'

// // const Form = () => {

// //     const [formData, setFormData] = useState({
// //  email:'', password:''
// //     })

// //     console.log(formData)

// //     function handleChange(event){
// //         setFormData((prevFormData) => {
// //             return{
// //                 ...prevFormData,[event.target.name]:event.target.value

// //             }
// //         })
// //     }


// //   return (
// //     <div>
// //         <form >
// //             <input  placeholder='Email'
// //             name='email'
// //             onChange={handleChange}    />

// //              <input  placeholder='Password'
// //             name='Password'
// //             onChange={handleChange}    />

// //             <button type='submit'>submit</button>
            
            
// //         </form>

// //     </div>
// //   )
// // }

// // export default Form



// import { useState } from "react";
// import supabase from "../supabaseClient"; // your supabase config
// import { useNavigate } from "react-router-dom";

// const AdminForm = () => {
//   const navigate = useNavigate;
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Only allow preset admin email
//     if (email !== "admin@123.com") {
//       alert("Access denied: Only admin can log in");
//       return;
//     }

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       alert("Login failed: " + error.message);
//     } else {
//       alert("Admin logged in successfully!");
//       // Redirect to admin dashboard, example:
//       navigate("/admin");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="email"
//         placeholder="Admin Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default AdminForm;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // hooks at top level

  const handleLogin = async (e) => {
    e.preventDefault();

    // if (email !== "admin@123.com") {
    //   alert("Access denied: Only admin can log in");
    //   return;
    // }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
    } else {
      // alert("Admin logged in successfully!");
      navigate("/admin");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
