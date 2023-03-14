import { useNavigate } from 'react-router-dom'
import './Category.scss'
import Game from "./images/gta.png"


export default function CategoryHead({category}){
  const  link  =  "http://localhost:1337"
  const navigate = useNavigate();
    return (<>
      <div className="sec-heading">CATEGORY</div>
      <div className="shop-by-category">
        <div className="categories"> 
        {category.map((item) =>   <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
            <img src={link + item.attributes.img.data.attributes.url} alt="game"/>
          </div>  )}
        

        </div>

      </div>
      </>
    )
  
  }