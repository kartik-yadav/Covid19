import React from "react";
import Fever from "../../assests/images/fever.svg";
import Arrow from "../../assests/images/Arrow.svg";
import "./News.css";

const News = () => {
  return (
    <div className="newscontainer">
      <div className="alignment">
        <img src={Fever} />
      </div>
      <div className="alignment">
        <h5 className="newsh5">News & Updates</h5>
        <h3 className="newsh3">
          5 Symptoms of Corona Virus that you should know.
        </h3>
        <a
          href="https://familydoctor.org/condition/coronavirus/"
          className="readmore"
          target ="blank"
        >
          Read More <img src={Arrow} />
        </a>
      </div>
    </div>
  );
};

export default News;
