import React from "react";
import "./Community.css";
import { michroma, sora, tourney } from "@/app/Fonts";

const Community = () => {
  return (
    <div className="main__commmunity">
      <div className="community__left">
        <h1 className={tourney.className}>
          Sell NFTs <br /> <span> Easily and <br />
          Securely </span> <br /> Online.
        </h1>
      </div>

      <div className="community__right">
        <p className={`${sora.className} first_p`}>
          "Discover the simplest way to sell your NFTs online. Our platform
          offers secure and hassle-free transactions, ensuring your digital
          assets find the right buyers. Join us and unlock the potential of your
          NFT collection. Start selling with confidence today."
        </p>
        <p className={`${sora.className} second_p `}>
          "Turn your NFTs into assets and join our thriving community of digital
          creators."
        </p>
        <h1 className={` ${michroma.className} `}> Join Community</h1>
      </div>
    </div>
  );
};

export default Community;
