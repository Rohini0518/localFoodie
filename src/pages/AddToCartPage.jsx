import { CartContext } from "../CartContext";
import { useContext } from "react";
import Text from "../components/Text";
import Image from "../components/Image";
import Button from "../components/Button";
export default function AddToCartPage() {
  const { cart,setCart } = useContext(CartContext);
const onInc=(id)=>{
  setCart((previtem)=>{
previtem.map((item)=>{
  if(item.id===id){
   return {...item,quantity:item.quantity+1}
  }
 return item
})
  })
}
const onDec=(id)=>{
  setCart((prevItem)=>{
    prevItem.map((item)=>
      (item.id===id)?
       {...item,quantity:item.quantity-1}:item
    )
  })
}

  if (!cart) return <h1>No items in cart Please add</h1>
  return (
    <div>
      <div className="text-bold font-xl ">
        <div className="flex m-2 font-bold ">
          <Text text={"<"}  className="pr-2 "/>
          <Text text={`mee sanchi (${cart.length > 0 ? cart.length : "0"})`} />
        </div>
        <Text text={"X"} />
      </div>

      <div>
        {cart.length>0?cart.map((item)=>
        <div key={item.id } className="flex justify-between  mx-3 my-4">
       <Image src={item.image} className="w-40 h-40 rounded-xl"/>
       <div className="mx-4">
        <Text text={item.name} className="font-bold text-xl line-clamp-2 "/>
        <Text text={`₹ ${item.price*item.quantity}Rs`} className="text-red-400 text-xl font-bold my-2 "/>
      <div className="bg-green-400 w-22 rounded-xl py-1 px-2 ">
        <Button label={"➖"} className="pr-2" onClick={()=>onDec(item.id)} />
        <span className="text-white font-bold text-md">{item.quantity}</span>
       <Button label={"➕"} className="pl-2" onClick={()=>onInc(item.id)}/>
       </div> 
        </div>
        <Text text={"X"}/>
        </div>
        ):""}
      </div>
    </div>
  );
}
