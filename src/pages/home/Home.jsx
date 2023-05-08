import Card from "../../components/card/Card";
import HotelList from "../../components/hotelList/HotelList";
import Header from "../../components/header/Header";
import HeaderImg from "../../components/header/HeaderImg";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import FeaturedRoom from "../../components/featuredRoom/FeaturedRoom";
import Footer from "../../components/footer/Footer";

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
          <h1 className="homeTitle">Browse by rooms</h1>
          <FeaturedRoom/>
          <Footer/>
        </div>
    </div>
  );
};

export default Home;