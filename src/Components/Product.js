import { useNavigate } from "react-router-dom";
import "./Product.scss"

export default function Product({id,data}){
  const link = "http://localhost:1337";
  const navigate = useNavigate();

 
  return  <div className="product-card"  onClick={()=> navigate("/product/" + id)}>
          <div className="thumbnail">
            
            <img src={link + data.img.data[0].attributes.url} alt="game"></img> </div>
          <div className="prod-details">
              <span className="name">{data.title}</span>
              <span className="price">&#8377;{data.price}</span>
          </div>
  </div>

}