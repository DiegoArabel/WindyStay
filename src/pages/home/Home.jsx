import Card from "../../components/card/Card";
import HotelList from "../../components/hotelList/HotelList";
import Header from "../../components/header/Header";
import HeaderImg from "../../components/header/HeaderImg";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <HeaderImg/>
        <div className="homeContainer">
          <Card/>
          <h1 className="homeTitle">Browse by hotels</h1>
          <HotelList/>
        </div>
    </div>
  );
};

export default Home;