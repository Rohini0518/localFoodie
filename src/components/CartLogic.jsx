import { useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import axios from "axios";

export default function CartLogic({ children }) {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isCartInitialized, setIsCartInitialized] = useState(false);

  useEffect(() => {
    try {
      const savedCart = axios.get("http://localhost:4000/cart/getAllItems");
      if (!savedCart || savedCart === "undefined") {
        setCart([]);
      } else {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          setCart([]);
        }
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      setCart([]);
    } finally {
      setIsCartInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isCartInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isCartInitialized]);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
  }, [cart]);

  const handleAddToCart = async (product) => {
    try {
       console.log(product._id);
      const response = await axios.post(
        `http://localhost:4000/cart/createCartItem`,
        {
          productId: product._id,
          quantity: 1,
        }
      );
      // console.log(response);
    const createdItem=response.data.item
      console.log(response.data.item);

      setCart((prevCart)=>{
      return [...prevCart,createdItem]
      })
    } catch (error) {
      console.log(error.message);
    }
  };

  const onIncrease = async (id) => {
    console.log("id for inc",typeof(id));
    
    try {
      const response = await axios.put(`http://localhost:4000/cart/updateItemById/${id}`, {
        action: "increase",
      });
      console.log(response);
      
      const updatedItem = response?.data?.item;
      console.log(updatedItem);

      setCart((prevItem) =>
        prevItem.map((item) => item._id === id ? updatedItem : item)
      );
    } catch (error) {
      console.error(
        "Failed to increase quantity:",
        error.response?.data || error.message
      );
    }
  };

  const onDecrease = async (id) => {
    try {
      const response = await axios.put(
        "http://localhost:4000/cart/updateItemById/" + id,
        { action: "decrease" }
      );
      const updatedData = response.data.item;
      setCart((prevItem) =>
        prevItem
          .map((item) =>
            item._id === id && item.quantity > 0 ? updatedData : item
          )
          .filter((item) => item.quantity > 0)
      );
    } catch (error) {
      console.log(
        "cant decrease the item",
        error.response?.data || error.message
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        onDecrease,
        onIncrease,
        totalQuantity,
        setTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
