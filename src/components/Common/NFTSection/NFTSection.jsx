import React, { useMemo } from "react";
import useCardsLoadMore from "../../../hooks/useCardsLoadMore";
import NFTCard from "../NFTCard/NFTCard";
import { StyledNFTSection } from "./styles";
import { NFTS_DATA } from "../../../assets/MockData/mockData";

import { useState } from "react";
import Button from "../Buttons/Button";

const useNFTsLoadMore = (initialItems, itemsPerPage = 14) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [allItems, setAllItems] = useState(initialItems);

  const loadMoreItems = () => {
    setVisibleItems((prevCount) => prevCount + itemsPerPage);
  };

  const getVisibleItems = () => {
    return allItems.slice(0, visibleItems);
  };

  return { loadMoreItems, getVisibleItems, allItems };
};

const multiplyArray = (array, multiplier) => {
  const multipliedArray = [];
  for (let i = 0; i < multiplier; i++) {
    multipliedArray.push(...array);
  }
  return multipliedArray;
};

const NFTSection = ({ isLootbox }) => {
  // Multiply the NFTS_DATA array by 5
  const multipliedNFTS_DATA = useMemo(() => multiplyArray(NFTS_DATA, 5), []);

  const { loadMoreItems, getVisibleItems, allItems } =
    useNFTsLoadMore(multipliedNFTS_DATA);

  const handleLoadMore = () => {
    loadMoreItems();
  };

  return (
    <StyledNFTSection>
      <div className="nft-cards">
        {getVisibleItems().map((card, index) => (
          <NFTCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            subTitle={card.subTitle}
            amount={card.amount}
            buttonText={card.buttonText}
            prices={card.prices}
            currentPrice={card.currentPrice}
            hasPercentageText={card.hasPercentageText}
            isLootbox={isLootbox}
          />
        ))}
      </div>
      {allItems.length > getVisibleItems().length && (
        <div className="btn-wrapper">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </StyledNFTSection>
  );
};

export default NFTSection;
