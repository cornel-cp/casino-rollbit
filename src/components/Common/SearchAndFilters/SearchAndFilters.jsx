import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import Dropdown from "../Dropdowns/Dropdown";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { SearchInput, StyledSearchFilters } from "./styles";

const SearchAndFilters = ({
  hasSwitchToggle = false,
  labelSwitchToggle,
  providerOptions,
  sortByOptions,
  collectionOptions,
  traitsOptions,
}) => {
  const {
    selectedOption,
    searchState,
    setSearchState,
    updateProvider,
    updateSort,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [isToggle, setIsToggle] = useState(false);
  const previousSearchStateRef = useRef(searchState);

  const updateURL = () => {
    if (searchState === previousSearchStateRef.current) {
      return;
    }

    const queryParams = new URLSearchParams();

    if (searchState.searchQuery) {
      queryParams.set("query", searchState.searchQuery);
    }

    if (searchState.selectedProvider !== providerOptions?.[0].label) {
      queryParams.set("provider", searchState.selectedProvider);
    }

    if (searchState.selectedSort !== sortByOptions?.[0].label) {
      queryParams.set("sort", searchState.selectedSort);
    }

    // Update the previousSearchState reference
    previousSearchStateRef.current = searchState;

    const currentPath = location.pathname;

    navigate(`${currentPath}?${queryParams.toString()}`);
  };

  useEffect(() => {
    updateURL();
  }, [searchState]);

  useEffect(() => {
    return () => {
      setSearchState({ type: "UPDATE_SEARCH", payload: "" }); // Reset the search state
      updateProvider(providerOptions?.[0].label); // Reset the provider state
      updateSort(sortByOptions?.[0].label); // Reset the sort state
    };
  }, []);

  return (
    <StyledSearchFilters>
      <SearchInput
        type="text"
        placeholder={`Search ${
          selectedOption?.replace(/[^a-zA-Z]/g, " ")?.split("-") || " option"
        }`}
        value={searchState.searchQuery}
        onChange={(e) =>
          setSearchState({ type: "UPDATE_SEARCH", payload: e.target.value })
        }
      />
      {hasSwitchToggle && (
        <SwitchToggle
          checked={isToggle}
          toggle={setIsToggle}
          label={labelSwitchToggle}
        />
      )}
      {providerOptions && (
        <Dropdown
          options={providerOptions}
          label="Provider"
          selectedOption={searchState.selectedProvider}
          onSelectOption={updateProvider}
          hasSearchInput={true}
        />
      )}
      {sortByOptions && (
        <Dropdown
          options={sortByOptions}
          label="Sort by"
          selectedOption={searchState.selectedSort}
          onSelectOption={updateSort}
        />
      )}
      {collectionOptions && (
        <Dropdown
          options={collectionOptions}
          label="Collection"
          selectedOption={searchState.selectedSort}
          onSelectOption={updateSort}
        />
      )}
      {traitsOptions && (
        <Dropdown
          options={traitsOptions}
          label="Traits"
          selectedOption={searchState.selectedSort}
          onSelectOption={updateSort}
        />
      )}
    </StyledSearchFilters>
  );
};

export default SearchAndFilters;
