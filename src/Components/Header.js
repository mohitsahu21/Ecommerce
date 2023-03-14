import {TbSearch} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import {CgShoppingCart} from "react-icons/cg"
import Search from "./Search";
import Cart from "./Cart";
import { Context } from "../utils/Context";
import "./Header.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Header (){
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    const [showCart,setShowCart] = useState(false)
    const [showSearch,setShowSearch] = useState(false)
return  <>
<header className="main-header">
    <div className="header-content">
        <ul className="left">
            <li onClick={()=> navigate("/")}>Home</li>
            <li onClick={()=> navigate("/")}>ABOUT</li>
            <li onClick={()=> navigate("/category")}>CATEGORIES</li>
        </ul>
        <div className="center" onClick={()=> navigate("/")}>GAME STORE</div>
        <div className="right">
            <TbSearch onClick={() => setShowSearch(true)}/>
            <AiOutlineHeart/>
            <span className="cart-icon" onClick={() => setShowCart(true)}>
                <CgShoppingCart/>
                {!!cartCount && <span>{cartCount}</span>}
            </span>

        </div>
        
         </div>


</header>
{showCart && <Cart setShowCart={setShowCart} />}
 { showSearch && <Search setShowSearch={setShowSearch}/> }

</>
}
 