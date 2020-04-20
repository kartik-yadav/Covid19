import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="containers">
      <h2 className="headings">Helpful Links</h2>
      <ul className="lists">
        <li className="listelements">
          <a
            href="https://www.ssih.org/COVID-19-Updates/-Helpful-Links-and-Information"
            target="blank"
            className="anchor"
          >
            Link Number 1
          </a>
        </li>
        <li className="listelements">
          <a
            href="https://www.knox.edu/coronavirus-covid-19-information/helpful-links"
            target="blank"
            className="anchor"
          >
            Link Number 2
          </a>
        </li>
        <li className="listelements">
          <a
            href="https://www.bhusd.org/apps/pages/index.jsp?uREC_ID=1689436&type=d&pREC_ID=1846864"
            target="blank"
            className="anchor"
          >
            Link Number 3
          </a>
        </li>
        <li className="listelements">
          <a
            href="https://www.localsolutions.org.uk/news/428-covid-19-helpful-links"
            target="blank"
            className="anchor"
          >
            Link Number 4
          </a>
        </li>
        <li className="listelements">
          <a
            href="https://www.localsolutions.org.uk/news/428-covid-19-helpful-links"
            target="blank"
            className="anchor"
          >
            Link Number 5
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Help;
