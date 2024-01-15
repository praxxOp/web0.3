import React from "react";
import "./catalogue.css";
import { delaGothicOne, michroma, sora } from "../Fonts";
import Web3 from "../reusablecomponents/Web3"
const page = () => {
  return (
    <div>
      <div className="main__catalogue">
        <div className="catalogue__top">
          <h1 className={` ${delaGothicOne.className} top__heading`}>
            Welcome to WEB3 - Unleashing the <br />
            Digital Revolution! 🌐
          </h1>
          <p className={`${sora.className} top__para`}>
            Dive into the future of ownership and expression with our exclusive
            NFT catalog. Here, art meets technology, <br />
            and each piece is not just a creation; it's a token of individuality
            and innovation.
          </p>
          <h3 className={`${michroma.className} top__collection`}>Collections:</h3>
        </div>
        <div className="catalogue__bottom">
          <div className="bottom__box">

          </div>
          <div className="bottom__reusablecomponents">
            <Web3/>
            <Web3/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
