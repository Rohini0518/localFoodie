import Image from "../components/Image";
import Logo from '../assets/Localfoodielogo3.png';
import Cart from '../assets/cart.png';
import Input from "./Input";
import AddToCartPage from "../pages/AddToCartPage";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

function Navbar() {
const {totalQuantity}=useContext(CartContext)
  return (
    <div className="w-full sticky top-0 z-50 flex justify-start items-center p-2 h-12 bg-gradient-to-r from-green-700 via-green-600 to-green-700">
      <Link to="/landingPage">
      <Image 
        src={Logo} 
        alt="logo"
        className="h-7 sm:h-7 md:h-7 lg:h-10 object-cover border-2 border-orange-500"
      /></Link>
      <Input/>
      <Link to="/cart">     
      <Image
      src={Cart}
      alt="cart"
      className="h-8  object-cover"
      /></Link> 
      <sup className="text-xl text-white font-bold">{totalQuantity}</sup>
    </div>
    );
}

export default Navbar;
