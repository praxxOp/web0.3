import React from "react";
import Home from "./pagecomponents/HomePage/Home";
import Nft from "./pagecomponents/NftPage/Nft";
import Portfolio from "./pagecomponents/Portfolio/Portfolio";
import Community from "./pagecomponents/CommunityPage/Community";

const page = () => {
  return (
    <div>
      <Home />
      <Nft />
      <Portfolio />
      <Community />
    </div>
  );
};

export default page;
