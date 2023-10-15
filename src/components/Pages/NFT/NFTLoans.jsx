import React from "react";

import {
  BUTTONS_MY_NFTs,
  DATA_CONTENT,
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
import StepsSection from "../../Common/StepSection/StepsSection";
import NFT_Banner from "./../../../assets/images/nft-banner.png";
import DepositedNFTsSection from "../../Common/DepositedNFTs/DepositedNFTsSection";
import PreviewExternalWallet from "../../Common/PreviewExternalWallet/PreviewExternalWallet";
import SupportedCollectionTable from "../../Common/SupportedCollection/SupportedCollectionTable";

const options = [
  {
    title: "LOAN YOUR NFTs FOR INSTANT USD,",
    subTitle:
      "Highest LTV on the market. Withdraw via ETH, BTC, LTC, SOL, USDT, USDC, APE.",
    color: "rgb(114, 242, 56)",
    image: NFT_Banner,
    url: "/nft/my-loans",
    infoGraphics: {
      loans: "175,038",
      totalLoanValue: "$106,762,138",
      activeLoans: "422",
      viewMyLoans: "",
    },
  },
];

const steps = [
  {
    number: "01",
    text: "Deposit your NFT",
  },
  {
    number: "02",
    text: "Loan your NFT for USD",
  },
  {
    number: "03",
    text: "Pay back within 7 days",
  },
];

const NFTLoans = () => {
  return (
    <StyledPageContainer>
      <NFTBanner bannerOptions={options} isLoansBanner={true} />

      <StepsSection steps={steps} />

      <DepositedNFTsSection />

      <PreviewExternalWallet />

      <div style={{ paddingTop: "32px" }}>
        <HeaderCollection />
        <SupportedCollectionTable />
      </div>
    </StyledPageContainer>
  );
};

export default NFTLoans;
