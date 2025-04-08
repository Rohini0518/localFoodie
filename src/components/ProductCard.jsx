import Image from "./Image";
import Text from "../components/Text";
import Button from "./Button";

export default function ProductCard({
  products,
  cart,
  addToCart,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => {
        const existInCart = cart.find((item) => item.id === product.id);
        return (
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
              {!existInCart ? (
                <Button
                  label={product.label}
                  onClick={() => addToCart(product)}
                  className="rounded-xl shadow-2xl bg-green-400 px-2 py-1 text-white cursor-pointer text-2xl font-bold"
                />
              ) : (
                <div className="rounded-xl shadow-2xl px-3 py-2 text-white cursor-pointer text-xl font-semibold">
                  <Button className="text-green-500 text-md" label={"➕"} />
                  <span className="mx-2 text-black-800">{existInCart.quantity}</span>
                  <Button className="text-green-500 text-md" label={"➖"} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
