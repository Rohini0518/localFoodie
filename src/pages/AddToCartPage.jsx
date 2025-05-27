import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";
import Text from "../components/Text";
import Image from "../components/Image";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
export default function AddToCartPage() {
  const navigate = useNavigate();
  const { cart, onIncrease, onDecrease,handleCancelProduct } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [delivery] = useState(20);

  useEffect(() => {
    const productPrice = cart.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );
    setTotalPrice(productPrice);
  }, [cart]);


  if (!cart) return <h1>No items in cart Please add</h1>;
  return (
    <div>
      <div className=" flex mx-2 my-4 items-center justify-between text-bold font-xl ">
        <div className="flex font-bold ">
          <Text
            text={"<"}
            onClick={() => navigate(-1)}
            className="pr-2 text-2xl cursor-pointer"
          />
          <Text
            className="mt-1 "
            text={`mee sanchi (${cart.length > 0 ? cart.length : "0"})`}
          />
        </div>
        <div>
          <Link to="/landingPage">
            <Text
              className="mr-2 font-bold cursor-pointer px-3 py-1 hover:bg-red-600 text-white rounded-md bg-red-400"
              text={"X"}
            />
          </Link>
        </div>
      </div>
      <hr className="border-t border-gray-800 my-4" />

      <div>
        {cart.length > 0
          ? cart.map((item) => {
              const product = item.productId || {};
      const imgSrc  = product.image || null;
      const name    = product.name  || "Unknown Product";
      const price   = typeof product.price === "number" 
                        ? product.price 
                        : 0;
      const qty     = typeof item.quantity === "number" 
                        ? item.quantity 
                        : 0;
      const total   = price * qty;
          return  (
              <div key={item._id} className="flex justify-between items-start mx-8 my-4">
                {imgSrc
      ?<Image src={imgSrc} className="w-40 h-40 rounded-xl" />
      : <div>No Image</div>
    }
                
                <div className="mx-4 flex flex-col items-start ">
                  <div className="w-full flex flex-col items-start">
                    <Text
                      text={name}
                      className="font-bold text-xl break-words"
                    />
                  </div>
                  <Text
                    text={`₹ ${total}Rs`}
                    className="text-red-400 text-xl font-bold my-2 "
                  />
                  <div className="bg-green-400 w-22 rounded-xl py-1 px-2 ">
                    <Button
                      label={"➖"}
                      className="pr-2 cursor-pointer" 
                      onClick={() => onDecrease(item._id)}
                    />
                    <span className="text-white font-bold text-md">
                      {item.quantity}
                    </span>
                    <Button
                      label={"➕"}
                      className="pl-2 cursor-pointer"
                      onClick={() => onIncrease(item._id)}
                    />
                  </div>
                </div>
                <Text
                  text={"X"}
                  className="cursor-pointer text-red-400 font-semibold"
                  onClick={() => handleCancelProduct(item._id)}
                />
              </div>
            )})
          : ""}
      </div>
     {totalPrice != 0?
      <div className="m-8 flex justify-between mx-8 my-4">
        <Text
          text="Price Details"
          className=" text-2xl font-bold text-green-400 my-4 "
        />
        <div className="h-50">
          <div className="flex justify-between mb-4  items-center">
            <Text text="Products Price" />
            <Text text={totalPrice} />
          </div>
          <div className="flex justify-between mb-4 items-center">
            <Text text="Delivery" />{" "}
            <Text text={ delivery} />
          </div>
          <div className="flex justify-between items-center">
            <Text text="Total Price" />{" "}
            <Text text={totalPrice + delivery} />
          </div>
        </div>

        <Button
          label={`pay ${totalPrice + delivery }`}
          className=" w-[30%] fixed bottom-2  bg-green-500 text-white px-3 py-3 rounded-xl text-lg font-bold shadow-lg hover:bg-green-600 cursor-pointer"
        />
      </div>:<h1 className="flex items-center justify-center text-3xl text-red-400 font-bold ">Please Add items into Cart</h1>}
    </div>
  );
}
