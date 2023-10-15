import React from "react";
import { ReactComponent as LINK_IMG } from "../../../assets/images/link.svg";

const DetailsContainer = () => {
  return (
    <div className="container-nft">
      <div className="nft-img">
        <div style={{ cursor: "pointer" }}>
          <img
            src="https://sportsbot.rollbot.com/pics/694ea6487fada6b225d344b4abe82d28.webp"
            alt="nft"
          />
        </div>
      </div>
      <div className="container-info">
        <div className="subtitle">
          <a href="/nft/eth:0x1de7abda2d73a01aa8dca505bdcb773841211daf">
            Sports Rollbots
          </a>
          <span style={{ margin: "0px 3px" }}>·</span>
          <span>$743</span>
        </div>
        <div className="title">#7356 Darts</div>
        <div className="links">
          <a
            href="https://rollbit.com/nft/eth:0x1de7abda2d73a01aa8dca505bdcb773841211daf/7356"
            target="blank"
            className="link"
          >
            <LINK_IMG />
            More Info
          </a>
          <a
            href="https://opensea.io/assets/ethereum/0x1de7abda2d73a01aa8dca505bdcb773841211daf/7356"
            target="blank"
            className="link"
          >
            <LINK_IMG />
            OpenSea
          </a>
        </div>
        <a
          href="https://opensea.io/0x772d8d6e4a4a5251d7a174e3f60e3f954b386af0"
          target="blank"
          className="author"
          style={{ marginBottom: "20px" }}
        >
          Created By
          <span style={{ color: "rgb(255, 255, 255)", marginLeft: "4px" }}>
            Rollbots
          </span>
        </a>
        <div className="description">
          <div className="description-text">
            <span>
              **OWNER COUNT and TRADED VOLUME:** The owner count and volume
              traded displayed on OpenSea is not entirely accurate. Majority of
              trading and utility staking happens on{" "}
              <a target="blank" href="https://rollbot.com">
                Rollbot.com
              </a>
              . Total holder count is more than 4,000. A collection of 10,000
              unique robots generated algorithmically using over 600 traits with
              proof of ownership on the Ethereum blockchain and a focus on
              utility. Inspired by Rollbit's first NFT project and other popular
              utility NFT projects, Sports Rollbots are based on the ERC-721
              standard that underlies most digital collectible and utility
              projects. Each Rollbot is a sports-themed piece of digital art
              that doubles up as a personalised VIP membership for Rollbit's new
              sportsbook. Own a part of Rollbit's sportsbook and enjoy the
              perks!
            </span>
          </div>
          <div className="description-button">
            More
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              size="8"
              direction="down"
              top="-0.5"
              className="css-smdox2"
              style={{ marginLeft: "4px" }}
            >
              <path
                d="M0.934258 -6.17707e-07L7.06574 -8.16755e-08C7.46509 -4.67634e-08 7.70329 0.445072 7.48177 0.77735L4.41602 5.37596C4.21811 5.67283 3.78189 5.67283 3.58397 5.37596L0.518233 0.777349C0.296715 0.445072 0.534911 -6.52619e-07 0.934258 -6.17707e-07Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div style={{ maxWidth: "340px" }}>
          <div style={{ marginTop: "14px", marginBottom: "4px" }}>
            <div className="prices">
              <div>$749</div>
              <div style={{ color: "rgb(255, 255, 255)" }}>$1.22K</div>
              <div>$1.99K</div>
            </div>
            <div className="price-gradient"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
