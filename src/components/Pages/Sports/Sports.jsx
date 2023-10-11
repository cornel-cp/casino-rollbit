import React from "react";

import SportSection from "./Common/SportSection/SportSection";

import { ReactComponent as LIVE_MATCHES } from "../../../assets/images/live-matches.svg";
import { ReactComponent as TOP_MATCHES } from "../../../assets/images/top-matches.svg";
import {
  SportsBannerImage,
  StyledSportsContainer,
} from "./StyledSportsContainer";

const Sports = () => {
  const category = "Casino";
  const subcategory = "AK_ORIGINALS";

  return (
    <StyledSportsContainer>
      {/* <SportsHeader /> */}
      <SportsBannerImage />
      <SportSection titleIcon={<TOP_MATCHES />} />
      <SportSection titleIcon={<LIVE_MATCHES />} />
      <SportSection titleIcon={<LIVE_MATCHES />} />
    </StyledSportsContainer>
  );
};

export default Sports;
