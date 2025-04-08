import Image from "../components/Image";
import Logo from '../assets/Localfoodielogo3.png';
import Cart from '../assets/cart.png';
import Input from "./Input";

function Navbar() {
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
      className="h-10 sm:h-7 md:h-10 lg:h-10 object-cover"
      />
    </div>
  );
}

export default Navbar;
