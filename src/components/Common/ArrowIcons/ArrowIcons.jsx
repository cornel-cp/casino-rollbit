import PropTypes from "prop-types";
import React from "react";
import ARROW_1 from "../../../assets/images/Frame (25).svg";
import ARROW_2 from "../../../assets/images/Frame (26).svg";
import { StyledArrowIcons } from "./StyledArrowIcons";

const ArrowIcons = ({ scrollLeft, scrollRight }) => {
  return (
    <StyledArrowIcons>
      <img
        src={ARROW_1}
        alt="arrow"
        onClick={scrollLeft}
        className="arrow-style"
      />
      <img
        src={ARROW_2}
        alt="arrow"
        onClick={scrollRight}
        className="arrow-style"
      />
    </StyledArrowIcons>
  );
};

ArrowIcons.propTypes = {
  onArrowClick: PropTypes.func.isRequired,
};

export default ArrowIcons;
