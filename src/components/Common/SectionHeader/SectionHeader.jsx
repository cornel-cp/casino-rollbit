import PropTypes from "prop-types";
import React from "react";
import ArrowIcons from "../ArrowIcons/ArrowIcons";
import FilterButtonGroup from "../Buttons/FilterButtonGroup";
import { StyledSectionHeader } from "./styles";

const SectionHeader = ({
  iconHeader,
  sideButton,
  casinoText,
  hasRecommended,
  hasArrows = true,
  hasFilterOptions,
  onOptionChange,
  filterOptions,
  scrollLeft,
  scrollRight,
}) => {
  return (
    <StyledSectionHeader>
      <div className="icon-group">
        <img src={iconHeader} alt="casino" className="icon-header" />
        <span className="casino-text">{casinoText}</span>
        {sideButton && <span className="view-all-text">{sideButton}</span>}
      </div>

      <div style={{ display: "flex" }}>
        {hasRecommended && (
          <div className="recommended-button">
            <button className="recommended-button-text">Recommended</button>
          </div>
        )}
        {hasFilterOptions && (
          <FilterButtonGroup
            options={filterOptions}
            onOptionChange={onOptionChange} // Pass the callback for option change
          />
        )}
        {hasArrows && (
          <ArrowIcons scrollLeft={scrollLeft} scrollRight={scrollRight} />
        )}
      </div>
    </StyledSectionHeader>
  );
};

SectionHeader.propTypes = {
  casinoText: PropTypes.string.isRequired,
  icon1Src: PropTypes.string.isRequired,
  icon2Src: PropTypes.string.isRequired,
};

export default SectionHeader;
