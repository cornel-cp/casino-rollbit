import React, { useState } from "react";

import { DAILY_BONUSES } from "../../../assets/MockData/mockData";
import BONUSES from "../../../assets/images/Frame (29).svg";
import SectionHeader from "../SectionHeader/SectionHeader";
import BoxCard from "./BoxCard";

const BoxesSection = () => {
  const filterOptions = ["Day", "Week", "Month", "All"];

  const [activeOption, setActiveOption] = useState(filterOptions[0]);

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const selectedCards = DAILY_BONUSES[activeOption] || [];

  return (
    <>
      <SectionHeader
        iconHeader={BONUSES}
        casinoText="Daily Bonuses"
        sideButton="My Rewards"
        hasFilterOptions={true}
        onOptionChange={handleOptionChange}
        filterOptions={filterOptions}
      />
      <div style={{ display: "flex", gap: "10px", marginLeft: "-4px" }}>
        {selectedCards.map((boxData, index) => (
          <BoxCard key={index} {...boxData} />
        ))}
      </div>
    </>
  );
};

export default BoxesSection;
