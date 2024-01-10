import React from "react";
import "./Nft.css";
import Web3 from "@/app/reusablecomponents/Web3";
import { delaGothicOne, sora } from "@/app/Fonts";

const Nft = () => {
  return (
    <>
      <div className="main__nft">
        <div className="nft__arts">
          <video autoPlay loop muted>
            <source src="/art.mp4" type="video/mp4" />
          </video>
          <div className="art__right">
            <h1 className={delaGothicOne.className}>ART'S</h1>
            <p className={sora.className}>
              "Explore the limitless world of digital art with our NFT platform.
              Own unique, verified pieces from talented artists, each with its
              own blockchain-backed certificate of authenticity. Join the
              revolution in art ownership and creation today."
            </p>
          </div>
        </div>

        <div className="nft__characters">
          <div className="reusable__element1">
            <Web3 />
          </div>
          <div className="character__left">
            <h1 className={delaGothicOne.className}>character's</h1>
            <p className={sora.className}>
              "Explore a world of collectible digital art with Anime Characters
              NFTs - where your favorite characters come to life on the
              blockchain. Own a piece of the anime universe with unique and
              tradable Anime Characters NFTs."
            </p>
          </div>
          <video src="./bakki.mp4" autoPlay loop muted />
        </div>
        <div className="main__photo">
          <div className="nft__photos">
            <video src="./nature.mp4" autoPlay loop muted />
            <div className="photo__right">
              <h1 className={delaGothicOne.className}>photo's</h1>
              <p className={sora.className}>
                "Discover the art of photographers through NFTs - Own, trade,
                and treasure unique visual masterpieces. Experience the world
                through the lens of talented photographers with our exclusive
                NFT collection."
              </p>
            </div>
          </div>
          <div className="reusable__element2">
          <Web3  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nft;
