import "./card.css"
import img1 from "../../img/los-alamos.jpg"
import img2 from "../../img/xelena.jpg"
import img3 from "../../img/altocalafate.jpg"

const Card = () => {
  return (
    <div className="card">
      <div className="cardItem">
        <img src={img1} alt="" className="cardImg" />
        <div className="cardTitles">
          <h1>Los Alamos</h1>
          <h3>$1500</h3>
        </div>
      </div>
      <div className="cardItem">
        <img src={img2} alt="" className="cardImg" />
        <div className="cardTitles">
          <h1>Xelena</h1>
          <h3>$1750</h3>
        </div>
      </div>
      <div className="cardItem">
        <img src={img3} alt="" className="cardImg" />
        <div className="cardTitles">
          <h1>Alto Calafate</h1>
          <h3>$1300</h3>
        </div>
      </div>
    </div>
  )
}

export default Card