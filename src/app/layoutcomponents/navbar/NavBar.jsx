"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { michroma, nico } from "../../Fonts";

const NavBar = () => {
  const [Toggle, setToggle] = useState(false);
  const FirstToggle = () => {
    setToggle(!Toggle);
  };
  const [BuyToggle, setBuyToggle] = useState(false);

  const SecondToggle = () => {
    setBuyToggle(!BuyToggle);
  };

  return (
    <div className="navbar">
      <div className="Navbar__content">
        <h4
          onClick={FirstToggle}
          className={` ${michroma.className} Navbar__h1 `}
        >
          GET ACCESS
          {Toggle ? (
            <div className="access__options">
              <h4>Sign-IN</h4>
              <h4>Register</h4>
            </div>
          ) : null}
        </h4>
        <h1 className={`${nico.className} Navbar__logo`}>WEB3</h1>
        <h4
          onClick={SecondToggle}
          className={` ${michroma.className} Navbar__h1 `}
        >
          BUY & SELL
          {BuyToggle ? (
            <div className="buy__options">
              <h4>Marketplace </h4>
              <h4>Catalogue</h4>
              <h4>Community</h4>
            </div>
          ) : null}
        </h4>
      </div>
    </div>
  );
};

export default NavBar;
