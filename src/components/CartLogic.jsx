import { useEffect, useState } from "react";
import { CartContext } from "../CartContext";

export default function CartLogic({ children }) {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isCartInitialized, setIsCartInitialized] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
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
    }
    finally{
      setIsCartInitialized(true)
    }
  }, []);

  useEffect(() => {
    if(isCartInitialized){
    localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart,isCartInitialized]);
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevItem) => {
      const existing = prevItem.find((item) => item.id === product.id);
      if (existing) {
        return prevItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItem, { ...product, quantity: 1 }];
    });
  };

  const onIncrease = (id) => {
    setCart((prevItem) =>
      prevItem.map((item) => {
        if (item.id === id) {
          if (item.quantity > 5) {
            alert("maximum quantity is 5!");
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  };
  const onDecrease = (id) => {
    setCart((prevItem) =>
      prevItem
        .map((item) =>
          item.id === id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
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
