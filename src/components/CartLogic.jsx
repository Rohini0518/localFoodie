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
          "http://localhost:4000/cart/getAllItems"
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
        `http://localhost:4000/cart/createCartItem`,
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
        `http://localhost:4000/cart/updateItemById/${id}`,
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
        "http://localhost:4000/cart/updateItemById/" + id,
        { action: "decrease" }
      );
      const updatedData = response.data.item;
      console.log(updatedData);
      setCart((prevItem) =>
        updatedData
          ? prevItem.map((item) => (item._id === id ? updatedData : item))
          : prevItem.filter((item) => item._id !== id)
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
