import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import CASINO from "../../../assets/images/Frame (9).svg";
import CASINO_IMG_1 from "../../../assets/images/IMAGE (14).png";
import CASINO_IMG_2 from "../../../assets/images/IMAGE (15).png";
import CASINO_IMG_3 from "../../../assets/images/IMAGE (16).png";
import CASINO_IMG_4 from "../../../assets/images/IMAGE (17).png";
import CASINO_IMG_5 from "../../../assets/images/IMAGE (18).png";
import CASINO_IMG_6 from "../../../assets/images/IMAGE (19).png";
import HoverableImage from "../HoverableImage/HoverableImage";

const CasinoSection = () => {
  return (
    <div>
      <SectionHeader
        iconHeader={CASINO}
        casinoText="CASINO"
        sideButton="View All"
        hasRecommended={true}
      />

      {/* casino images */}
      <div style={{ display: "flex", width: "1122px", marginTop: "20px" }}>
        <div style={{ display: "flex", gap: "33px" }}>
          <HoverableImage src={CASINO_IMG_1} alt="casino" />

          <HoverableImage src={CASINO_IMG_2} alt="casino" />

          <HoverableImage src={CASINO_IMG_3} alt="casino" />

          <HoverableImage src={CASINO_IMG_4} alt="casino" />

          <HoverableImage src={CASINO_IMG_5} alt="casino" />

          <HoverableImage src={CASINO_IMG_6} alt="casino" />
        </div>
      </div>
    </div>
  );
};

export default CasinoSection;
