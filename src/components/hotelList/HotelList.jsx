import "./hotelList.css"
import img1 from "../../img/los-alamos.jpg"
import img2 from "../../img/xelena.jpg"
import img3 from "../../img/altocalafate.jpg"
import img4 from "../../img/design-suites.jpg"
import img5 from "../../img/las-dunas.jpg"
import img6 from "../../img/rochester.jpg"

const HotelList = () => {
return (
    <div className="hList">
        <div className="hListItem">
            <img src={img1} alt="Los Alamos" className="hListImg" />
            <div className="hListTitles">
                <h4>Los Alamos</h4>
            </div>
        </div>
        
        <div className="hListItem">
            <img src={img2} alt="Los Alamos" className="hListImg" />
            <div className="hListTitles">
                <h4>Xelena</h4>
            </div>
        </div>
        <div className="hListItem">
            <img src={img3} alt="Los Alamos" className="hListImg" />
            <div className="hListTitles">
                <h4>Alto Calafate</h4>
            </div>
        </div>
        <div className="hListItem">
            <img src={img4} alt="Los Alamos" className="hListImg" />
            <div className="hListTitles">
                <h4>Design Suites</h4>
            </div>
        </div>
        <div className="hListItem">
            <img src={img5} alt="Los Alamos" className="hListImg" />
            <div className="hListTitles">
                <h4>Las Dunas</h4>
            </div>
        </div>
        <div className="hListItem">
            <img src={img6} alt="Los Alamos" className="hListImg" />
            <div className="hListTitles">
                <h4>Rolchester</h4>
            </div>
        </div>
    </div>
  )
}

export default HotelList