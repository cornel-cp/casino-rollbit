// AppContext.js
import React, { createContext, useReducer, useState } from "react";

const AppContext = createContext();

// Define your initial state
const initialState = {
  searchQuery: "",
  selectedProvider: "All",
  selectedSort: "All",
};

// Create a reducer to handle state updates
const searchReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "UPDATE_PROVIDER":
      return { ...state, selectedProvider: action.payload };
    case "UPDATE_SORT":
      return { ...state, selectedSort: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onClickFunctionNext, setOnClickFunctionNext] = useState(null);
  const [onClickFunctionPrev, setOnClickFunctionPrev] = useState(null);
  const [searchState, setSearchState] = useReducer(searchReducer, initialState);
  const [sportsSelectedOption, setSportsSelectedOption] = useState(null);
  const [selectedOptionCashier, setSelectedOptionCashier] = useState("Deposit");

  const updateCashierOption = (option) => {
    setSelectedOptionCashier(option);
  };

  const updateSportsSelectedOption = (newOption) => {
    setSportsSelectedOption(newOption);
  };

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
  };
  const updateSidebar = (option) => {
    setIsSidebarOpen(option);
  };
  const updateChatBox = (option) => {
    setIsChatBoxOpen(option);
  };
  const toggleDropdown = (option) => {
    setOpenDropdown(option);
  };
  const updateLoggedIn = (option) => {
    setIsLoggedIn(option);
  };
  const updateOnClickFunctionNext = (option) => {
    setOnClickFunctionNext(option);
  };
  const updateOnClickFunctionPrev = (option) => {
    setOnClickFunctionPrev(option);
  };
  const updateProvider = (provider) => {
    setSearchState({ type: "UPDATE_PROVIDER", payload: provider });
  };
  const updateSort = (sort) => {
    setSearchState({ type: "UPDATE_SORT", payload: sort });
  };

  return (
    <AppContext.Provider
      value={{
        selectedOption,
        isSidebarOpen,
        isChatBoxOpen,
        openDropdown,
        isLoggedIn,
        onClickFunctionNext,
        onClickFunctionPrev,
        searchState,
        sportsSelectedOption,
        selectedOptionCashier,
        updateSelectedOption,
        updateSidebar,
        updateChatBox,
        toggleDropdown,
        updateLoggedIn,
        updateOnClickFunctionNext,
        updateOnClickFunctionPrev,
        setSearchState,
        updateProvider,
        updateSort,
        updateSportsSelectedOption,
        updateCashierOption,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
