import React, { useContext } from "react";
import { AppContext } from "../../../AppContext";
import useCardsLoadMore from "../../../hooks/useCardsLoadMore";
import Button from "../Buttons/Button";
import HoverableImage from "../HoverableImage/HoverableImage";
import NotFound from "../NotFound/NotFound";
import { StyledImageSection } from "./styles";

const ImagesSection = ({ category, subcategory, images }) => {
  const { searchState } = useContext(AppContext);
  const { visibleCards, filteredImages, loadMoreImages } = useCardsLoadMore(
    category,
    subcategory,
    images
  );

  // Apply filtering based on the search state
  const filteredImagesAgain = filteredImages.filter((image) => {
    const passesSearchQuery = image.name
      ?.toLowerCase()
      ?.includes(searchState.searchQuery?.toLowerCase());
    const passesProviderFilter =
      searchState.selectedProvider === "All" ||
      image.provider === searchState.selectedProvider;
    const passesSortFilter =
      searchState.selectedSort === "All" ||
      image.sort === searchState.selectedSort;

    return passesSearchQuery && passesProviderFilter && passesSortFilter;
  });

  return (
    <StyledImageSection>
      <div className="image-cards">
        {filteredImagesAgain?.slice(0, visibleCards).map((image, index) => (
          <HoverableImage key={index} src={image.img} alt="casino" />
        ))}
      </div>
      {filteredImagesAgain?.length >= visibleCards && (
        <div className="btn-wrapper">
          <Button className="button-load-more" onClick={loadMoreImages}>
            Load More
          </Button>
        </div>
      )}
      {filteredImagesAgain?.length === 0 ? (
        <NotFound text="NO GAMES FOUND" />
      ) : null}
    </StyledImageSection>
  );
};

export default ImagesSection;
