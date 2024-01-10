import React from "react";
import "./Navbar.css";
import { michroma, nico } from "../../Fonts";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="Navbar__content">
        <h4 className={` ${michroma.className} Navbar__h1 `}>GET ACCESS</h4>
        <h1 className={`${nico.className} Navbar__logo`}>WEB3</h1>
        <h4 className={` ${michroma.className} Navbar__h1 `}>BUY & SELL</h4>
      </div>
    </div>
  );
};

export default NavBar;
