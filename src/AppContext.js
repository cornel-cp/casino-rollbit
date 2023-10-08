// AppContext.js
import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState("");

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

  return (
    <AppContext.Provider
      value={{
        selectedOption,
        isSidebarOpen,
        isChatBoxOpen,
        openDropdown,
        updateSelectedOption,
        updateSidebar,
        updateChatBox,
        toggleDropdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
