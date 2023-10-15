import React, { useContext } from "react";
import { Link } from "react-router-dom";

//assets
import LOGO_IMG from "../../../assets/images/LOGO.svg";
import MESSAGE_ICON from "../../../assets/images/MESSAGE.png";
import SEARCH_ICON from "../../../assets/images/SEARCH.png";
import ChatBox from "../ChatBox/ChatBox";

import { AppContext } from "../../../AppContext";
import RegisterModal from "../../Common/Modals/RegisterModal";
import AccountButton from "./AccountButton/AccountButton";
import BuyCryptoModal from "./BuyCryptoModal/BuyCryptoModal";
import CashierModal from "./CashierModal/CashierModal";
import RewardsButton from "./RewardsButton/RewardsButton";
import TotalMoneyContainer from "./TotalMoneyContainer";

const NavBar = () => {
  const { isChatBoxOpen, isLoggedIn, updateChatBox, updateLoggedIn } =
    useContext(AppContext);

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
          zIndex: 100,
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

              <CashierModal />

              <BuyCryptoModal />
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

          <div class="flex">
            {/* Account Section */}
            {isLoggedIn && <AccountButton />}

            <img src={SEARCH_ICON} alt="search" class="ml-4 mr-4" />
            {isChatBoxOpen === false ? (
              <img
                onClick={() => updateChatBox(true)}
                src={MESSAGE_ICON}
                alt="message"
                class="mr-5"
                style={{ cursor: "pointer" }}
              />
            ) : null}
          </div>
        </div>
      </div>

      <ChatBox isChatBox={isChatBoxOpen} setIsChatBox={updateChatBox} />
    </>
  );
};

export default NavBar;
