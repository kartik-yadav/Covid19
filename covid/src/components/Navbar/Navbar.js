import React from "react";
import logo from "../../assests/images/virus.svg";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
      <nav className="container">
        <div className="heading">
          <img src={logo} alt="Logo" />
          <h1>COVID'19</h1>
        </div>
        <ul className="list">
          <li className="listitems highlight">
            <Link to='/' className="anchors">HOME</Link>
          </li>
          <li className="listitems">
            <Link to='/faq' className="anchors">FAQ</Link>
          </li>
          <li className="listitems">
            <Link to='/help' className="anchors">HELPFUL LINKS</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;

