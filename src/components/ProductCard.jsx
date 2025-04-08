import Image from "./Image";
import Text from "../components/Text";
import Button from "./Button";
import juiceLogo from "../assets/sugarcanejuice-small.png";
import { useState } from "react";

export default function ProductCard() {
  const [addProduct, setAddProduct] = useState([]);
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
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "+ Kavali",
    },
    {
      id: 3,
      name: "Curd(1/2 liter)",
      price: 30,
      image:"https://media.istockphoto.com/id/1218711576/photo/home-made-curd-in-a-earthen-bowl.jpg?s=2048x2048&w=is&k=20&c=vW76YCnN41EUmeg180y-k5AKXy-_Ymj5I4TIWRkMcmE=",
      label: "+ Kavali",
    },{
      id: 4,
      name: "Thums Up (Bottle)",
      price: 45,
      image: "https://img.clevup.in/325460/thums-up-pet-bottle-750ml-1696659967639_SKU-2095_0.jpg?width=600&format=webp",
      label: "+ Kavali",
    },
    {
      id: 5,
      name: "Sprite (Bottle)",
      price: 40,
      image: "https://img.thecdn.in/285347/1678882370021_SKU-0456_0.jpg?width=600&format=webp",
      label: "+ Kavali",
    },
  ];

  const handleAddToCart = (product) => {
    setAddProduct((prevproduct) => {
      const existing = prevproduct.find((item) => item.id === product.id);
      console.log(existing);

      if (existing) {
        return prevproduct.map((item) => 
          
          item.id === product.id ? {...item,quantity:item.quantity + 1} : item
        );
      } else {
        console.log("else");

        return [...prevproduct, { ...product, quantity: 1 }];
      }
    });
    console.log(addProduct, addProduct.length);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-80 h-[300px] rounded-xl shadow-2xl m-2"
        >
          <Image src={product.image} className="w-full h-40 rounded-t-xl  " />
          <Text
            text={product.name}
            className="text-2xl font-bold mt-2 line-clamp-2"
          />
          <div className="flex justify-between items-center mx-4 my-6">
            <Text
              text={`₹${product.price}Rs`}
              className="text-3xl font-semibold text-green-400 "
            />
            <Button
              label={product.label}
              onClick={() => handleAddToCart(product)}
              className="rounded-xl shadow-2xl bg-green-400 px-2 py-1 text-white cursor-pointer text-2xl font-bold"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
