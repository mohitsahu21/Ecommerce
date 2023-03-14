import Poster from "./images/poster.jpg"
import "./Banner.scss"

export default function Banner (){
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
               <h1>SALES</h1>
               <p>Game Console gives your children the chance to experience your growth and
                 happiness, and promote the communication and feelings with your children.
         Let children enjoy the same happiness and fun in their childhood as you did!</p>
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>

            </div>
            </div>
            <img className="banner-img" src={Poster} alt="poster"/>

        </div>
        
    </div>
    
    }