import React, { useState } from "react";
import { ReactComponent as BALANCE_IMG } from "../../../assets/images/AK BALANCE.svg";
import { ReactComponent as ARROW_DOWN } from "../../../assets/images/Arrow-Down.svg";
import { ReactComponent as ARROW_UP } from "../../../assets/images/Arrow-Up.svg";
import { ReactComponent as ARROW_ICON } from "../../../assets/images/Frame (2).svg";
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
import { ReactComponent as VISA_IMG } from "../../../assets/images/Frame (18).svg";
import { ReactComponent as DEBIT_IMG } from "../../../assets/images/Frame (19).svg";
import { ReactComponent as PAY_IMG } from "../../../assets/images/Frame (20).svg";
import { ReactComponent as GOOGLE_IMG } from "../../../assets/images/Frame (21).svg";
import { StyledOpenedSidebar } from "./StyledSidebar";
import { DropdownBtn } from "../../Common/Buttons/DropdownBtn";
import SideBarClosed from "./SideBarClosed";

const SECTIONS = [
  {
    name: "PLAY AK GAMES",
    options: [
      {
        icon: CASINO_IMG,
        text: "Casino",
        hasDropdown: true,
        isOpenedDropdown: false,
      },
      {
        icon: SPORTS_IMG,
        text: "Sports",
        hasDropdown: true,
        isOpenedDropdown: false,
      },
      {
        icon: NFT_IMG,
        text: "NFT",
        hasDropdown: true,
        isOpenedDropdown: false,
      },
      {
        icon: FEATURES_IMG,
        text: "Crypto Features",
        hasDropdown: true,
        isOpenedDropdown: false,
      },
      {
        icon: PORTFOLIO_IMG,
        text: "Crypto Portfolio",
        hasDropdown: false,
        isOpenedDropdown: false,
      },
      {
        icon: CLANS_IMG,
        text: "Clans",
        hasDropdown: false,
        isOpenedDropdown: false,
      },
    ],
  },
  {
    name: "OTHER",
    options: [
      { icon: LOTTERY_IMG, text: "AK Lottery", number: "$5.03K", count: "64" },
      { icon: JACKPOT_IMG, text: "Jackpot", number: "$31.2", count: "10" },
      { icon: VIDEO_IMG, text: "Streams" },
    ],
  },
  {
    name: "EVENTS",
    options: [{ icon: AWARD_IMG, text: "$25K Race" }],
  },
];

const SidebarOption = ({
  icon: Icon,
  text,
  number,
  count,
  hasDropdown = false,
  isOpenedDropdown = false,
  onClickDropdown,
}) => {
  return (
    <div className="option-sidebar">
      <Icon className="icon-img" />
      <span className="info-text">{text}</span>
      {number && <span className="info-number">{number}</span>}
      {count && <span className="count">{count}</span>}

      {hasDropdown && (
        <div>
          <DropdownBtn onClick={onClickDropdown}>
            {isOpenedDropdown ? <ARROW_UP /> : <ARROW_DOWN />}
          </DropdownBtn>
        </div>
      )}
    </div>
  );
};

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [sections, setSections] = useState(SECTIONS);

  const handleDropdownClick = (sectionIndex, optionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].options[optionIndex].isOpenedDropdown =
      !updatedSections[sectionIndex].options[optionIndex].isOpenedDropdown;
    setSections(updatedSections);
  };

  return isSideBarOpen ? (
    <StyledOpenedSidebar
      className="w-64 flex flex-col flex-shrink-0 mr-14 overFlow"
      style={{ background: "#1F2330" }}
    >
      <div>
        <BALANCE_IMG width={"100%"} />
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {sectionIndex === 0 ? (
            <div className="w-38 flex justify-between items-center cursor-pointer">
              <span className="other-text">{section.name}</span>
              <ARROW_ICON onClick={() => setIsSideBarOpen(false)} />
            </div>
          ) : (
            <span className="other-text">{section.name}</span>
          )}

          <div className="other-section">
            {section.options.map((option, optionIndex) => (
              <SidebarOption
                key={optionIndex}
                onClickDropdown={() =>
                  handleDropdownClick(sectionIndex, optionIndex)
                }
                {...option}
              />
            ))}
          </div>
        </div>
      ))}

      {/* //coins buy options */}

      <div className="w-64 h-36 flex-shrink-0 bg-blue-100 bg-opacity-10 mt-20">
        <div>
          <button className="inline-flex py-2 px-14 items-start gap-4 rounded-lg bg-blue-200 bg-opacity-20 text-white text-center text-sm font-normal leading-5 tracking-wider ml-6 mt-6 mb-6">
            BUY CRYPTO
          </button>

          <div className="flex items-center gap-2 ml-4 mt-2 cursor-pointer">
            <VISA_IMG />
            <DEBIT_IMG />
            <PAY_IMG />
            <GOOGLE_IMG />
          </div>
        </div>
      </div>
    </StyledOpenedSidebar>
  ) : (
    <SideBarClosed toggleSideBar={setIsSideBarOpen} />
  );
};

export default SideBar;
