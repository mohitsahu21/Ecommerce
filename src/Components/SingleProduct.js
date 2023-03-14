import { useContext} from "react";
import {FaCartPlus} from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../utils/Context";

import './SingleProduct.scss'
import { useState } from "react";

export default function SingleProduct (){

    const {handleAddToCart} = useContext(Context)

    const [quantity,setQuantity] = useState(1)
    const increment = () => {
        setQuantity((pre) => pre+1)
    }
    const decrement = () => {
        setQuantity((pre) => {
            if(pre===1) return 1
            return pre-1
        })
    }
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    
    if(!data) return;
    const product = data.data[0].attributes 


    return <div className='single-product-main-content'>
       <div className='layout'>
        <div className='single-product-page'>
            <div className='left'> <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="game" /></div>
            <div className='right'>
                <div className="name">{product.title}</div>
                <div className="price">&#8377;{product.price}</div>
                <div className="decs">{product.description}</div>

                <div className="card-buttons">
                    <div className="quantity-buttons">
                        <span onClick={decrement}>-</span>
                        <span>{quantity}</span>
                        <span onClick={increment}>+</span>
                    </div>
                    <button className="add-to-card-button" onClick={() => {
                        handleAddToCart(data.data[0],quantity)
                        setQuantity(1);
                    }}>
                        
                          <FaCartPlus/>&nbsp; 
                          Add to Cart
                    </button>
                </div>
            </div>
        </div>
       </div>
    </div>
    
    }