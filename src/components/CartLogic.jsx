import { useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import axios from "axios";

export default function CartLogic({ children }) {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    async function loadCart() {
      try {
        const response = await axios.get(
          "https://local-foodie-backend.vercel.app/cart/getAllItems"
        );
        const cartData = response.data.item;
        console.log(cartData);
        setCart(cartData);
      } catch (error) {
        console.log("failed to load cart from server", error);
        setCart([]);
      }
    }
    loadCart();
  }, []);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0) || 0;
    setTotalQuantity(total);
  }, [cart]);

  const handleAddToCart = async (product) => {
    try {
      console.log(product._id);
      const response = await axios.post(
        `https://local-foodie-backend.vercel.app/cart/createCartItem`,
        {
          productId: product._id,
          quantity: 1,
        }
      );
      const createdItem = response.data.item;
      setCart((prevCart) => {
        return [...prevCart, createdItem];
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onIncrease = async (id) => {
    try {
      const response = await axios.put(
        `https://local-foodie-backend.vercel.app/cart/updateItemById/${id}`,
        {
          action: "increase",
        }
      );

      const updatedItem = response?.data?.item;
      console.log(updatedItem);

      setCart((prevItem) =>
        prevItem.map((item) => (item._id === id ? updatedItem : item))
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
        "https://local-foodie-backend.vercel.app/cart/updateItemById/" + id,
        { action: "decrease" }
      );
      console.log("Full response from backend:", response.data);
      const updatedData = response.data.item;
      console.log("deleted item", updatedData);
      
      setCart((prevItem) => {
        if (updatedData) {
          return prevItem.map((item) => (item._id === id ? updatedData : item));
        }
        else {
          return prevItem.filter((item) => item.quantity>0);
        }
      });
    } catch (error) {
      console.log(
        "cant decrease the item",
        error.response?.data || error.message
      );
    }
  };

  
  const handleCancelProduct =async (id) => {
    const deleteProduct=await axios.delete(`https://local-foodie-backend.vercel.app/cart/deleteItemById/${id}`)
    console.log(deleteProduct);
    setCart((prevItem) => prevItem.filter((item) => item._id != id));
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
        handleCancelProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
