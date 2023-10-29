import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//assets
import LOGO_IMG from "../../../assets/images/LOGO.svg";
import { ReactComponent as MESSAGE_ICON } from "../../../assets/images/message.svg";
import { ReactComponent as SEARCH_ICON } from "../../../assets/images/navbar-search-icon.svg";
import ChatBox from "../ChatBox/ChatBox";

import { AppContext } from "../../../AppContext";
import Button from "../../Common/Buttons/Button";
import RegisterModal from "../../Common/Modals/RegisterModal";
import AccountButton from "./AccountButton/AccountButton";
// import CashierModal from "./CashierModal/CashierModal";
import CashierModal from "../../Modals/CashierModals/CashierModal";
import RewardsButton from "./RewardsButton/RewardsButton";
import TotalMoneyContainer from "./TotalMoneyContainer";

const NavBar = () => {
  const { isChatBoxOpen, isLoggedIn, updateChatBox, updateLoggedIn } =
    useContext(AppContext);

  const handleWindowResize = () => {
    if (window.innerWidth < 1024) {
      updateChatBox(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div
        className="h-16 flex justify-between items-center p-3"
        style={{
          boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
          position: "sticky",
          top: "0",
          left: "0",
          right: "0",
          background: "#1A1D29",
          zIndex: 9,
        }}
      >
        <div style={{ display: "flex" }}>
          <Link to="/ " className="w-40 flex h-10 flex-shrink-0 cursor-pointer">
            <img src={LOGO_IMG} alt="logo" />
          </Link>
          {/* Rewards Button */}
          {isLoggedIn && <RewardsButton />}
        </div>

        {isLoggedIn && (
          <>
            {/* Coins / Cashier / Buy Crypto Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <TotalMoneyContainer money="$0.00" />

              <CashierModal button={"Cashier"} />

              <CashierModal button={"Buy Crypto"} />
            </div>
          </>
        )}

        <div style={{ display: "flex", alignItems: "center" }}>
          {!isLoggedIn && (
            <>
              <RegisterModal modalOption="login" />
              <RegisterModal modalOption="register" />
            </>
          )}

          <div style={{ display: "flex" }}>
            {/* Account Section */}
            {isLoggedIn && <AccountButton />}

            <Button style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              <SEARCH_ICON />
            </Button>
            {isChatBoxOpen === false ? (
              <Button className="mr-5" onClick={() => updateChatBox(true)}>
                <MESSAGE_ICON />
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <ChatBox isChatBox={isChatBoxOpen} setIsChatBox={updateChatBox} />
    </>
  );
};

export default NavBar;
