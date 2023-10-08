import React from "react";

//components
import Banner from "../../Common/Banner/Banner";
import BonusCardSection from "../../Common/BonusCard/BonusCardSection";
import BoxesSection from "../../Common/BoxCard/BoxesSection";
import CasinoSection from "../../Common/CasinoSection/CasinoSection";
import CryptoSection from "../../Common/CryptoCard/CryptoSection";
import NTFSection from "../../Common/NFTCard/NFTSection";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import StepsSection from "./StepsSection";
import TableView from "./TableView";

const MainHome = ({ update }) => {
  return (
    <>
      <Banner />

      {/* Homepage main image area */}

      <StepsSection />

      {/* image area frame main */}

      <LiveWinsSection />

      {/* casino view */}

      <CasinoSection />

      {/* Crypto view */}

      <CryptoSection />

      {/* Bonus */}

      <BonusCardSection />

      {/* Daily Bonuses */}

      <BoxesSection />

      {/* NFT LOOT BOXES */}

      <NTFSection />

      {/* table view */}
      <TableView />
    </>
  );
};

export default MainHome;
