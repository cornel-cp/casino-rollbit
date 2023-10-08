import React from "react";
import NFT from "../../../assets/images/IMAGE.svg";
import { StyledNFTCard } from "./styles";

const NFTCard = ({ imageSrc, title, subTitle, amount, buttonText }) => {
  return (
    <div style={{ padding: "20px 0" }}>
      <StyledNFTCard>
        <div className="text-section">
          <p className="title">{title}</p>
          <span className="sub-title">
            {subTitle} <p className="amount">{amount}</p>
          </span>
        </div>

        <div className="image-section">
          <img src={imageSrc} alt="cart" />
        </div>

        <div className="info-section">
          <p className="info-text">
            <img src={NFT} alt="cart" />{" "}
            <span className="info-name">AKbot</span>
            <span className="item-count">7Items</span>
          </p>
        </div>

        <div className="button-section">
          <button>{buttonText}</button>
        </div>
      </StyledNFTCard>
    </div>
  );
};

export default NFTCard;
