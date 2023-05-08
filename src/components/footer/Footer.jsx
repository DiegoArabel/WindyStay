import "./footer.css"

const Footer = () => {
  return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <img src="https://i.ytimg.com/vi/0qe4rStwiHY/maxresdefault.jpg" alt="El Calafate" className="fImg"/>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Hotels</li>
                    <li className="fListItem">Type of Room</li>
                    <li className="fListItem">El Calafate, Santa Cruz</li>
                    <li className="fListItem">Tel: 2902-123456</li>
                </ul>
            </div>
            <div className="fText">
                Copyright © 1996–2023 WindyStay.com™. All rights reserved.
            </div>
        </div>
  )
}

export default Footer