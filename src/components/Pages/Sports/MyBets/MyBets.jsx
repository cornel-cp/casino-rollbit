import React, { useState } from "react";

import {
  BUTTONS_MY_BETS,
  DATA_CONTENT,
} from "../../../../assets/MockData/mockData";
import ImagesSection from "../../../Common/ImagesSection/ImagesSection";
import NavigationHeader from "../../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../../Common/SearchAndFilters/SearchAndFilters";
import LiveWinsSection from "../../../Common/WinnerCard/LiveWinsSection";
import { StyledPageContainer } from "../../Casino/styles";
import MyBetsNavigation from "../Common/MyBetsNavigation/MyBetsNavigation";
import PageTitle from "../../../Common/PageTitle/PageTitle";
import { ReactComponent as MY_BETS } from "../../../../assets/images/MyBets.svg";
import NoBetsFound from "../Common/NoBetsFound/NoBetsFound";

const MyBets = () => {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOptionChange = (option) => {
    // Update the selected option
    setSelectedOption(option);
  };

  return (
    <StyledPageContainer>
      <PageTitle icon={MY_BETS} title="My Bets" />
      <MyBetsNavigation
        buttons={BUTTONS_MY_BETS}
        onOptionChange={handleOptionChange}
        selectedOption={selectedOption}
      />
      <NoBetsFound />
    </StyledPageContainer>
  );
};

export default MyBets;
