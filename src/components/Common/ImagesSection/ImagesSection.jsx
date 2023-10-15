import React from "react";
import Button from "../Buttons/Button";
import HoverableImage from "../HoverableImage/HoverableImage";
import { StyledImageSection } from "./styles";
import useCardsLoadMore from "../../../hooks/useCardsLoadMore";

const ImagesSection = ({ category, subcategory, images }) => {
  const { visibleCards, filteredImages, loadMoreImages } = useCardsLoadMore(
    category,
    subcategory,
    images
  );

  return (
    <StyledImageSection>
      <div className="image-cards">
        {filteredImages?.slice(0, visibleCards).map((image, index) => (
          <HoverableImage key={index} src={image} alt="casino" />
        ))}
      </div>
      {filteredImages?.length >= visibleCards && (
        <div className="btn-wrapper">
          <Button onClick={loadMoreImages}>Load More</Button>
        </div>
      )}
    </StyledImageSection>
  );
};

export default ImagesSection;
