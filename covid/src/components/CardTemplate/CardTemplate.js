import React from "react";
import "./CardTemplate.css";

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
          <h3 className="h3ct"> {value} </h3>
        </span>
      </div>
      <div>
        <img src={srcs} alt="logo" />
      </div>
    </div>
  );
}

export default CardTemplate;
