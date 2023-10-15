import React from "react";
import { StyleNFTDetails } from "./styles";
import DetailsContainer from "./DetailsContainer";
import Collection from "./Collection";
import Traits from "./Traits";
import Stats from "./Stats";
import { ReactComponent as ARROW_LEFT } from "../../../assets/images/Arrow-left-1.svg";

const NFTDetails = () => {
  return (
    <StyleNFTDetails>
      <button className="back-button">
        <ARROW_LEFT />
        <span>Back</span>
      </button>
      <DetailsContainer />
      <div className="section-title">Sports Rollbot Stats</div>
      <Stats />
      <div className="section-title">Traits</div>
      <Traits />
      <div className="section-title">Collection</div>
      <Collection />
    </StyleNFTDetails>
  );
};

export default NFTDetails;
