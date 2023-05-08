import "./featuredRoom.css"
import Img1 from "../../img/habitacion-losalamos.jpg"

const FeaturedRoom = () => {
  return (
    <div className="fr">
      <div className="frItem">
        <img src={Img1} alt="habitacion los alamos" className="frImg"/>
        <span className="frName">Suite Double</span>
        <span className="frHotel">Los Alamos</span>
        <span className="frPrice">$1650</span>
          <div className="frRating">
            <button>8.2</button>
            <span>Excellent</span>
          </div>
      </div>
      <div className="frItem">
        <img src={Img1} alt="habitacion los alamos" className="frImg"/>
        <span className="frName">Suite Double</span>
        <span className="frHotel">Los Alamos</span>
        <span className="frPrice">$1650</span>
          <div className="frRating">
            <button>8.2</button>
            <span>Excellent</span>
          </div>
      </div>
      <div className="frItem">
        <img src={Img1} alt="habitacion los alamos" className="frImg"/>
        <span className="frName">Suite Double</span>
        <span className="frHotel">Los Alamos</span>
        <span className="frPrice">$1650</span>
          <div className="frRating">
            <button>8.2</button>
            <span>Excellent</span>
          </div>
      </div>
      <div className="frItem">
        <img src={Img1} alt="habitacion los alamos" className="frImg"/>
        <span className="frName">Suite Double</span>
        <span className="frHotel">Los Alamos</span>
        <span className="frPrice">$1650</span>
          <div className="frRating">
            <button>8.2</button>
            <span>Excellent</span>
          </div>
      </div>
    </div>
    
  )
}

export default FeaturedRoom