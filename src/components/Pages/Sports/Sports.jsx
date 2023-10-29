import React, { useContext } from "react";

import SportSection from "./Common/SportSection/SportSection";

import { AppContext } from "../../../AppContext";
import { ReactComponent as LIVE_MATCHES } from "../../../assets/images/live-matches.svg";
import { ReactComponent as TOP_MATCHES } from "../../../assets/images/top-matches.svg";
import NoSportFound from "./Common/SportSection/NoSportFound";
import {
  SportsBannerImage,
  StyledSportsContainer,
} from "./StyledSportsContainer";

const Sports = () => {
  const { selectedOption, sportsSelectedOption } = useContext(AppContext);

  return (
    <StyledSportsContainer>
      {selectedOption === "/sports" ||
      sportsSelectedOption === "/home" ||
      sportsSelectedOption === "" ? (
        <>
          <SportsBannerImage />
          <SportSection titleIcon={<TOP_MATCHES />} />
          <SportSection titleIcon={<LIVE_MATCHES />} isLive={true} />
          <SportSection titleIcon={<LIVE_MATCHES />} />
        </>
      ) : (
        <NoSportFound />
      )}
    </StyledSportsContainer>
  );
};

export default Sports;
