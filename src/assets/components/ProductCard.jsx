import Image from "../components/Image";
import Text from "../components/Text";
import Button from "../components/Button";
import juiceLogo from "../assets/sugarcanejuice-small.png";

export default function ProductCard(){
    return(
        <div>
        <div className="">
          <div className=" rounded-xl shadow-2xl w-90">
            <Image src={juiceLogo} className="w-full h-60 rounded-t-xl  " />
            <Text
              text="Cheruku Rasam(1 Glass)"
              className="text-3xl font-bold mt-2"
            />
            <div className="flex justify-between  m-2 p-2 align-center cursor-pointer">
              {" "}
              <Text
                text="₹20 Rs "
                className="text-3xl font-semibold text-green-400 mt-2"
              />
              <Button
                label="+ Konandi"
                className="rounded-xl bg-green-400 px-4 py-2  text-white cursor-pointer text-2xl font-bold"
              />
            </div>
          </div>
        </div>   
        </div>
    )
}