import React from "react";

import {
  COLLECTION_OPTIONS,
  SORT_BY_OPTIONS,
} from "../../../assets/MockData/dropdownsData";
import { BUTTONS_NFT_LOOTBOXES } from "../../../assets/MockData/mockData";
import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";
import NFTSection from "../../Common/NFTSection/NFTSection";
import PageTitle from "../../Common/PageTitle/PageTitle";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

const NFTLootboxes = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="Nft Lootboxes" />

      <NFTNavigationHeader buttons={BUTTONS_NFT_LOOTBOXES} />
      <div className="content-container">
        <SearchAndFilters
          sortByOptions={SORT_BY_OPTIONS}
          collectionOptions={COLLECTION_OPTIONS}
        />

        <NFTSection isLootbox={true} />
      </div>
    </StyledPageContainer>
  );
};

export default NFTLootboxes;
