import React from "react";
import NFT_IMG_1 from "../../../assets/images/IMAGE (39).png";
import NFT_IMG_2 from "../../../assets/images/IMAGE (40).png";
import NFT_IMG_3 from "../../../assets/images/IMAGE (41).png";
import NFT_IMG_4 from "../../../assets/images/IMAGE (42).png";
import SectionHeader from "../SectionHeader/SectionHeader";
import NFTCard from "./NFTCard";

import BONUS from "../../../assets/images/Frame (27).svg";
const NTFSection = () => {
  const nftsData = [
    {
      imageSrc: NFT_IMG_1,
      title: "Golden Grizzly",
      subTitle: "AKbots",
      amount: "$5.88K",
      buttonText: "OPEN FOR $20",
    },
    {
      imageSrc: NFT_IMG_2,
      title: "Golden Grizzly",
      subTitle: "AKbots",
      amount: "$5.88K",
      buttonText: "OPEN FOR $20",
    },
    {
      imageSrc: NFT_IMG_2,
      title: "Golden Grizzly",
      subTitle: "Sports AKbots",
      amount: "$9.88K",
      buttonText: "OPEN FOR $35.6",
    },
    {
      imageSrc: NFT_IMG_3,
      title: "Bored Ape Yacht Club #4848",
      subTitle: "Bored Ape Yacht Club",
      amount: "$490",
      buttonText: "OPEN FOR $20",
    },
    {
      imageSrc: NFT_IMG_4,
      title: "POLITICS IS BULLSHIT #34",
      subTitle: "AKbots",
      amount: "$700K",
      buttonText: "OPEN FOR $99",
    },
  ];

  return (
    <>
      <SectionHeader
        iconHeader={BONUS}
        casinoText="NFT Lootboxes"
        sideButton="View All"
      />
      <div style={{ display: "flex", gap: "10px", marginLeft: "-8px" }}>
        {nftsData.map((box, index) => (
          <NFTCard
            key={index}
            imageSrc={box.imageSrc}
            title={box.title}
            subTitle={box.subTitle}
            amount={box.amount}
            buttonText={box.buttonText}
          />
        ))}
      </div>
    </>
  );
};

export default NTFSection;
