import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Image from "../components/Image";
import Text from "../components/Text";
import Button from "../components/Button";
import juices from "../assets/juices.jpg";

const WelcomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landingPage");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full justify-center items-center animate-pulse  h-screen bg-gradient-to- bg-green-500 from-green-700 to-green-900  border-white rounded-3xl">
      <div className="w-full text-center relative ">
        <div className="w-40 h-40 mx-auto ">
          <Image
            src={juices}
            alt="Delicious Food"
            className="w-full h-full rounded-full border-4 shadow-xl border-white"
          />
        </div>
        <Text
          className="text-xl font-bold text-white-800 mt-4"
          text="Enjoy Your LocalFoodie"
        />
        <Text
          className="text-white-600 mt-2"
          text="Taste the best Baverages at your fingertips."
        />
        <Link to="/landingPage">
          <Button
            label="Ika Modalupedadama"
            className="mt-6 bg-orange-500 border-1 text-white font-bold px-6 py-3 rounded-full shadow-2xl cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 transition duration-700 ease-in-out "
          />
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
