import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import { SECTIONS } from "../../../assets/MockData/mockData";
import { ReactComponent as COLLAPSE_IMG } from "../../../assets/images/Frame (34).svg";
import MyPopover from "../../Common/Popover/MyPopover";
import { StyledClosedSidebar } from "./StyledSidebar";

const SideBarClosed = ({ toggleSideBar }) => {
  const [sections, setSections] = useState(SECTIONS);
  const { selectedOption, updateSelectedOption } = useContext(AppContext);

  console.log("sections", sections);
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
        section.options.map((option, optionIndex) => {
          return option?.dropdownOptions ? (
            <MyPopover
              parentOption={option}
              subOptions={option?.dropdownOptions}
            />
          ) : (
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
          );
        })
      )}
    </StyledClosedSidebar>
  );
};

export default SideBarClosed;
