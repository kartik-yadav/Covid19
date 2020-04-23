import React from "react";
import "./Home.css";
import Cards from "../../components/Cards/Cards";
import Recovery from "../../components/Recovery/Recovery";
import Twitter from "../../components/Twitter/Twitter";
import News from "../../components/News/News";

const Home = () => {
  return (
    <div className="homecontainer">
      <div className="cards">
        <Cards />
        <div className="newshome">
          <News />
        </div>
      </div>
      <div className="rtcontainer">
        <Recovery />
        <Twitter />
      </div>
    </div>
  );
};

export default Home;
