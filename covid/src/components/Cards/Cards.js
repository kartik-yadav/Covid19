import React from "react";
import CardTemplate from "../CardTemplate/CardTemplate";
import down from "../../assests/images/Down.svg";
import up from "../../assests/images/Up.svg";
import graph from "../../assests/images/Graph.svg";
import graph1 from "../../assests/images/Graph 1.svg";
import graph2 from "../../assests/images/Graph 2.svg";
import graph3 from "../../assests/images/Graph 3.svg";
import { fetchGlobalCases } from "../Api/Api";
import { useState } from "react";
import { useEffect } from "react";
import "./Cards.css";
let data1;

const Cards = () => {
  const [first, setFirst] = useState();

  const fetchAll = async () => {
    data1 = await fetchGlobalCases();
    console.log(data1);
    setFirst(data1.cases);
    console.log(first);
  };
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="cardheight">
      {data1 ? (
        <div className="cardscontainer">
          <CardTemplate
            title="Total Cases"
            src={up}
            srcs={graph}
            value={data1.cases}
          />
          <CardTemplate
            title="Recovered"
            src={down}
            srcs={graph1}
            value={data1.recovered}
          />
          <CardTemplate
            title="Active Cases"
            src={up}
            srcs={graph2}
            value={data1.active}
          />
          <CardTemplate
            title="Total Death"
            src={up}
            srcs={graph3}
            value={data1.deaths}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Cards;
