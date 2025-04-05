import Image from "./Image";
import Text from "../components/Text";
import Button from "./Button";
import juiceLogo from "../assets/sugarcanejuice-small.png";

export default function ProductCard(){
    return(
        <div>
        <div className="">
          <div className=" rounded-xl shadow-2xl m-2">
            <Image src={juiceLogo} className="w-full h-40 rounded-t-xl  " />
            <Text
              text="Cheruku Rasam(1 Glass)"
              className="text-3xl font-bold mt-2"
            />
            <div className="flex justify-between  mb-4 p-4 align-center cursor-pointer">
              <Text
                text="₹20 Rs "
                className="text-3xl font-semibold text-green-400 mt-2"
              />
              <Button
                label="+ Kavali"
                className="rounded-xl shadow-2xl bg-green-400 px-2 py-1 text-white cursor-pointer text-2xl font-bold"
              />
            </div>
          </div>
        </div>   
        </div>
    )
}