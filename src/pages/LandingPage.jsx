import juiceLogo from "../assets/sugarcanejuice-small.png";
import Image from "../components/Image";
import Text from "../components/Text";
import ProductCard from "../components/ProductCard";

export default function LandingPage() {
  const bannerLogos = [juiceLogo, juiceLogo, juiceLogo, juiceLogo];
 

  return (
    <div className="scroll-smooth">
      <div className="  flex flex-wrap justify-center gap-2 sm:gap-8 md:gap-8 lg:gap-15 m-2 ">
        {bannerLogos.map((image, index) => (
          <Image
            key={index}
            src={image}
            className="w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl object-cover"
          />
        ))}
      </div>
      <Text text="Products" className="font-bold" />
      <ProductCard/>
    </div>
  );
}
