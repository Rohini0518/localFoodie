import Image from "../assets/components/Image";
import Text from "../assets/components/Text";
import Button from "../assets/components/Button";
import juices from "../assets/juices.jpg";

const WelcomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to- bg-green-500 from-green-700 to-green-900 border-4 rounded-3xl">
      <div className="w-80 text-center relative">
        <div className="w-40 h-40 mx-auto -mt-20">
          <Image
            src={juices}
            alt="Delicious Food"
            className="w-full h-full rounded-full border-4 border-white"
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

        <Button
          label="Get Started"
          className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-500 transition"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
