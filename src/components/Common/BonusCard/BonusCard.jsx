import React from "react";
import DOT from "../../../assets/images/Rectangle.png";
import { StyledCard } from "./styles";

const BonusCard = ({
  imageSrc,
  bonusText,
  bonusAmount,
  playerText,
  playerCount,
  buttonText,
  buttonStatus,
}) => {
  return (
    <div
      style={{
        padding: "20px 0",
      }}
    >
      <StyledCard>
        <img src={imageSrc} alt="cart" className="card-image" />
        <p className="bonus-text">
          {bonusText} <span className="bonus-amount">{bonusAmount}</span>
        </p>
        <p className="bonus-text">
          {playerText}
          <span className="bonus-amount">{playerCount}</span>
        </p>
        <div style={{ display: "flex" }}>
          {buttonStatus === "live" && (
            <button
              className="button live-button"
              disabled={buttonStatus === "unavailable"}
            >
              {buttonText} <span className="button-text-small">Started</span>{" "}
              <span className="button-text-red">Live</span>{" "}
              <img src={DOT} alt="dot" className="button-dot" />
            </button>
          )}

          {buttonStatus === "pending" && (
            <button className="button pending-button">
              join battle <span className="button-text-small">Open: 04:46</span>
            </button>
          )}
        </div>
      </StyledCard>
    </div>
  );
};

export default BonusCard;
