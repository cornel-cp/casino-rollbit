import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import HoverableImage from "../HoverableImage/HoverableImage";
import { StyledImageSection } from "./styles";

const ImagesSection = ({ category, subcategory, images }) => {
  const [visibleImages, setVisibleImages] = useState(35);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    let localFilteredImages = [];

    // Check if category and subcategory are provided
    if (category && subcategory) {
      const categoryData = images.categories.find(
        (cat) => cat.name === category
      );
      if (categoryData) {
        const subcategoryData = categoryData.subcategories.find(
          (subcat) => subcat.name === subcategory
        );
        if (subcategoryData) {
          localFilteredImages = subcategoryData.cards.map((card) => card.img);
        }
      }
    } else {
      localFilteredImages = images.CASINO_IMAGES;
    }

    setFilteredImages(localFilteredImages);
  }, [category, subcategory, images]);

  const loadMoreImages = () => {
    setVisibleImages((prevCount) => prevCount + 14);
  };

  return (
    <StyledImageSection>
      <div className="image-cards">
        {filteredImages?.slice(0, visibleImages).map((image, index) => (
          <HoverableImage key={index} src={image} alt="casino" />
        ))}
      </div>
      {filteredImages?.length >= visibleImages && (
        <div className="btn-wrapper">
          <Button onClick={loadMoreImages}>Load More</Button>
        </div>
      )}
    </StyledImageSection>
  );
};

export default ImagesSection;
