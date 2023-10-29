import React, { useContext } from "react";

import { AppContext } from "../../../../AppContext";
import { ReactComponent as ARROW_DOWN } from "../../../../assets/images/Frame (33).svg";
import TREASURE from "../../../../assets/images/IMAGE (44).png";
import Model1 from "../../../models/rewardModel/Model1";

const RewardsButton = () => {
  const { openDropdown, toggleDropdown } = useContext(AppContext);

  const handleBtnClick = () => {
    toggleDropdown((prev) => (prev ? "" : "rewards"));
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={handleBtnClick}
        style={{
          display: "inline-flex",
          padding: "7px 12px",
          alignItems: "center",
          gap: "10px",
          borderRadius: "8px",
          background: "rgba(203, 215, 255, 0.03)",
          cursor: "pointer",
        }}
      >
        <img
          src={TREASURE}
          alt="treasure"
          style={{ width: "26px", height: "26px" }}
        />
        <p
          style={{
            width: "58px",
            color: "#fff",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "14.4px",
            textTransform: "uppercase",
          }}
        >
          Rewards
        </p>
        <ARROW_DOWN style={{ width: "8px", height: "6px", color: "#b1b6c6" }} />
      </div>
      {openDropdown === "rewards" ? (
        <>
          <div
            style={{
              height: "625px",
              background: "#1F2330",
              width: "420px",
              position: "absolute",
              top: "50px",
              boxShadow: "0px 5px 8px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "6px",
              zIndex: 19,
            }}
          >
            <Model1 />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default RewardsButton;
