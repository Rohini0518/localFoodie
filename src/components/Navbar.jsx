import Image from "../components/Image";
import Logo from '../assets/Localfoodielogo3.png';
import Cart from '../assets/cart.png';
import Input from "./Input";

function Navbar({cartValue}) {
  return (
    <div className="w-full flex justify-start items-center p-2 h-12 bg-gradient-to-r from-green-700 via-green-600 to-green-700">
      <Image 
        src={Logo} 
        alt="logo"
        className="h-7 sm:h-7 md:h-7 lg:h-10 object-cover border-2 border-orange-500"
      />
      <Input/>
      
      <Image
      src={Cart}
      alt="cart"
<<<<<<< HEAD
      className="h-10 sm:h-7 md:h-10 lg:h-10 object-cover p-0"
      />
      <sup className="text-xl text-white">1</sup>
=======
      className="h-10 sm:h-7 md:h-10 lg:h-10 object-cover"
      /><span>{cartValue}</span>
>>>>>>> b92e9b90d33040a89cc405abe92a600eb1bd482c
    </div>
    );
}

export default Navbar;
