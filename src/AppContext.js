// AppContext.js
import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <AppContext.Provider
      value={{
        selectedOption,
        isSidebarOpen,
        isChatBoxOpen,
        openDropdown,
        isLoggedIn,
        updateSelectedOption,
        updateSidebar,
        updateChatBox,
        toggleDropdown,
        updateLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
