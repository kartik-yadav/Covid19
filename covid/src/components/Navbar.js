import React from 'react';
import logo from '../images/virus.svg';
import './Navbar.css';

const Navbar = () => {
  return (
      <nav className="container">
        <div className="heading">
            <img
            src={logo}
            alt="Logo"
            />
            <h1>
                COVID'19
            </h1>
        </div>
        <ul className="list">
          <li className="listitems highlight"><a href='/' className="anchors">HOME</a></li>
          <li className="listitems"><a href='/faq' className="anchors">FAQ</a></li>
          <li className="listitems"><a href='/help' className="anchors">HELPFUL LINKS</a></li>
        </ul>
      </nav>
  )
}

export default Navbar;