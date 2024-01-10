import React from "react";
import "./Portfolio.css";
import { michroma, sora } from "@/app/Fonts";
const Portfolio = () => {
  return (
    <div>
      <div className="main__portfolio">
        <p className={sora.className}>
          "Welcome to our digital marketplace! Shop with confidence and immerse
          yourself in the world of NFTs we've curated. If you're interested in
          exploring our broader creative portfolio and web expertise, venture
          over to our portfolio to discover more of our innovative creations."
        </p>
        <h1 className={michroma.className}> My Portfolio</h1>
      </div>
    </div>
  );
};

export default Portfolio;
