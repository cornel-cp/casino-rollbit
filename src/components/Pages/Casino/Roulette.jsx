import React from "react";

import { DATA_CONTENT } from "../../../assets/MockData/mockData";
import ImagesSection from "../../Common/ImagesSection/ImagesSection";
import NavigationHeader from "../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import { StyledPageContainer } from "./styles";

const Roulette = () => {
  const category = "Casino";
  const subcategory = "ROULETTE";

  return (
    <StyledPageContainer>
      <LiveWinsSection />

      <NavigationHeader />
      <div className="content-container">
        <SearchAndFilters />

        <ImagesSection
          category={category}
          subcategory={subcategory}
          images={DATA_CONTENT}
        />
      </div>
    </StyledPageContainer>
  );
};

export default Roulette;
