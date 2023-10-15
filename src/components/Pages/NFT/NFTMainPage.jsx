import React from "react";

import {
  BUTTONS_NFT_MAIN,
  DATA_CONTENT,
  NFT_BANNER_OPTIONS,
} from "../../../assets/MockData/mockData";
import ImagesSection from "../../Common/ImagesSection/ImagesSection";
import NavigationHeader from "../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import { StyledPageContainer } from "../Casino/styles";
import SupportedCollectionSection from "../../Common/SupportedCollection/SupportedCollectionSection";
import NTFSection from "../../Common/NFTCard/NFTSection";
import { SearchInput } from "../../Common/SearchAndFilters/styles";
import HeaderCollection from "../../Common/SupportedCollection/HeaderCollection";
import { ReactComponent as NFT_IMG } from "../../../assets/images/Frame (11).svg";
import NFTNavigationHeader from "./NFTNavigationHeader";
import NFTBanner from "../../Common/NFTBanner/NFTBanner";
import NFT_Banner from "./../../../assets/images/nft-banner.png";

const NFTMainPage = () => {
  return (
    <StyledPageContainer>
      <NFTBanner bannerOptions={NFT_BANNER_OPTIONS} />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MAIN} />

      <LiveWinsSection
        icon={NFT_IMG}
        title="Recent nft wins"
        hasFilters={false}
      />

      <NTFSection
        title="NFT DEALS"
        buttonText="View Marketplace"
        isLootbox={false}
      />

      <NTFSection
        title="NFT LOOTBOXES"
        buttonText="View All"
        isLootbox={true}
      />

      <div style={{ paddingTop: "32px" }}>
        <HeaderCollection />
        <SupportedCollectionSection />
      </div>
    </StyledPageContainer>
  );
};

export default NFTMainPage;
