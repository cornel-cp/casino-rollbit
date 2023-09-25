import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//components
import Login from "../../LoginAndRgister/Login";
import Register from "../../LoginAndRgister/Register";
import MainHome from "../MainHome/MainHome";

//assets
import Logo from "../../../assets/images/LOGO.png";
import Image from "../../../assets/images/IMAGE.jpg";
import LOGO_IMG from "../../../assets/images/LOGO.svg";
import SEARCH_ICON from "../../../assets/images/SEARCH.png";
import MESSAGE_ICON from "../../../assets/images/MESSAGE.png";
import MSG from "../../../assets/images/Frame (31).svg";
import SWITCH from "../../../assets/images/Frame (32).svg";
import ARROW_DOWN from "../../../assets/images/Frame (33).svg";
import CROSS from "../../../assets/images/Frame (35).svg";
import EMOJI from "../../../assets/images/IMAGE (43).png";
import SETTINGS from "../../../assets/images/Frame (36).svg";
import BALANCE_IMG from "../../../assets/images/AK BALANCE.svg";
import ARROW_ICON from "../../../assets/images/Frame (2).svg";
import CASINO from "../../../assets/images/Frame (9).svg";
import DOWN_ARROW from "../../../assets/images/Frame 400.png";
import SPORTS from "../../../assets/images/Frame (10).svg";
import NFT from "../../../assets/images/Frame (11).svg";
import FEATURES from "../../../assets/images/Frame (12).svg";
import PORTFOLIO from "../../../assets/images/Frame (13).svg";
import CLANS from "../../../assets/images/Frame (14).svg";
import LOTTERY from "../../../assets/images/Frame (15).svg";
import JACKPOT from "../../../assets/images/svg.svg";
import VIDEO from "../../../assets/images/Frame (16).svg";
import AWARD from "../../../assets/images/Frame (17).svg";
import VISA from "../../../assets/images/Frame (18).svg";
import DEBIT from "../../../assets/images/Frame (19).svg";
import PAY from "../../../assets/images/Frame (20).svg";
import GOOGLE from "../../../assets/images/Frame (21).svg";
import COLLAPSE from "../../../assets/images/Frame (34).svg";
import UpdatedNavbar from "./UpdatedNavbar";
import SUPPORT from "../../../assets/images/Frame (65).svg";
import SideBar from "./SideBar";

const StyledComponent = styled.div`
  width: 16rem;
  flex: 0 0 auto;
  background: #1a1d29;
  margin-right: 3.5pc;
  position: sticky;
  top: 65px;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 730px;
  scroll-padding-top: 9rem;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.3);

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background: #1a1d29;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(203, 215, 255, 0.08);
  }
`;

