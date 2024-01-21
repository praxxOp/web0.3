"use client";
import React from "react";
import "./Footer.css";
import { delaGothicOne, michroma, sora } from "@/app/Fonts";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{
        y: "20px",
        opacity: 0,
      }}
      whileInView={{
        y: "0",
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="main__footer"
    >
      <p className={sora.className}>
        For collaboration inquiries or work opportunities, feel free to contact
        me through,{" "}
      </p>
      <div className="footer__links">
        <div className="link__gmail">
          <h1 className={delaGothicOne.className}>GMAIL</h1>
          <h4 className={sora.className}> shelke.prathamesh0012@gmail.com</h4>
        </div>
        <div className="link__socials">
          <h1 className={delaGothicOne.className}>SOCIALS</h1>
          <div className={` ${michroma.className} social__links`}>
            <a href="https://www.instagram.com/praxx.dev?utm_source=qr&igsh=MW55Z21qZDRibWRyaQ==">
              INSTAGRAM
            </a>
            <a href="https://www.linkedin.com/in/prathamesh-shelke/">
              LINKEDIN
            </a>
            <a href="https://peerlist.io/praxx">PEERLIST</a>
          </div>
        </div>
        <div className="link__explore">
          <h1 className={delaGothicOne.className}>EXPLORE</h1>
          <div className={` ${michroma.className} explore__links`}>
            <a href="https://github.com/praxxOp">GITHUB</a>
            <a href="https://www.figma.com/@praxx">FIGMA</a>
          </div>
        </div>
      </div>
      <p className={sora.className}>
        © WEB3 INDIA LTD, 2023. ALL RIGHTS RESERVED
      </p>
    </motion.div>
  );
};

export default Footer;
