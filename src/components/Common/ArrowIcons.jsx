import PropTypes from "prop-types";
import React from "react";
import ARROW_1 from "../../assets/images/Frame (25).svg";
import ARROW_2 from "../../assets/images/Frame (26).svg";

const ArrowIcons = () => {
  return (
    <div style={{ display: "flex", gap: "6px", marginLeft: "17px" }}>
      <img
        src={ARROW_1}
        alt="arrow"
        style={{
          padding: "7px 13px",
          borderRadius: "6px",
          background: "rgba(203, 215, 255, 0.03)",
        }}
      />
      <img
        src={ARROW_2}
        alt="arrow"
        style={{
          padding: "7px 13px",
          borderRadius: "6px",
          background: "rgba(203, 215, 255, 0.03)",
        }}
      />
    </div>
  );
};

ArrowIcons.propTypes = {
  icon1Src: PropTypes.string.isRequired,
  icon2Src: PropTypes.string.isRequired,
};

export default ArrowIcons;
