import React from "react";
import "./CardTemplate.css";
import CountUp from "react-countup";

const CardTemplate = ({
  title = "cases",
  src = "source",
  srcs = "sources",
  value = "nil",
}) => {
  return (
    <div className="card">
      <div className="cardcontent">
        <span>
          <span>
            {title} <img style={{ width: "20px" }} src={src} alt="logo" />
          </span>
        </span>
        <span>
          <h3 className="h3ct">
            {" "}
            <CountUp start={0} end={value} duration={5} separator="," />
          </h3>
        </span>
      </div>
      <div>
        <img src={srcs} alt="logo" />
      </div>
    </div>
  );
};

export default CardTemplate;
