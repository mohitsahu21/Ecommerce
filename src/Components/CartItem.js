import Game from "./images/gta.png"
import { MdClose } from "react-icons/md"
import './CartItem.scss'
import { useContext } from "react"
import { Context } from "../utils/Context"



export default function CartItem() {
     const {cartItem,handleRemoveFromCart,handleCartProductQuantity} = useContext(Context)

    return (
    <div className='cart-products'>
        {cartItem.map( item => (
             <div key={item.id} className='cart-product'>
             <div className='image-container'>
                 <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="game" />
             </div>
             <div className="prod-detail">
                 <span className="name"> {item.attributes.title}</span>
                 <MdClose className="closs-btn" onClick={() => handleRemoveFromCart(item)} />
                 <div className="quantity-buttons">
                     <span onClick={() => handleCartProductQuantity('dec',item)}>-</span>
                     <span>{item.attributes.quantity}</span>
                     <span onClick={() => handleCartProductQuantity('inc',item)}>+</span>
                 </div>
                 <div className="text">
                     <span>{item.attributes.quantity}</span>
                     <span>x</span>
                     <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
                 </div>
 
             </div>
         </div>
 



        ))}
       
    </div>)
}