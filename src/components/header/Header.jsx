import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCar, faPersonHiking, faTaxi } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport Taxis</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPersonHiking}/>
                    <span>Attractions</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header