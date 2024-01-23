"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import { michroma, nico } from "../../Fonts";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [Toggle, setToggle] = useState(false);
  const FirstToggle = () => {
    setToggle(!Toggle);
  };
  const [BuyToggle, setBuyToggle] = useState(false);

  const SecondToggle = () => {
    setBuyToggle(!BuyToggle);
  };

  const menu = {
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
      },
    },

    hidden: {
      y: "-10px",
      opacity: 0,
    },
  };

  return (
    <div className="navbar">
      <div className="Navbar__content">
        <h4
          onClick={FirstToggle}
          className={` ${michroma.className} Navbar__h1 `}
        >
          GET ACCESS
          <AnimatePresence>
            {Toggle ? (
              <motion.div
                variants={menu}
                initial="hidden"
                animate="visible"
                exit={{
                  y: "10px",
                  opacity: 0,
                }}
                className="access__options"
              >
                <Link className="link__style" href="/">
                <h4>
                  Sign-IN With <br />
                  Google
                </h4>
                </Link>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </h4>
        <Link className="link__style" href="/"> <h1 className={`${nico.className} Navbar__logo `}>WEB3</h1></Link>
        <h4
          onClick={SecondToggle}
          className={` ${michroma.className} Navbar__h1 `}
        >
          BUY & SELL
          <AnimatePresence>
            {BuyToggle ? (
              <motion.div
                variants={menu}
                initial="hidden"
                animate="visible"
                exit={{
                  y: "10px",
                  opacity: 0,
                }}
                className="buy__options"
              >
                <Link className="link__style" href="/catalogue"><h4>Catalogue</h4></Link>
                <Link className="link__style" href="/marketplace"><h4>Marketplace </h4> </Link>
                
              </motion.div>
            ) : null}
          </AnimatePresence>
        </h4>
      </div>
    </div>
  );
};

export default NavBar;
