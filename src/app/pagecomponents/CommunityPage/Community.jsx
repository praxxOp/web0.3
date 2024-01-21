"use client";
import React from "react";
import "./Community.css";
import { michroma, sora, tourney } from "@/app/Fonts";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <div className="main__commmunity">
      <div className="community__left">
        <motion.h1
          initial={{
            y: "20px",
            opacity: 0,
          }}
          whileInView={{
            y: "0",
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={tourney.className}
        >
          Sell NFTs <br />
          <span>
            Easily and <br />
            Securely
          </span>
          <br /> Online.
        </motion.h1>
      </div>

      <div className="community__right">
        <motion.p
          initial={{
            y: "20px",
            opacity: 0,
          }}
          whileInView={{
            y: "0",
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={`${sora.className} first_p`}
        >
          "Discover the simplest way to sell your NFTs online. Our platform
          offers secure and hassle-free transactions, ensuring your digital
          assets find the right buyers. Join us and unlock the potential of your
          NFT collection. Start selling with confidence today."
        </motion.p>
        <motion.p
          initial={{
            y: "20px",
            opacity: 0,
          }}
          whileInView={{
            y: "0",
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={`${sora.className} second_p `}
        >
          "Turn your NFTs into assets and join our thriving community of digital
          creators."
        </motion.p>
        <motion.h1
          initial={{
            y: "20px",
            opacity: 0,
          }}
          whileInView={{
            y: "0",
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={` ${michroma.className} `}
        >
          Join Community
        </motion.h1>
      </div>
    </div>
  );
};

export default Community;
