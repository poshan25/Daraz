import { useState, useEffect } from "react";
import supabase from "../supabaseClient";

const UserProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let { data, error } = await supabase
        .from("products") // supabase ko table name
        .select("*"); // sabai column lai get garna

      if (error) {
        console.log("err fetching products: ", error);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Data</h1>
      <div>
        {products.map((product,id) => (
          <div key={id} className="border m-5 p-2" >
            <p>{product.name}</p>
            <p>{product.price}</p>
            <img src={product.image_url} alt="img" />
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProducts;
