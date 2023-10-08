import React from "react";
import SidebarOption from "./SidebarOption";

const DropdownOptions = ({
  options,
  onSubOptionClick,
  activeSubOptionIndex,
}) => {
  return (
    <div className="dropdown-options">
      {options.map((option, optionIndex) => (
        <div key={optionIndex}>
          <SidebarOption
            {...option}
            onClick={() => onSubOptionClick(optionIndex, option.sidebarUrl)}
            isActive={option.sidebarUrl === activeSubOptionIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default DropdownOptions;
