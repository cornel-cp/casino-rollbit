import React, { useState } from "react";
import { ReactComponent as CASINO_IMG } from "../../../assets/images/Frame (9).svg";
import { ReactComponent as SPORTS_IMG } from "../../../assets/images/Frame (10).svg";
import { ReactComponent as NFT_IMG } from "../../../assets/images/Frame (11).svg";
import { ReactComponent as FEATURES_IMG } from "../../../assets/images/Frame (12).svg";
import { ReactComponent as PORTFOLIO_IMG } from "../../../assets/images/Frame (13).svg";
import { ReactComponent as CLANS_IMG } from "../../../assets/images/Frame (14).svg";
import { ReactComponent as LOTTERY_IMG } from "../../../assets/images/Frame (15).svg";
import { ReactComponent as JACKPOT_IMG } from "../../../assets/images/svg.svg";
import { ReactComponent as VIDEO_IMG } from "../../../assets/images/Frame (16).svg";
import { ReactComponent as AWARD_IMG } from "../../../assets/images/Frame (17).svg";
import { ReactComponent as COLLAPSE_IMG } from "../../../assets/images/Frame (34).svg";

const SideBarClosed = ({ toggleSideBar }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#1F2330",
        width: "55px",
        gap: "5px",
        position: "fixed",
      }}
    >
      <COLLAPSE_IMG
        onClick={() => toggleSideBar(true)}
        style={{
          cursor: "pointer",
          width: "25px",
          height: "25px",
          marginTop: "15px",
          marginBottom: "5px",
        }}
      />
      <CASINO_IMG style={{ marginTop: "5px", cursor: "pointer" }} />
      <SPORTS_IMG style={{ marginTop: "20px", cursor: "pointer" }} />
      <NFT_IMG style={{ marginTop: "20px", cursor: "pointer" }} />
      <FEATURES_IMG style={{ marginTop: "20px", cursor: "pointer" }} />
      <PORTFOLIO_IMG style={{ marginTop: "20px", cursor: "pointer" }} />
      <CLANS_IMG style={{ marginTop: "20px", cursor: "pointer" }} />
      <LOTTERY_IMG style={{ marginTop: "20px", cursor: "pointer" }} />
      <JACKPOT_IMG style={{ marginTop: "20px", cursor: "pointer" }} />
      <VIDEO_IMG style={{ marginTop: "20px", cursor: "pointer" }} />
      <AWARD_IMG style={{ marginTop: "20px", cursor: "pointer" }} />
    </div>
  );
};

export default SideBarClosed;
