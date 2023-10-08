import React, { useState } from "react";
import DOT from "../../../assets/images/Rectangle.png";

import { WINNER_CARDS } from "../../../assets/MockData/mockData";
import FilterButtonGroup from "../Buttons/FilterButtonGroup";
import WinnerCard from "./WinnerCard";
import { LiveWinsSectionStyled, StyledCardsContainer } from "./styles";

const LiveWinsSection = () => {
  const timeFilterOptions = ["Live", "Month", "Week", "Day"];

  const [activeOption, setActiveOption] = useState(timeFilterOptions[0]);

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const selectedCards = WINNER_CARDS[activeOption] || [];

  return (
    <>
      <LiveWinsSectionStyled>
        <div className="dot-section">
          <img src={DOT} alt="dot" className="dot-icon" />
          <span className="live-wins-text">LIVE WINS</span>
        </div>

        <FilterButtonGroup
          options={timeFilterOptions}
          onOptionChange={handleOptionChange} // Pass the callback for option change
        />
      </LiveWinsSectionStyled>

      <StyledCardsContainer>
        {selectedCards.map((card, index) => (
          <WinnerCard
            key={index}
            imgSrc={card.imgSrc}
            cartIconSrc={card.cartIconSrc}
            username={card.username}
            price={card.price}
          />
        ))}
      </StyledCardsContainer>
    </>
  );
};

export default LiveWinsSection;
