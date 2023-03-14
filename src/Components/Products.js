import "./Products.scss"
import Product from "./Product"
import React from "react";


export default  function Products({prod,InnerPage}){

    return <div className="products-container">
       { !InnerPage && <div className="sec-heading">PRODUCTS</div>}
        <div className="products">
          
            {prod?.data?.map((item )=> (<Product key={item.id}  id={item.id} data={item.attributes} />))}
            
            
            
        </div>
    </div>
}