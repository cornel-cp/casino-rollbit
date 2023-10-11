import React from "react";

import LeagueInformation from "./LeagueInformation";
import { StyledCardHeader } from "./StyledSportCard";

const SportCardHeader = ({ sportType, country, league, date }) => {
  return (
    <StyledCardHeader>
      <LeagueInformation
        country={country}
        sportType={sportType}
        league={league}
        date={date}
      />
      <div className="date-text">Tomorrow, 01:07</div>
    </StyledCardHeader>
  );
};

export default SportCardHeader;
