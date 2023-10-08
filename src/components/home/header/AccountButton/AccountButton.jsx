import React, { useContext } from "react";

import { AppContext } from "../../../../AppContext";
import ARROW_DOWN from "../../../../assets/images/Frame (33).svg";
//assets
import HEXAGON from "../../../../assets/images/IMAGE (46).png";
import RECTANGLE from "../../../../assets/images/Rectangle (1).png";
import AccountDropdown from "../../../models/rewardModel/AccountDropdown";

//model assetss

//models

const AccountButton = () => {
  const { openDropdown, toggleDropdown } = useContext(AppContext);

  const handleBtnClick = () => {
    toggleDropdown((prev) => (prev ? "" : "account"));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "14px",
          position: "relative",
        }}
      >
        <div
          onClick={handleBtnClick}
          style={{
            display: "flex",
            width: "141px",
            height: "40px",
            flexShrink: "0",
            borderRadius: "8px",
            background: "rgba(203, 215, 255, 0.03)",
            cursor: "pointer",
          }}
        >
          <img
            src={HEXAGON}
            alt="hexagon"
            style={{
              width: "29px",
              height: "29px",
              margin: "5px 8px",
            }}
          />

          <div>
            <p
              style={{
                width: "55px",
                color: "#fff",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "15.6px",
                letterSpacing: "0.5px",
                margin: "8px 6px",
              }}
            >
              Account
            </p>
            <img
              src={RECTANGLE}
              alt="rectangle"
              style={{
                width: "51px",
                height: "5px",
                margin: "-2px 6px",
              }}
            />
            <img
              src={ARROW_DOWN}
              alt="arrow"
              style={{
                width: "8px",
                height: "6px",
                margin: "-18px 70px",
              }}
            />
          </div>
        </div>
        {openDropdown === "account" ? (
          <>
            <div
              onClick={() => toggleDropdown("")}
              style={{
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                cursor: "pointer",
                height: "100%",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "50px",
                background: "#1F2330",
                borderRadius: "6px",
                boxShadow: " 0px 5px 8px 0px rgba(0, 0, 0, 0.25)",
                width: "200px",
                height: "430px",
              }}
            >
              <AccountDropdown userName="Pablo Escobar" />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default AccountButton;
