import Image from "./Image";
import Text from "../components/Text";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function ProductCard({ products, addToCart, onInc, onDec }) {
  const { cart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
      {products.map((product) => {
        const existInCart = cart?.find((item) => item.id === product.id);
        return (
          <div
            key={product.id}
            className="w-80 h-[320px] mx-auto rounded-xl shadow-2xl m-2 cursor-pointer object-cover transform transition-transform duration-500 active:scale-110 lg:hover:scale-110"
          >
            <Image src={product.image} className="w-full h-40 rounded-t-xl" />
            <Text
              text={product.name}
              className="text-2xl font-bold mt-2 pl-4 line-clamp-2"
            />
            <div className="flex justify-between items-center mx-3 my-3">
              <Text
                text={`₹${product.price}Rs`}
                className="text-3xl font-semibold text-green-500 "
              />
              {!existInCart || existInCart.quantity === 0 ? (
                <Button
                  label={product.label}
                  onClick={() => addToCart(product)}
                  className="rounded-xl shadow-2xl bg-green-500 px-2 py-1 text-white cursor-pointer text-2xl font-bold"
                />
              ) : (
                <div className="rounded-xl shadow-2xl px-2 py-1 text-white cursor-pointer text-2xl font-semibold">
                  <Button
                    className="text-green-500 text-md"
                    label={"➖"}
                    onClick={() => onDec(product.id)}
                  />
                  <span className="mx-2 text-black font-xl">
                    {existInCart.quantity}
                  </span>
                  <Button
                    className="text-green-500 text-md"
                    label={"➕"}
                    onClick={() => onInc(product.id)}
                  />
                </div>
              )}
            </div>
            <Button
              label="Konnandi"
              className="w-70 bg-orange-400 text-xl text-white ml-4 mb-1 p-1 rounded-xl shadow-xl"
            />
          </div>
        );
      })}
    </div>
  );
}
