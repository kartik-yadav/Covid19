import React from "react";
import "./Home.css";
import Cards from "../Cards/Cards";
import Recovery from  "../Recovery/Recovery";
// import Twitter from "../Twitter/Twitter";
const Home = () => {
    return (
        <div className="homecontainer">
            <div className="cards">
                <Cards/>
            </div>
            <div className="rcontainer">
                <Recovery/>
            </div>
        </div>
    );
}

export default Home;

