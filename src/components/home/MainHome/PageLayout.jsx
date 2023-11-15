import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import PageFooter from "../Footer/PageFooter";
import MobileNavBar from "../header/MobileNavBar/MobileNavBar";
import { StyledPageLayout } from "./styles";

const PageLayout = ({ children }) => {
  const {
    isSidebarOpen,
    isChatBoxOpen,
    prevSidebarOpen,
    prevChatBoxOpen,
    isTabletScreen,
    updateChatBox,
    updateMobileScreen,
    updateTabletScreen,
    updateSidebar,
    updatePrevSidebar,
    updatePrevChatBox,
  } = useContext(AppContext);
  const location = useLocation();

  const isOnSportsPage =
    location.pathname.includes("/sports") ||
    location.pathname.includes("/my-bets");

  const handleWindowResize = () => {
    if (window.innerWidth < 576) {
      updateMobileScreen(true);
    } else {
      updateMobileScreen(false);
    }

    if (window.innerWidth < 1024) {
      updateTabletScreen(true);
    } else {
      updateTabletScreen(false);
    }
  };

  useEffect(() => {
    // Call handleWindowResize when the component mounts to set isTabletScreen initially
    handleWindowResize();

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Open the sidebar and chatbox only if their previous state was set on true
  useEffect(() => {
    if (isTabletScreen) {
      if (isSidebarOpen) updatePrevSidebar(true);
      if (isChatBoxOpen) updatePrevChatBox(true);
      updateChatBox(false);
      updateSidebar(false);
    } else {
      if (prevChatBoxOpen) {
        updateChatBox(true);
        updatePrevChatBox(false);
      }
      if (prevSidebarOpen) {
        updateSidebar(true);
        updatePrevSidebar(false);
      }
    }
  }, [isTabletScreen]);

  return (
    <StyledPageLayout
      isSidebarOpen={isSidebarOpen}
      isChatBoxOpen={isChatBoxOpen}
    >
      <>{children}</>

      {!isOnSportsPage && <PageFooter />}
      {isTabletScreen && <MobileNavBar />}
    </StyledPageLayout>
  );
};

export default PageLayout;
