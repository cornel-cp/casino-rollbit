import React from "react";

import {
  PROVIDER_OPTIONS,
  SORT_BY_OPTIONS,
} from "../../../assets/MockData/dropdownsData";
import { DATA_CONTENT } from "../../../assets/MockData/mockData";
import ImagesSection from "../../Common/ImagesSection/ImagesSection";
import NavigationHeader from "../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import { StyledPageContainer } from "./styles";

const GameShows = () => {
  const category = "Casino";
  const subcategory = "GAME_SHOWS";

  return (
    <StyledPageContainer>
      <LiveWinsSection title="Live wins" hasFilters={true} />

      <NavigationHeader isNftPage={false} />
      <div className="content-container">
        <SearchAndFilters
          sortByOptions={SORT_BY_OPTIONS}
          providerOptions={PROVIDER_OPTIONS}
        />

        <ImagesSection
          category={category}
          subcategory={subcategory}
          images={DATA_CONTENT}
        />
      </div>
    </StyledPageContainer>
  );
};

export default GameShows;
