import { useState, useEffect } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const UserProducts = () => {
    const navigate = useNavigate();
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

  const handleBuyClick = () => {
    alert("Product added to cart");
  }

  return (
    <div>
      <h1 className="font-bold">Data</h1>
      <div>
        {products.map((product,id) => (
          <div key={id} className="border m-5 p-2" >
            <p>{product.name}</p>
            <p>{product.price}</p>
            <img className="w-25" src={product.image_url} alt="img" />
            <p>{product.description}</p>
            <br /><br />
            <button  className="border rounded-xl px-5 py-2 curser-pointer bg-green-400 hover:bg-amber-400" onClick={() => navigate(`/order/${product.id}`)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProducts;
