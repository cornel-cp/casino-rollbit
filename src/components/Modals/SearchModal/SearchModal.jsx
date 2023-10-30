import React, { useState } from "react";
import {
  PROVIDER_OPTIONS,
  SORT_BY_OPTIONS,
} from "../../../assets/MockData/dropdownsData";
import { DATA_CONTENT } from "../../../assets/MockData/mockData";
import { ReactComponent as SEARCH_ICON } from "../../../assets/images/navbar-search-icon.svg";
import Button from "../../Common/Buttons/Button";
import ImagesSection from "../../Common/ImagesSection/ImagesSection";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import Modal from "../Modal";
import ModalSidebar from "./ModalSidebar";
import { StyledSearchContent } from "./styles";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Casino");
  const [selectedSubcategory, setSelectedSubcategory] =
    useState("AK_ORIGINALS");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleSubcategoryChange = (newSubcategory) => {
    setSelectedSubcategory(newSubcategory);
  };

  return (
    <>
      <Button
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
        onClick={() => setIsOpen(true)}
      >
        <SEARCH_ICON />
      </Button>

      <Modal
        maxWidth={1408}
        maxHeight={"90vh"}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <StyledSearchContent
          url={
            "https://rollbit.com/static/media/hero-rlb-bot.80736408d58b43236799.jpg"
          }
        >
          <div class="content-container">
            <div className="div-container">
              <ModalSidebar
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
              <div className="game-container">
                <h1 class="title">Select Game</h1>

                <SearchAndFilters
                  sortByOptions={SORT_BY_OPTIONS}
                  providerOptions={PROVIDER_OPTIONS}
                />

                <ImagesSection
                  category={selectedCategory}
                  subcategory={selectedSubcategory}
                  images={DATA_CONTENT}
                />
              </div>
            </div>
          </div>
        </StyledSearchContent>
      </Modal>
    </>
  );
};

export default SearchModal;
