import React, { useState } from "react";

import { BUTTONS_MY_BETS } from "../../../../assets/MockData/mockData";
import { ReactComponent as MY_BETS } from "../../../../assets/images/MyBets.svg";
import PageTitle from "../../../Common/PageTitle/PageTitle";
import { StyledPageContainer } from "../../Casino/styles";
import MyBetsNavigation from "../Common/MyBetsNavigation/MyBetsNavigation";
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
