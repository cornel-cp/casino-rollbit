import React from "react";

import { DATA_CONTENT } from "../../../assets/MockData/mockData";
import ImagesSection from "../../Common/ImagesSection/ImagesSection";
import NavigationHeader from "../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import { StyledPageContainer } from "./styles";

const LiveCasino = () => {
  const category = "Casino";
  const subcategory = "LIVE_CASINO";

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

export default LiveCasino;
