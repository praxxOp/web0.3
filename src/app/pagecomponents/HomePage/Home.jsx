import Web3 from "@/app/reusablecomponents/Web3";
import React from "react";

import { michroma, syncopate } from "../../Fonts";
import "./Home.css";


const Home = () => {
  return (
    <div className="Home__main">
      <div className="Home__left">
        <h3 className={`${syncopate.className} Home__headline`}>
          <span>
            "Web3: Unlock NFTs, <br /> Secure <br />
          </span>
          Transactions”
        </h3>
        <Web3 />
      </div>
      <div className="Home__mid">
        <video autoPlay loop muted>
          <source src="/1Kte.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="Home__right"></div>
    </div>
  );
};

export default Home;
