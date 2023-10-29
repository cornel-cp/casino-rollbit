import React, { useContext } from "react";

import SportSection from "./Common/SportSection/SportSection";

import { AppContext } from "../../../AppContext";
import { ReactComponent as LIVE_MATCHES } from "../../../assets/images/live-matches.svg";
import { ReactComponent as TOP_MATCHES } from "../../../assets/images/top-matches.svg";
import NoBetsFound from "./Common/NoBetsFound/NoBetsFound";
import {
  SportsBannerImage,
  StyledSportsContainer,
} from "./StyledSportsContainer";

const Sports = () => {
  const { sportsSelectedOption } = useContext(AppContext);

  return (
    <StyledSportsContainer>
      {sportsSelectedOption === "/home" || sportsSelectedOption === "" ? (
        <>
          <SportsBannerImage />
          <SportSection titleIcon={<TOP_MATCHES />} />
          <SportSection titleIcon={<LIVE_MATCHES />} isLive={true} />
          <SportSection titleIcon={<LIVE_MATCHES />} />
        </>
      ) : (
        <NoBetsFound />
      )}
    </StyledSportsContainer>
  );
};

export default Sports;
