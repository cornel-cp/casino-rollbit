import React, { useState } from "react";

import {
  PROVIDER_OPTIONS,
  SORT_BY_OPTIONS,
} from "../../../assets/MockData/dropdownsData";
import { DATA_CONTENT } from "../../../assets/MockData/mockData";
import ImagesSection from "../../Common/ImagesSection/ImagesSection";
import NavigationHeader from "../../Common/NavigationHeader/NavigationHeader";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import SidebetsWelcome from "../../Modals/SidebetsWelcome";
import { StyledPageContainer } from "./styles";

const WithSidebets = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const category = "Casino";
  const subcategory = "WITH_SIDEBETS";

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <SidebetsWelcome isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </StyledPageContainer>
  );
};

export default WithSidebets;