const Home = () => {
  const [showM, setShowM] = useState(false);
  const [navigateAcc, setNavigateAcc] = useState(true);
  const [isChatBox, setIsChatBox] = useState(true);
  const [isSideBar, setIsSideBar] = useState(true);
  const [isChangeNavbar, setIsChangeNavbar] = useState(false);

  const openRegisterModal = () => {
    setShowM(true);
    setNavigateAcc(false);
  };

  const ChangeNavbar = () => {
    setIsChangeNavbar(true);
  };

  const System = () => {
    return (
      <>
        <div
          onClick={() => setShowM(false)}
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            backgroundColor: "#000000aa",
          }}
        ></div>
        <div
          style={{
            justifyContent: "space-between",
            position: "fixed",
            flexDirection: "row",
            display: "flex",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1A1D29",
            height: "41.5pc",
            width: "55pc",
            borderRadius: "10px",
          }}
        >
          <div>
            <div style={{ marginTop: "24px", marginLeft: "24px" }}>
              <div
                onClick={() => setNavigateAcc(true)}
                style={{
                  marginRight: "15px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  background: navigateAcc
                    ? "rgba(203, 215, 255, 0.08)"
                    : "rgba(203, 215, 255, 0.03)",
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    color: navigateAcc ? "#FFFFC1" : "#B1B6C6",
                    cursor: "pointer",
                    padding: "11px 16px",
                    fontWeight: "bolder",
                  }}
                >
                  LOGIN
                </span>
              </div>
              <div
                onClick={() => setNavigateAcc(false)}
                style={{
                  borderRadius: "8px",
                  background: navigateAcc
                    ? "rgba(203, 215, 255, 0.03)"
                    : "rgba(203, 215, 255, 0.08)",
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    color: navigateAcc ? "#B1B6C6" : "#FFFFC1",
                    cursor: "pointer",
                    padding: "11px 16px",
                    fontWeight: "bolder",
                  }}
                >
                  REGISTER
                </span>
              </div>
            </div>
            {navigateAcc ? <Login navigateAcc={navigateAcc} /> : <Register />}
          </div>

          <div style={{}}>
            <img
              src={Logo}
              style={{ position: "absolute", top: "50px", right: "9pc" }}
              alt="profile"
            />
            <img
              onClick={() => setShowM(false)}
              src={CROSS}
              alt="cross"
              style={{
                width: "1.2pc",
                height: "1.2pc",
                position: "absolute",
                top: "20px",
                right: "25px",
                cursor: "pointer",
              }}
            />
            <img
              style={{
                height: "41.5pc",
                width: "26.7pc",
                borderTopRightRadius: "11px",
                borderBottomRightRadius: "11px",
              }}
              src={Image}
              alt="profile"
            />
            <div
              style={{ position: "absolute", bottom: "20px", right: "2.5pc" }}
            >
              <p style={{ color: "#fff", fontSize: "15px" }}>
                By accessing the site, I attest that I am at least 18 years{" "}
              </p>
              <p
                style={{ color: "#fff", textAlign: "center", fontSize: "15px" }}
              >
                old and have read the{" "}
                <span style={{ cursor: "pointer" }}>Term & Conditions.</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div style={{ background: "#1A1D29", height: "3200px" }}>
      {/* app bar */}
      {!isChangeNavbar ? (
        <>
          <div
            className="h-16 flex justify-between items-cente p-3"
            style={{
              boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
              position: "sticky",
              top: "0",
              left: "0",
              right: "0",
              background: "#1A1D29",
            }}
          >
            <Link
              to="/ "
              className="w-40 flex h-10 flex-shrink-0 cursor-pointer"
            >
              <img src={LOGO_IMG} alt="logo" />
            </Link>

            <div style={{ display: "flex" }}>
              <button
                onClick={() => ChangeNavbar()}
                className="text-white w-11 text-sm font-normal leading-5 tracking-wider mr-5"
              >
                LOGIN
              </button>
              <button
                onClick={() => openRegisterModal()}
                style={{
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  padding: "10px 30px",
                  paddingBottom: "10px",
                  alignItems: "center",
                  gap: "10px",
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                  letterSpacing: "0.5px",
                }}
              >
                REGISTER
              </button>

              <div class="flex">
                <img src={SEARCH_ICON} alt="search" class="ml-4 mr-4" />
                {isChatBox === false ? (
                  <img
                    onClick={() => setIsChatBox(true)}
                    src={MESSAGE_ICON}
                    alt="message"
                    class="mr-5"
                    style={{ cursor: "pointer" }}
                  />
                ) : null}
              </div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            {/* sidebar */}
            <div style={{ marginRight: isSideBar === false ? "14pc" : "0" }}>
              <SideBar />
            </div>

            <div style={{ marginLeft: isChatBox === false ? "100px" : "0px" }}>
              <MainHome update={isChatBox} />
            </div>

            {/* chat box */}
            {isChatBox ? (
              <div
                style={{
                  position: "fixed",
                  left: "89.6pc",
                  top: "4.0pc",
                  background: "#1F2330",
                  width: "16.5pc",
                  height: "750px",
                }}
              >
                <div>
                  <div
                    style={{
                      padding: "7px 10px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(203, 215, 255, 0.03)",
                      borderRadius: "6px",
                      margin: "10px 10px",
                    }}
                  >
                    <img
                      src={MSG}
                      alt="Chat"
                      style={{ height: "12px", width: "11px" }}
                    />
                    <p
                      style={{
                        width: "30px",
                        color: "#FFFFC1",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "14.4px",
                        textTransform: "uppercase",
                      }}
                    >
                      Chat
                    </p>
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <img
                      src={SWITCH}
                      alt="switch"
                      style={{ width: "9px", height: "14px" }}
                    />
                    <p
                      style={{
                        width: "46px",
                        color: "#B1B6C6",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "14.4px",
                        textTransform: "uppercase",
                      }}
                    >
                      Trades
                    </p>
                    <img
                      src={ARROW_DOWN}
                      alt="arrow"
                      style={{ width: "7px", height: "5px" }}
                    />

                    <div
                      style={{
                        display: "flex",
                        gap: "4px",
                        marginLeft: "2.5pc",
                      }}
                    >
                      <img
                        src={COLLAPSE}
                        alt="collapse"
                        style={{
                          width: "22px",
                          height: "22px",
                          flexShrink: "0",
                        }}
                      />
                      <img
                        onClick={() => setIsChatBox(false)}
                        src={CROSS}
                        alt="cross"
                        style={{
                          width: "22px",
                          height: "22px",
                          flexShrink: "0",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>

                  {/* image part */}
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "30px 50px",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "8px",
                      background: "rgba(15, 17, 26, 0.55)",
                      margin: "20px 13px",
                      width: "15pc",
                    }}
                  >
                    <p
                      style={{
                        color: "#B1B6C6",
                        fontSize: "15 px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "21.6px",
                        textTransform: "uppercase",
                      }}
                    >
                      No Messages Yet
                    </p>
                  </div>

                  {/* message input form */}
                  <input
                    type="text"
                    placeholder="Login to chat"
                    style={{
                      display: "flex",
                      width: "15pc",
                      padding: "8px 11px",
                      alignItems: "flex-start",
                      gap: "10px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                      margin: "29pc 13px",
                      color: "#fff",
                    }}
                  />

                  <div style={{ margin: "-27.5pc 18px" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <img
                        src={EMOJI}
                        alt="emoji"
                        style={{
                          width: "21px",
                          height: "20px",
                          flexShrink: "0",
                        }}
                      />
                      <img
                        src={SETTINGS}
                        alt="settings"
                        style={{
                          width: "13px",
                          height: "13px",
                          flexShrink: "0",
                        }}
                      />
                      <p
                        style={{
                          width: "37px",
                          color: "#B1B6C6",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "14.4px",
                          textTransform: "uppercase",
                        }}
                      >
                        Rules
                      </p>

                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          alignItems: "center",
                          margin: "-5px 3.2pc",
                        }}
                      >
                        <p
                          style={{
                            width: "24px",
                            color: "#B1B6C6",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "14.4px",
                            textTransform: "uppercase",
                          }}
                        >
                          200
                        </p>
                        <div
                          style={{
                            display: "inline-flex",
                            padding: "4px 8px",
                            alignItems: "flex-start",
                            gap: "10px",
                            borderRadius: "6px",
                            background: "#86F454",
                            boxShadow:
                              "0px 0px 10px 0px rgba(118, 255, 25, 0.40)",
                            cursor: "pointer",
                          }}
                        >
                          <p
                            style={{
                              color: "#141722",
                              fontSize: "12px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "14.4px",
                              letterSpacing: "0.5px",
                              textTransform: "uppercase",
                            }}
                          >
                            Send
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="https://t.me/casino_crafters" target="_blank">
                  <div
                    style={{
                      position: "absolute",
                      left: "-2.8pc",
                      bottom: "1.8pc",
                      background: "#272B38",
                      borderRadius: "999px",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <img src={SUPPORT} alt="support" />
                  </div>
                </Link>
              </div>
            ) : (
              <Link to="https://t.me/casino_crafters" target="_blank">
                <div
                  style={{
                    position: "fixed",
                    right: "1pc",
                    bottom: "0.8pc",
                    background: "#272B38",
                    borderRadius: "999px",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  <img src={SUPPORT} alt="support" />
                </div>
              </Link>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              marginTop: "65px",
              marginBottom: "-65px",
            }}
          >
            {/* sidebar */}
            <div style={{ marginRight: isSideBar === false ? "14pc" : "0" }}>
              {isSideBar === false ? (
                <>
                  <div
                    style={{
                      height: "100vh", // 100% of view    port height
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "#1F2330",
                      width: "55px",
                      gap: "5px",
                      position: "fixed",
                    }}
                  >
                    <img
                      onClick={() => setIsSideBar(true)}
                      src={COLLAPSE}
                      alt="collapsed"
                      style={{
                        cursor: "pointer",
                        width: "25px",
                        height: "25px",
                        marginTop: "15px",
                        marginBottom: "5px",
                      }}
                    />
                    <img
                      style={{ marginTop: "5px", cursor: "pointer" }}
                      src={CASINO}
                    />
                    <img
                      style={{ marginTop: "20px", cursor: "pointer" }}
                      src={SPORTS}
                    />
                    <img
                      style={{ marginTop: "20px", cursor: "pointer" }}
                      src={NFT}
                    />
                    <img
                      style={{ marginTop: "20px", cursor: "pointer" }}
                      src={FEATURES}
                    />
                    <img
                      style={{ marginTop: "20px", cursor: "pointer" }}
                      src={PORTFOLIO}
                    />
                    <img
                      style={{ marginTop: "20px", cursor: "pointer" }}
                      src={CLANS}
                    />
                    <img
                      style={{ marginTop: "20px", cursor: "pointer" }}
                      src={LOTTERY}
                    />
                    <img
                      style={{ marginTop: "20px", cursor: "pointer" }}
                      src={JACKPOT}
                    />
                    <img
                      style={{ marginTop: "20px", cursor: "pointer" }}
                      src={VIDEO}
                    />
                    <img
                      style={{ marginTop: "20px", cursor: "pointer" }}
                      src={AWARD}
                    />
                  </div>
                </>
              ) : (
                <>
                  <StyledComponent
                    className="w-64 flex flex-col flex-shrink-0 mr-14 overFlow"
                    style={{ background: "#1F2330" }}
                  >
                    <div className="m-5 ml-4">
                      <img src={BALANCE_IMG} alt="balance" />
                    </div>

                    <div className="w-38 flex justify-between items-center cursor-pointer">
                      <span className="text-gray-500 text-xs font-normal leading-4 flex mx-4">
                        PLAY AK GAMES
                      </span>

                      <img
                        onClick={() => setIsSideBar(false)}
                        src={ARROW_ICON}
                        alt="arrow"
                        style={{ marginRight: "30px", cursor: "pointer" }}
                      />
                    </div>

                    <div className="flex mt-5 cursor-pointer">
                      <div style={{ display: "flex", width: "170px" }}>
                        <img
                          src={CASINO}
                          alt="frame"
                          className="w-5 h-5 text-white ml-5"
                        />
                        <span className="text-white text-sm font-normal leading-5 ml-2">
                          Casino
                        </span>
                      </div>

                      <div className="ml-6">
                        <img src={DOWN_ARROW} alt="arrow" />
                      </div>
                    </div>

                    <div className="flex mt-5 cursor-pointer">
                      <div style={{ display: "flex", width: "170px" }}>
                        <img
                          src={SPORTS}
                          alt="frame"
                          className="w-5 h-5 text-white ml-5"
                        />
                        <span className="text-white text-sm font-normal leading-5 ml-2">
                          Sports
                        </span>
                      </div>

                      <div className="ml-6">
                        <img src={DOWN_ARROW} alt="arrow" />
                      </div>
                    </div>

                    <div className="flex mt-5 cursor-pointer">
                      <div style={{ display: "flex", width: "170px" }}>
                        <img
                          src={NFT}
                          alt="frame"
                          className="w-5 h-5 text-white ml-5"
                        />
                        <span className="text-white text-sm font-normal leading-5 ml-2">
                          NFT
                        </span>
                      </div>

                      <div className="ml-6">
                        <img src={DOWN_ARROW} alt="arrow" />
                      </div>
                    </div>

                    <div className="flex mt-5 cursor-pointer">
                      <div style={{ display: "flex", width: "170px" }}>
                        <img
                          src={FEATURES}
                          alt="frame"
                          className="w-5 h-5 text-white ml-5"
                        />
                        <span className="text-white text-sm font-normal leading-5 ml-2">
                          Crypto Features
                        </span>
                      </div>

                      <div className="ml-6">
                        <img src={DOWN_ARROW} alt="arrow" />
                      </div>
                    </div>

                    <div className="flex mt-5 cursor-pointer">
                      <div style={{ display: "flex", width: "170px" }}>
                        <img
                          src={PORTFOLIO}
                          alt="frame"
                          className="w-5 h-5 text-white ml-5"
                        />
                        <span className="text-white text-sm font-normal leading-5 ml-2">
                          Crypto Portfolio
                        </span>
                      </div>
                    </div>

                    <div className="flex mt-5 cursor-pointer">
                      <div style={{ display: "flex", width: "170px" }}>
                        <img
                          src={CLANS}
                          alt="frame"
                          className="w-5 h-5 text-white ml-5"
                        />
                        <span class=" text-white font-normal leading-5 ml-2">
                          Clans
                        </span>
                      </div>
                    </div>

                    <div>
                      <span
                        style={{
                          color: "#686D7B",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "14.4px",
                          display: "flex",
                          margin: "25px 17px",
                        }}
                      >
                        OTHER
                      </span>

                      <div>
                        <div>
                          <img
                            src={LOTTERY}
                            alt="lottery"
                            style={{
                              display: "inline-block",
                              marginLeft: "20px",
                              marginRight: "10px",
                            }}
                          />
                          <span
                            style={{
                              marginRight: "15px",
                              width: "87px",
                              color: "#fff",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "16.8px",
                            }}
                          >
                            AK Lottery
                          </span>
                          <span
                            style={{
                              width: "46px",
                              color: "#fff",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "16.8px",
                            }}
                          >
                            $5.03K
                          </span>
                          <span
                            style={{
                              marginLeft: "25px",
                              width: "14px",
                              color: "#B1B6C6",
                              fontSize: "11px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "13.2px ",
                            }}
                          >
                            64
                          </span>
                        </div>
                        <div>
                          <img
                            src={JACKPOT}
                            alt="lottery"
                            style={{
                              display: "inline-block",
                              marginLeft: "15px",
                              marginRight: "10px",
                              marginTop: "15px",
                              marginBottom: "15px",
                            }}
                          />
                          <span
                            style={{
                              marginRight: "15px",
                              marginLeft: "-3px",
                              width: "87px",
                              color: "#fff",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "16.8px",
                            }}
                          >
                            Jackpot
                          </span>
                          <span
                            style={{
                              width: "46px",
                              color: "#fff",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "16.8px",
                            }}
                          >
                            $31.2
                          </span>
                          <span
                            style={{
                              marginLeft: "50px",
                              width: "14px",
                              color: "#B1B6C6",
                              fontSize: "11px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "13.2px ",
                            }}
                          >
                            10
                          </span>
                        </div>
                        <div style={{ marginTop: "-5px" }}>
                          <img
                            src={VIDEO}
                            alt="lottery"
                            style={{
                              display: "inline-block",
                              marginLeft: "22px",
                              marginRight: "10px",
                            }}
                          />
                          <span
                            style={{
                              marginLeft: "3px",
                              width: "87px",
                              color: "#fff",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "16.8px",
                            }}
                          >
                            Streams
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span
                        style={{
                          color: "#686D7B",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "14.4px",
                          display: "flex",
                          margin: "25px 17px",
                        }}
                      >
                        EVENTS
                      </span>

                      <img
                        src={AWARD}
                        alt="lottery"
                        style={{
                          display: "inline-block",
                          marginLeft: "25px",
                          marginRight: "10px",
                        }}
                      />
                      <span
                        style={{
                          marginRight: "2px",
                          width: "87px",
                          color: "#fff",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "16.8px",
                        }}
                      >
                        $25K
                      </span>
                      <span
                        style={{
                          width: "46px",
                          color: "#fff",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "16.8px",
                        }}
                      >
                        Race
                      </span>
                      <span
                        style={{
                          marginLeft: "55px",
                          width: "14px",
                          color: "#B1B6C6",
                          fontSize: "11px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "13.2px ",
                        }}
                      >
                        09:01:04
                      </span>
                    </div>

                    {/* //coins buy options */}

                    <div className="w-64 h-36 flex-shrink-0 bg-blue-100 bg-opacity-10 mt-20">
                      <div>
                        <button className="inline-flex py-2 px-14 items-start gap-4 rounded-lg bg-blue-200 bg-opacity-20 text-white text-center text-sm font-normal leading-5 tracking-wider ml-6 mt-6 mb-6">
                          BUY CRYPTO
                        </button>

                        <div className="flex items-center gap-2 ml-4 mt-2 cursor-pointer">
                          <img src={VISA} alt="social" />
                          <img src={DEBIT} alt="social" />
                          <img src={PAY} alt="social" />
                          <img src={GOOGLE} alt="social" />
                        </div>
                      </div>
                    </div>
                  </StyledComponent>
                </>
              )}
            </div>

            <div style={{ marginLeft: isChatBox === false ? "100px" : "0px" }}>
              <MainHome update={isChatBox} />
            </div>

            {/* chat box */}
            {isChatBox ? (
              <>
                <div
                  style={{
                    position: "fixed",
                    left: "89.6pc",
                    top: "4.0pc",
                    background: "#1F2330",
                    width: "16.5pc",
                    height: "750px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        padding: "7px 10px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(203, 215, 255, 0.03)",
                        borderRadius: "6px",
                        margin: "10px 10px",
                      }}
                    >
                      <img
                        src={MSG}
                        alt="Chat"
                        style={{ height: "12px", width: "11px" }}
                      />
                      <p
                        style={{
                          width: "30px",
                          color: "#FFFFC1",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "14.4px",
                          textTransform: "uppercase",
                        }}
                      >
                        Chat
                      </p>
                    </div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <img
                        src={SWITCH}
                        alt="switch"
                        style={{ width: "9px", height: "14px" }}
                      />
                      <p
                        style={{
                          width: "46px",
                          color: "#B1B6C6",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "14.4px",
                          textTransform: "uppercase",
                        }}
                      >
                        Trades
                      </p>
                      <img
                        src={ARROW_DOWN}
                        alt="arrow"
                        style={{ width: "7px", height: "5px" }}
                      />

                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          marginLeft: "2.5pc",
                        }}
                      >
                        <img
                          src={COLLAPSE}
                          alt="collapse"
                          style={{
                            width: "22px",
                            height: "22px",
                            flexShrink: "0",
                          }}
                        />
                        <img
                          onClick={() => setIsChatBox(false)}
                          src={CROSS}
                          alt="cross"
                          style={{
                            width: "22px",
                            height: "22px",
                            flexShrink: "0",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>

                    {/* image part */}
                    <div
                      style={{
                        display: "inline-flex",
                        padding: "30px 50px",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "8px",
                        background: "rgba(15, 17, 26, 0.55)",
                        margin: "20px 13px",
                        width: "15pc",
                      }}
                    >
                      <p
                        style={{
                          color: "#B1B6C6",
                          fontSize: "15 px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "21.6px",
                          textTransform: "uppercase",
                        }}
                      >
                        No Messages Yet
                      </p>
                    </div>

                    {/* message input form */}
                    <input
                      type="text"
                      placeholder="Login to chat"
                      style={{
                        display: "flex",
                        width: "15pc",
                        padding: "8px 11px",
                        alignItems: "flex-start",
                        gap: "10px",
                        borderRadius: "6px",
                        background: "rgba(15, 17, 26, 0.55)",
                        margin: "29pc 13px",
                        color: "#fff",
                      }}
                    />

                    <div style={{ margin: "-27.5pc 18px" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "flex-start",
                          gap: "12px",
                        }}
                      >
                        <img
                          src={EMOJI}
                          alt="emoji"
                          style={{
                            width: "21px",
                            height: "20px",
                            flexShrink: "0",
                          }}
                        />
                        <img
                          src={SETTINGS}
                          alt="settings"
                          style={{
                            width: "13px",
                            height: "13px",
                            flexShrink: "0",
                          }}
                        />
                        <p
                          style={{
                            width: "37px",
                            color: "#B1B6C6",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "14.4px",
                            textTransform: "uppercase",
                          }}
                        >
                          Rules
                        </p>

                        <div
                          style={{
                            display: "flex",
                            gap: "6px",
                            alignItems: "center",
                            margin: "-5px 3.2pc",
                          }}
                        >
                          <p
                            style={{
                              width: "24px",
                              color: "#B1B6C6",
                              fontSize: "12px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "14.4px",
                              textTransform: "uppercase",
                            }}
                          >
                            200
                          </p>
                          <div
                            style={{
                              display: "inline-flex",
                              padding: "4px 8px",
                              alignItems: "flex-start",
                              gap: "10px",
                              borderRadius: "6px",
                              background: "#86F454",
                              boxShadow:
                                "0px 0px 10px 0px rgba(118, 255, 25, 0.40)",
                              cursor: "pointer",
                            }}
                          >
                            <p
                              style={{
                                color: "#141722",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "14.4px",
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                              }}
                            >
                              Send
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="https://t.me/casino_crafters" target="_blank">
                  <div
                    style={{
                      position: "fixed",
                      right: "17.1pc",
                      bottom: "0.6pc",
                      background: "#272B38",
                      borderRadius: "999px",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <img src={SUPPORT} alt="support" />
                  </div>
                </Link>
              </>
            ) : (
              <Link to="https://t.me/casino_crafters" target="_blank">
                <div
                  style={{
                    position: "fixed",
                    right: "1pc",
                    bottom: "0.8pc",
                    background: "#272B38",
                    borderRadius: "999px",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  <img src={SUPPORT} alt="support" />
                </div>
              </Link>
            )}
          </div>

          <UpdatedNavbar />
        </>
      )}

      {showM ? <System /> : null}
    </div>
  );
};

export default Home;
