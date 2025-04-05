import Image from "./Image";
import Text from "../components/Text";
import Button from "./Button";
import juiceLogo from "../assets/sugarcanejuice-small.png";

export default function ProductCard(){
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
      name: "Thums Up (Bottle)",
      price: 30,
      image: juiceLogo,
      label: "+ Kavali",
    },
    {
      id: 3,
      name: "Curd(1/2 liter)",
      price: 30,
      image: juiceLogo,
      label: "+ Kavali",
    },
    {
      id: 4,
      name: "Milk(1/2 liter) ",
      price: 25,
      image: juiceLogo,
      label: "+ Kavali",
    },
    {
      id: 5,
      name: "Sprite (Bottle)",
      price: 30,
      image: juiceLogo,
      label: "+ Kavali",
    },
  ];
    return(
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
{products.map((product)=>(
          <div  key={product.id} className="w-80 h-[300px] rounded-xl shadow-2xl m-2">
            <Image src={juiceLogo} className="w-full h-40 rounded-t-xl  " />
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
                className="rounded-xl shadow-2xl bg-green-400 px-2 py-1 text-white cursor-pointer text-2xl font-bold"
              />
            </div>
          </div>
          ))}
        </div>
    )
}