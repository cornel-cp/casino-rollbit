import React from "react";
import { ReactComponent as NO_BETS_FOUND } from "../../../../../assets/images/no-bets-found.svg";
import { StyledNoBetsFound } from "./styles";

const NoBetsFound = () => {
  return (
    <StyledNoBetsFound>
      <div class="container">
        <div class="content-block" data-editor-id="emptyBetsBlock">
          <NO_BETS_FOUND />
          <div class="info-text">
            No bets are available <br /> Choose different dates
          </div>
          <a href="/">
            <button
              class="button"
              data-editor-id="homePageButton"
              style={{ fontSize: "12px", padding: "7px 28px" }}
            >
              Go to home page
            </button>
          </a>
        </div>
      </div>
    </StyledNoBetsFound>
  );
};

export default NoBetsFound;
