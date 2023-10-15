import React from "react";

import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTSection from "../../Common/NFTSection/NFTSection";
import NFTNavigationHeader from "./NFTNavigationHeader";

import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";
import PageTitle from "../../Common/PageTitle/PageTitle";
import { BUTTONS_NFT_MARKETPLACE } from "../../../assets/MockData/mockData";

const Marketplace = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="Nft Marketplace" />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MARKETPLACE} />
      <div className="content-container">
        <SearchAndFilters />
        <NFTSection isLootbox={false} />
      </div>
    </StyledPageContainer>
  );
};

export default Marketplace;
