import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../../AppContext";
import { StyledNavHeaderBtn, StyledNavigationHeader } from "./styles";

const MyBetsNavigation = ({ buttons, onOptionChange, selectedOption }) => {
  console.log("selectedOption", selectedOption);
  return (
    <StyledNavigationHeader>
      <div className="content-wrapper">
        {buttons.map((button, index) => (
          <StyledNavHeaderBtn
            key={index}
            onClick={() => onOptionChange(button.label)}
            isActive={button.label === selectedOption}
            style={{ textTransform: "uppercase" }}
          >
            {button.label}
          </StyledNavHeaderBtn>
        ))}
      </div>

      <div class="container-dropdown">
        <div class="date-picker" data-editor-id="datePicker">
          <div class="date-input">
            <div
              class="icon-dropdown"
              style={{ width: "16px", height: "16px" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
              </svg>
            </div>
            Last Bets
          </div>
        </div>
      </div>
    </StyledNavigationHeader>
  );
};

export default MyBetsNavigation;
