import "./searchItem.css"
import Img1 from "../../img/habitacion-losalamos.jpg"


const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={Img1} alt="losalamos" className="siImg"/>
      <div className="siDesc">
        <h1 className="siTitle">Suite Double</h1>
        <span className="siDistance">200m from center</span>
        <span className="siHotel">Hotel "Los Alamos"</span>
        <span className="siStars">★★★★</span>
        <span className="siCancel">Free Cancellation</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$2490</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem