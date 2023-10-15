import React from "react";

import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";
import PageTitle from "../../Common/PageTitle/PageTitle";
import NotFound from "../../Common/NotFound/NotFound";
import { BUTTONS_MY_NFTs } from "../../../assets/MockData/mockData";

const MyNFTs = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="My Nfts" />

      <NFTNavigationHeader buttons={BUTTONS_MY_NFTs} />
      <div className="content-container">
        <SearchAndFilters />
        {/* <NFTSection isLootbox={false} /> */}
        <NotFound text="NO NFTS FOUND" />
      </div>
    </StyledPageContainer>
  );
};

export default MyNFTs;
