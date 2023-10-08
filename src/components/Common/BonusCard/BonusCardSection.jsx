import React from "react";
import BONUS from "../../../assets/images/Frame (27).svg";
import BOUNUS1 from "../../../assets/images/IMAGE (29).png";
import BOUNUS2 from "../../../assets/images/IMAGE (30).png";
import BOUNUS3 from "../../../assets/images/IMAGE (31).png";
import SectionHeader from "../SectionHeader/SectionHeader";
import BonusCard from "./BonusCard";

const BonusCardSection = () => {
  return (
    <>
      <SectionHeader
        iconHeader={BONUS}
        casinoText="BONUS BATTLES"
        sideButton="View All"
      />
      <div style={{ display: "flex", gap: "32px", marginLeft: "-8px" }}>
        <BonusCard
          imageSrc={BOUNUS2}
          bonusText="Bonus Buy"
          bonusAmount="$10"
          playerText="Players"
          playerCount="2/5"
          buttonText="Unavailable"
          buttonStatus="pending"
        />
        <BonusCard
          imageSrc={BOUNUS1}
          bonusText="Bonus Buy"
          bonusAmount="$10"
          playerText="Players"
          playerCount="2/5"
          buttonText="Unavailable"
          buttonStatus="pending"
        />
        <BonusCard
          imageSrc={BOUNUS1}
          bonusText="Bonus Buy"
          bonusAmount="$10"
          playerText="Players"
          playerCount="2/5"
          buttonText="Unavailable"
          buttonStatus="pending"
        />
        <BonusCard
          imageSrc={BOUNUS3}
          bonusText="Bonus Buy"
          bonusAmount="$10"
          playerText="Players"
          playerCount="2/5"
          buttonText="Unavailable"
          buttonStatus="live"
        />
        <BonusCard
          imageSrc={BOUNUS3}
          bonusText="Bonus Buy"
          bonusAmount="$10"
          playerText="Players"
          playerCount="2/5"
          buttonText="Unavailable"
          buttonStatus="live"
        />
      </div>
    </>
  );
};

export default BonusCardSection;
