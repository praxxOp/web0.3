"use client"
import React from "react";
import "./Portfolio.css";
import { michroma, sora } from "@/app/Fonts";
import {motion} from "framer-motion"
const Portfolio = () => {
  return (
    <div>
      <div className="main__portfolio">
        <motion.p
        initial ={{
          y:"20px",
          opacity:0
        }}
         whileInView={{
          y: '0',
          opacity:1
        }} 
        transition={{duration: 1}}
        className={sora.className}>
          "Welcome to our digital marketplace! Shop with confidence and immerse
          yourself in the world of NFTs we've curated. If you're interested in
          exploring our broader creative portfolio and web expertise, venture
          over to our portfolio to discover more of our innovative creations."
        </motion.p>
        <motion.h1
        initial ={{
          y:"20px",
          opacity:0
        }}
         whileInView={{
          y: '0',
          opacity:1
        }} 
        transition={{duration: 1}} className={michroma.className}> My Portfolio</motion.h1>
      </div>
    </div>
  );
};

export default Portfolio;
