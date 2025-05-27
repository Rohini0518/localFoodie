import Image from "../components/Image";
import Text from "../components/Text";
import ProductCard from "../components/ProductCard";
import { useContext, useRef, useState, useEffect } from "react";
import { CartContext } from "../CartContext";
import axios from "axios";

export default function LandingPage() {
  const { handleAddToCart, onIncrease, onDecrease } = useContext(CartContext);
  // const [isCartInitialized, setIsCartInitialized] = useState(false); 

  const productRef = useRef({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try{
      let productsdata = await axios.get(
        "https://local-foodie-backend.vercel.app/products/getAllProducts"
      );
      setProducts(productsdata.data)
    }
      catch(error){
        console.log("products data is not fetched",error)
      }
    }
    fetchProducts();
  }, []);
  
  const scrollToCard = (id) => {
    console.log(id)
    const targetProduct = productRef.current[id];
    console.log(targetProduct)
    if (targetProduct) {
      targetProduct.scrollIntoView({ behaviour: "smooth", block: "center" });
      targetProduct.classList.add(
        "scale-105",
        "border-2",
        "border-red-300",
        "duration-100"
      );
      setTimeout(() => {
        targetProduct.classList.remove(
          "scale-105",
          "border-2",
          "border-red-300",
          "duration-100"
        );
      }, 1000);
    }
  };
  return (
    <div className="scroll-smooth">
      <div className="  flex flex-wrap justify-center gap-3 sm:gap-8 md:gap-8 lg:gap-15 m-4 ">
        {products.map((item) => (
          <Image
            key={item._id}
            src={item.image}
            onClick={() => scrollToCard(item._id)}
            className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl cursor-pointer object-cover"
          />
        ))}
      </div>
      <Text
        text="Products"
        className="font-bold text-3xl mx-10 text-orange-500"
      />
      <ProductCard
        products={products}
        addToCart={handleAddToCart}
        onInc={onIncrease}
        onDec={onDecrease}
        productRef={productRef}
      />
    </div>
  );
}
