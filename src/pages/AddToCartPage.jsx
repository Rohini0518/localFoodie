import { CartContext } from "../CartContext";
import {useContext} from "react";
import Text from "../components/Text";

export default function AddToCartPage(){
    const {cart}=useContext(CartContext);
    return(
        <div>
          <div> 
            <Text text={`mee sanchi ${cart.length>0 ? cart.length : "0"}`}/>
          </div>
        </div>
    )
}