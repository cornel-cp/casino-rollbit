import React from "react";
import CryptoCard from "./CryptoCard";

import CRYPTO from "../../../assets/images/Frame (12).svg";

import CRYPTO_IMG_1 from "../../../assets/images/IMAGE (21).png";
import CRYPTO_IMG_2 from "../../../assets/images/IMAGE (22).png";
import CRYPTO_IMG_3 from "../../../assets/images/IMAGE (23).png";
import CRYPTO_IMG_4 from "../../../assets/images/IMAGE (24).png";
import CRYPTO_IMG_5 from "../../../assets/images/IMAGE (25).png";
import CRYPTO_IMG_6 from "../../../assets/images/IMAGE (26).png";
import CRYPTO_IMG_7 from "../../../assets/images/IMAGE (27).png";
import SectionHeader from "../SectionHeader/SectionHeader";

//model images

const CryptoSection = () => {
  return (
    <>
      <SectionHeader
        iconHeader={CRYPTO}
        casinoText="CRYPTO FEATURES"
        sideButton="Trade"
        hasRecommended={true}
      />
      <div style={{ display: "flex", gap: "18px", marginLeft: "-8px" }}>
        <CryptoCard
          imageSrc={CRYPTO_IMG_1}
          symbol="BTC"
          value="23,035.14"
          percentage="-3.33%"
        />

        <CryptoCard
          imageSrc={CRYPTO_IMG_2}
          symbol="ETH"
          value="1,591.583"
          percentage="-3.23%"
        />

        <CryptoCard
          imageSrc={CRYPTO_IMG_3}
          symbol="DOGE"
          value="0.080552"
          percentage="-4.29%"
        />

        <CryptoCard
          imageSrc={CRYPTO_IMG_4}
          symbol="LTC"
          value="91.9767"
          percentage="-2.39%"
        />

        <CryptoCard
          imageSrc={CRYPTO_IMG_5}
          symbol="BNB"
          value="300.485"
          percentage="-2.44%"
        />

        <CryptoCard
          imageSrc={CRYPTO_IMG_6}
          symbol="XRP"
          value="0.374977"
          percentage="-3.11%"
        />

        <CryptoCard
          imageSrc={CRYPTO_IMG_7}
          symbol="LINK"
          value="7.53857"
          percentage="-3.09%"
        />
      </div>
    </>
  );
};

export default CryptoSection;
