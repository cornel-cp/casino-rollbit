import React from "react";

import NavigationHeader from "../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTSection from "../../Common/NFTSection/NFTSection";
import NFTNavigationHeader from "./NFTNavigationHeader";
import {
  BUTTONS_NFT_LOOTBOXES,
  BUTTONS_NFT_MARKETPLACE,
} from "../../../assets/MockData/mockData";
import PageTitle from "../../Common/PageTitle/PageTitle";
import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";

const NFTLootboxes = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="Nft Lootboxes" />

      <NFTNavigationHeader buttons={BUTTONS_NFT_LOOTBOXES} />
      <div className="content-container">
        <SearchAndFilters />

        <NFTSection isLootbox={true} />
      </div>
    </StyledPageContainer>
  );
};

export default NFTLootboxes;
