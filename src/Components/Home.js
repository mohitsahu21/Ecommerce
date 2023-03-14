
import "./Home.scss"
import Banner from './Banner'
import Category from "./Category";
import Products from "./Products";
import { useEffect ,useContext, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../utils/Context";
import React from "react";
import axios from "axios";



export default function Home (){

   const [prod,SetProd] = useState([]);
   const [category,setCategory] = useState([]);
   
   
   useEffect(()=>{
      axios.get('http://localhost:1337/api/products?populate=*').then((res) => {
         console.log(res)
         SetProd(res.data)
        
      }).catch((err) =>{console.log(err)});

      axios.get('http://localhost:1337/api/categories?populate=*').then((res) => {
        
         setCategory(res.data.data)
         console.log(res)
      }).catch((err) =>{console.log(err)});

      
   },[])

 


    return <div >
       <Banner/>
       <div className="main-content">
       <div className="layout">
          <Category category={category}/>
         <Products prod={prod}/>
        
          
          
       </div>
       </div>
    </div>
    
    }