import React from "react";
import { nico } from "../Fonts";
import "./Web3.css";
const Web3 = () => {
  const headings = [];
  for (let index = 0; index < 4; index++) {
    headings.push(<h3 key={index}>WEB3</h3>);
  }

  return (
    <div>
      <div className="main__web3">
        <div className={` ${nico.className}  web__content `}>{headings}</div>
      </div>
    </div>
  );
};

export default Web3;
