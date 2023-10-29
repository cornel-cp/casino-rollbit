import React from "react";

import { SORT_BY_OPTIONS } from "../../../assets/MockData/dropdownsData";
import ChallengesCardSection from "../../Common/ChallengesCard/ChallengesCardSection";
import NavigationHeader from "../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import Modal from "../../Modals/Modal";
import { StyledPageContainer } from "./styles";

const Challenges = () => {
  return (
    <StyledPageContainer>
      <LiveWinsSection title="Live wins" hasFilters={true} />

      <NavigationHeader isNftPage={false} />
      <div className="content-container">
        <SearchAndFilters
          hasSwitchToggle={true}
          labelSwitchToggle={"Featured First"}
          sortByOptions={SORT_BY_OPTIONS}
        />

        <Modal />

        <ChallengesCardSection />
      </div>
    </StyledPageContainer>
  );
};

export default Challenges;
