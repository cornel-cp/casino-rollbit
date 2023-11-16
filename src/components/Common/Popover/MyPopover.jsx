import { Popover } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import CryptoFuturesCoins from "../CryptoFuturesCoins/CryptoFuturesCoins";
import { StyledPopover } from "./styles";

const MyPopover = ({ parentOption, subOptions }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { selectedOption, updateSelectedOption } = useContext(AppContext);

  return (
    <Popover
      className="relative"
      onMouseEnter={() => setIsPopoverOpen(true)}
      onMouseLeave={() => setIsPopoverOpen(false)}
    >
      <Popover.Button>
        <Link
          to={parentOption.sidebarUrl}
          className="link"
          onClick={() => updateSelectedOption(parentOption.sidebarUrl)}
        >
          {parentOption.icon && (
            <parentOption.icon
              className={
                parentOption.sidebarUrl === selectedOption ? "activated" : ""
              }
            />
          )}
        </Link>
      </Popover.Button>

      {isPopoverOpen && (
        <StyledPopover
          style={{
            height: "auto",
            top: "65.6px",
            left: "40px",
            zIndex: 1000,
          }}
        >
          <div class="container-popover">
            <div style={{ paddingBottom: "8px" }}>
              <div class="title">{parentOption.text}</div>
              {parentOption.text === "Crypto Futures" ? (
                <div style={{ padding: "0 8px 0" }}>
                  <CryptoFuturesCoins />
                </div>
              ) : (
                subOptions?.map((option, optionIndex) => (
                  <Link
                    to={option.sidebarUrl}
                    className="option"
                    onClick={() => updateSelectedOption(option.sidebarUrl)}
                  >
                    {option.icon && (
                      <div class="icon">
                        <option.icon
                          className={
                            option.sidebarUrl === selectedOption
                              ? "activated"
                              : ""
                          }
                          style={{ marginLeft: "-4px" }}
                        />
                      </div>
                    )}
                    {option.text}
                  </Link>
                ))
              )}
            </div>
          </div>
        </StyledPopover>
      )}
    </Popover>
  );
};

export default MyPopover;
