import React from "react";
import "./catalogue.css";
import { delaGothicOne, michroma, sora } from "../Fonts";
import Web3 from "../reusablecomponents/Web3";

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
          <h3 className={`${michroma.className} top__collection`}>
            Collections:
          </h3>
        </div>
        <div className="catalogue__bottom">
          <div className={` ${michroma.className} bottom__box`}>
            <h4>EXCLUSIVE</h4>
            <hr className="border__line" />
            <h4>art's</h4>
            <hr className="border__line" />
            <h4>CHARACTER'S</h4>
            <hr className="border__line" />
            <h4>PREMIUM</h4>
            <hr className="border__line" />
            <h4>PHOTO'S</h4>
          </div>

          <div className="bottom__reusablecomponents">
            <div className="bottom__reusablecomponents1">
              <Web3 />
            </div>
            <div className="bottom__reusablecomponents2">
              <Web3 />
            </div>
          </div>
        </div>
        <h5 className={`${sora.className} side__headline`}>
          Global Community, Local Impact
        </h5>
      </div>
    </div>
  );
};

export default page;
