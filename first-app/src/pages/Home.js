import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/healthy.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="App2">
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> KHABO </h1>
          <p> FOOD SUBSCRIPTION SERVICE</p>
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
