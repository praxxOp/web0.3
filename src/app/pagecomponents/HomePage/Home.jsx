"use client";

import Web3 from "@/app/reusablecomponents/Web3";
import React from "react";
import { motion } from "framer-motion";
import { michroma, syncopate, delaGothicOne, sora } from "../../Fonts";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home__main">
      <motion.div
        initial={{
          x: "100px",
          opacity: 0.2,
        }}
        animate={{
          x: "0px",
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        className="Home__left"
      >
        <h3 className={`${syncopate.className} Home__headline`}>
          <span>
            "Web3: Unlock NFTs, <br /> Secure <br />
          </span>
          Transactions”
        </h3>
        <Web3 />
      </motion.div>
      <div className="Home__mid">
        <video autoPlay loop muted>
          <source src="/1Kte.mp4" type="video/mp4" />
        </video>
        <div className="main__headline">
          <motion.div
            animate={{
              y: "-150px",
            }}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="moment__h1"
          >
            <h1 className={delaGothicOne.className}>Resolvent</h1>
            <h1 className={delaGothicOne.className}>Resolvent</h1>
          </motion.div>
        </div>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className={sora.className}
        >
          "Resolvent: Where scarcity meets solution, empowering collectors with
          access to unique digital treasures."
        </motion.p>
      </div>
      <motion.div
        initial={{
          x: "-100px",
          opacity: 0.2,
        }}
        animate={{
          x: "0px",
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          type: "spring",
        }}
        className="Home__right"
      >
        <p className={sora.className}>
          "Explore Web3's world where you can seamlessly connect, buy, and sell
          NFTs, while enjoying secure, blockchain-backed transactions through
          your crypto wallet.
          <span>
            Our user-friendly platform ensures data immutability with minimal
            gas prices, making it the ideal gateway to the future of digital
            assets."
          </span>
        </p>
        <h4 className={` ${michroma.className}  `}>Get Started</h4>
      </motion.div>
    </div>
  );
};

export default Home;
