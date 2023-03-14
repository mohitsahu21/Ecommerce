import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import './Cart.scss'
import CartItem from "./CartItem"
import { Context } from "../utils/Context"
import { useCallback, useContext } from "react";
import useRazorpay from "react-razorpay";



export default function Cart({setShowCart}){
      const {cartItem,cartSubTotal}=  useContext(Context);
      const Razorpay = useRazorpay();
      const razorPayDisplay = useCallback(async (total) => {
           const options = {
            key : "rzp_test_9ZjHU6ApGBQ0IC",
            amount : total*100,
            currency: "INR",
            name: "Game Store",
            description: "Game Transactions",
            handler: (res)=>{
                console.log(res)
            },
            prefill: {
                name: "Mohit Sahu",
                email: "mohitsahu1993@gmail.com",
                contact: "9925875236",
              },
              notes: {
                address: "Razorpay Corporate Office",
              },
              theme: {
                color: "#3399cc",
              }
           }
           const rzp1 = new Razorpay(options);
           rzp1.open();
      },[Razorpay])

    return <div className="cart-panel">

        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">

                <span className="heading">Shopping Cart</span>
                <span className="close-btn">
                    <MdClose/>
                    <span className="text" onClick={()=> setShowCart(false)}>Close</span>
                </span>
            </div>
           { !cartItem?.length && <div className="empty-cart">
                <BsCartX/>
                <span>No Product in the Cart</span>
                <button className="return-cta">RETURN TO SHOP</button>

            </div>}
        {!!cartItem?.length && <>
          <CartItem/>
          <div className="cart-footer">
            <div className="subtotal">
                <span className="text"> SubTotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>

            </div>
            <div className="button">
                <button className="checkout" onClick={() => {razorPayDisplay(cartSubTotal)}}>Checkout</button>
            </div>
          </div>
         </>}

        </div>
    </div>
    
    }