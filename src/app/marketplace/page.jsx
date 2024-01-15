import React from "react";
import "./Marketplace.css";
import { delaGothicOne, michroma, sora } from "../Fonts";

const MarketPlace = () => {
  return (
    <div className="main__market">
      <div className="market__video">
        <video autoPlay muted loop>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="content__marketplace">
        <h1 className={michroma.className}>UNDER</h1>
        <h1 className={delaGothicOne.className}>CONSTRUCTION</h1>
        <p className={sora.className}>
          Get ready for a game-changing NFT marketplace! We're currently under
          construction, crafting an innovative space where creativity meets
          ownership. Stay tuned for a groundbreaking experience in digital art
          and collectibles. To stay updated, register yourself for exclusive
          news and early access. The future of NFTs is coming soon!
        </p>
        <h3 className={michroma.className}>Register</h3>
      </div>
    </div>
  );
};

export default MarketPlace;
