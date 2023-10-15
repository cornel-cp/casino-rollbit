import React from "react";

import NavigationHeader from "../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTSection from "../../Common/NFTSection/NFTSection";
import NFTNavigationHeader from "./NFTNavigationHeader";
import NFTBanner from "../../Common/NFTBanner/NFTBanner";
import {
  BUTTONS_NFT_MAIN,
  NFT_BANNER_OPTIONS,
} from "../../../assets/MockData/mockData";

const ManageSportsbots = () => {
  return (
    <StyledPageContainer>
      <NFTBanner bannerOptions={NFT_BANNER_OPTIONS} />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MAIN} />

      <div className="content-container">
        <SearchAndFilters />

        <NFTSection isLootbox={false} />
      </div>
    </StyledPageContainer>
  );
};

export default ManageSportsbots;
