import React, { useContext, useState } from "react";
import { ReactComponent as SPORTS_IMG } from "../../../assets/images/Frame (10).svg";
import { ReactComponent as NFT_IMG } from "../../../assets/images/Frame (11).svg";
import { ReactComponent as FEATURES_IMG } from "../../../assets/images/Frame (12).svg";
import { ReactComponent as PORTFOLIO_IMG } from "../../../assets/images/Frame (13).svg";
import { ReactComponent as CLANS_IMG } from "../../../assets/images/Frame (14).svg";
import { ReactComponent as LOTTERY_IMG } from "../../../assets/images/Frame (15).svg";
import { ReactComponent as VIDEO_IMG } from "../../../assets/images/Frame (16).svg";
import { ReactComponent as AWARD_IMG } from "../../../assets/images/Frame (17).svg";
import { ReactComponent as COLLAPSE_IMG } from "../../../assets/images/Frame (34).svg";
import { ReactComponent as CASINO_IMG } from "../../../assets/images/Frame (9).svg";
import { ReactComponent as JACKPOT_IMG } from "../../../assets/images/svg.svg";
import { StyledClosedSidebar } from "./StyledSidebar";
import { SECTIONS } from "../../../assets/MockData/mockData";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";

const SideBarClosed = ({ toggleSideBar }) => {
  const [sections, setSections] = useState(SECTIONS);
  const { selectedOption, isSidebarOpen, updateSelectedOption, updateSidebar } =
    useContext(AppContext);

  return (
    <StyledClosedSidebar>
      <div to={"#"} className="link">
        <COLLAPSE_IMG
          onClick={() => toggleSideBar(true)}
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      </div>
      {sections.map((section) =>
        section.options.map((option, optionIndex) => (
          <Link
            to={option.sidebarUrl}
            className="link"
            onClick={() => updateSelectedOption(option.sidebarUrl)}
          >
            {option.icon && (
              <option.icon
                className={
                  option.sidebarUrl === selectedOption ? "activated" : ""
                }
              />
            )}
          </Link>
        ))
      )}
    </StyledClosedSidebar>
  );
};

export default SideBarClosed;
