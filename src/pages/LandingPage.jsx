import juiceLogo from "../assets/sugarcanejuice-small.png";
import Image from "../components/Image";
import Text from "../components/Text";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

export default function LandingPage() {
  const {cart,setCart}=useContext(CartContext)
  const [totalQuantity, setTotalQuantity] = useState(0);
  const products = [
    {
      id: 1,
      name: "Cheruku Rasam (1 Glass)",
      price: 20,
      image: juiceLogo,
      label: "+ Kavali",
    },

    {
      id: 2,
      name: "Milk(1/2 liter) ",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "+ Kavali",
    },
    {
      id: 3,
      name: "Curd(1/2 liter)",
      price: 30,
      image:
        "https://media.istockphoto.com/id/1218711576/photo/home-made-curd-in-a-earthen-bowl.jpg?s=2048x2048&w=is&k=20&c=vW76YCnN41EUmeg180y-k5AKXy-_Ymj5I4TIWRkMcmE=",
      label: "+ Kavali",
    },
    {
      id: 4,
      name: "Thums Up (Bottle)",
      price: 45,
      image:
        "https://img.clevup.in/325460/thums-up-pet-bottle-750ml-1696659967639_SKU-2095_0.jpg?width=600&format=webp",
      label: "+ Kavali",
    },
    {
      id: 5,
      name: "Sprite (Bottle)",
      price: 40,
      image:
        "https://img.thecdn.in/285347/1678882370021_SKU-0456_0.jpg?width=600&format=webp",
      label: "+ Kavali",
    },
  ];
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
        if (!savedCart || savedCart === "undefined") {
        setCart([]);
      } else {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          setCart(parsed);
        } else {
          setCart([]); 
        }
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      setCart([]); 
    }
  }, []);
  

  useEffect(() => {
    const total = cart?.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevproduct) => {
      const existing = prevproduct.find((item) => item.id === product.id);
      console.log(existing);

      if (existing) {
        return prevproduct.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        console.log("else");
        return [...prevproduct, { ...product, quantity: 1 }];
      }
    });
    console.log(cart, cart.length);
  };
  const cartIncrement = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity >= 5) {
            alert("Maximum quantity is 5!");
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const cartDecrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  return (
    <div className="scroll-smooth">
      <Navbar cartValue={totalQuantity}/>
      <div className="  flex flex-wrap justify-center gap-3 sm:gap-8 md:gap-8 lg:gap-15 m-4 ">
        {products.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl object-cover"
          />
        ))}
      </div>
      <Text text="Products" className="font-bold text-3xl mx-10 text-orange-500" />
      <ProductCard
        products={products}
        addToCart={handleAddToCart}
        onInc={cartIncrement}
        onDec={cartDecrement}
      />
    </div>
  );
}
