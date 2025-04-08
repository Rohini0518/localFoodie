import Image from "../components/Image";
import Logo from '../assets/Localfoodielogo.png';

function Navbar() {
  return (
    <div className="w-full flex justify-start items-center p-1 h-10 bg-gradient-to-r from-green-700 via-green-600 to-green-700">
      <Image 
        src={Logo} 
        alt="logo"
        className="h-8 sm:h-7 md:h-7 lg:h-10 object-cover"
      />
    </div>
  );
}

export default Navbar;
