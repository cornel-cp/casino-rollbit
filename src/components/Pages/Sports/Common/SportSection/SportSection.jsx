import React, { useEffect, useRef, useState } from "react";
import SportCard from "../SportCard/SportCard";
import SportsNavigation from "../SportsNavigation/SportsNavigation";
import SportsSectionTitle from "./SportsSectionTitle";
import {
  SportSectionContainer,
  StyledSportSection,
} from "./StyledSportSection";
import TopMatch from "./TopMatch/TopMatch";

const SportSection = ({ titleIcon, isLive = false }) => {
  const containerRef = useRef(null);
  const [numColumns, setNumColumns] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateNumColumns = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setContainerWidth(containerWidth);
        if (containerWidth >= 1600) {
          setNumColumns(4);
        } else if (containerWidth >= 992) {
          setNumColumns(3);
        } else if (containerWidth >= 768) {
          setNumColumns(2);
        } else {
          setNumColumns(1);
        }
      }
    };

    updateNumColumns();

    window.addEventListener("resize", updateNumColumns);

    return () => {
      window.removeEventListener("resize", updateNumColumns);
    };
  }, []);

  return (
    <SportSectionContainer>
      <SportsSectionTitle icon={titleIcon} name={"Top Matches"} />
      <SportsNavigation />
      <StyledSportSection
        ref={containerRef}
        numColumns={numColumns}
        containerWidth={containerWidth}
      >
        {Array(9)
          .fill()
          .map((_, index) => (
            <SportCard key={index} isLive={isLive} />
          ))}
        <TopMatch icon={titleIcon} numColumns={numColumns} />
      </StyledSportSection>
    </SportSectionContainer>
  );
};

export default SportSection;
