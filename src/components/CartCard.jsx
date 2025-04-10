import Image from './Image';
import Text from './Text';
import LeftArrow from '../assets/leftArrow.png';
import CrossIcon from '../assets/crossIcon.png';

function CartCard({cartValue}) {
  return (
    <div className='flex flex-wrap justify-center gap-9 sm:gap-8 md:gap-8 lg:gap-15 m-4 '>
       <Image
       src={LeftArrow}
       alt="leftarrow pic"
       className="w-7 h-7 m-3"
       />
       <Text
       text="Your Cart"
       className='text-3xl  font-bold my-2'/>
       <span className="text-xl text-black font-bold">{cartValue}</span>
       
       <Image
       src={CrossIcon}
       alt="crossicon pic"
       className="w-7 h-7 m-4"
       />
    </div>
  )
}

export default CartCard
