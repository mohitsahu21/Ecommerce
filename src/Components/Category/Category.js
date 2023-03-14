import Products from "../Products";
import axios from "axios";
import './Category.scss'
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState,useEffect } from "react";

function Category(){
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
    
//     const [data,setData] = useState();
//    useEffect(()=>{
//     axios.get(`http://localhost:1337/api/products?populate=*&[filters][categories][id]=${id}`).then((res) => {
       
//        setData(res.data.data)
      
      
//     }).catch((err) =>{console.log(err)}); },[])
   
    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title"> {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title} </div>
            <Products InnerPage={true} prod={data}/>
            { console.log(data)}
        </div>
    </div>
}

export default Category;
