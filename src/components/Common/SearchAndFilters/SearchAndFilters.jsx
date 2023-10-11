import React, { useContext, useState } from "react";
import { AppContext } from "../../../AppContext";
import { ReactComponent as ARROW_DOWN } from "../../../assets/images/Arrow-Down.svg";
import { ReactComponent as ARROW_UP } from "../../../assets/images/Arrow-Up.svg";
import { ButtonWithDropdown, SearchInput, StyledSearchFilters } from "./styles";

const SearchAndFilters = ({ placeholder, provider, sortBy }) => {
  const { selectedOption } = useContext(AppContext);

  const [isOpenedDropdownProvider, setIsOpenedDropdownProvider] =
    useState(false);
  const [isOpenedDropdownSort, setIsOpenedDropdownSort] = useState(false);

  const toggleDropdownProvider = () => {
    setIsOpenedDropdownProvider(
      (prevIsOpenedDropdown) => !prevIsOpenedDropdown
    );
  };

  const toggleDropdownSort = () => {
    setIsOpenedDropdownSort((prevIsOpenedDropdown) => !prevIsOpenedDropdown);
  };

  return (
    <StyledSearchFilters>
      <SearchInput
        type="text"
        placeholder={`Search ${
          selectedOption?.replace(/[^a-zA-Z]/g, " ")?.split("-") || " option"
        }`}
      />
      <ButtonWithDropdown onClick={toggleDropdownProvider}>
        Provider: <span className="provider-text">All</span>
        <span style={{ marginLeft: "6px" }}>
          {isOpenedDropdownProvider ? <ARROW_UP /> : <ARROW_DOWN />}
        </span>
      </ButtonWithDropdown>
      {isOpenedDropdownProvider && (
        <div>
          Dropdown content for Provider
          {/* Add your dropdown content here */}
        </div>
      )}
      <ButtonWithDropdown onClick={toggleDropdownSort}>
        Sort by: <span className="provider-text">All</span>
        <span style={{ marginLeft: "6px" }}>
          {isOpenedDropdownSort ? <ARROW_UP /> : <ARROW_DOWN />}
        </span>
      </ButtonWithDropdown>
      {isOpenedDropdownSort && (
        <div>
          Dropdown content for Sort
          {/* Add your dropdown content here */}
        </div>
      )}
    </StyledSearchFilters>
  );
};

export default SearchAndFilters;
