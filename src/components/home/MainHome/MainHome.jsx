import React, { useState } from "react";
import styled from "styled-components";

//assets
import LOGO from "../../../assets/images/LOGO.svg";
import STEAM from "../../../assets/images/Frame (22).svg";
import TWITCH from "../../../assets/images/Frame (23).svg";
import METAMASK from "../../../assets/images/Frame (24).svg";
import ARROW_HOME from "../../../assets/images/IMAGE (1).png";
import DOT from "../../../assets/images/Rectangle.png";
import CART_IMG_1 from "../../../assets/images/IMAGE (2).png";
import CART_ICON_1 from "../../../assets/images/IMAGE (4).png";
import CART_ICON_2 from "../../../assets/images/IMAGE (10).png";
import CART_ICON_3 from "../../../assets/images/IMAGE (11).png";
import CART_ICON_4 from "../../../assets/images/IMAGE (12).png";
import CART_ICON_5 from "../../../assets/images/IMAGE (13).png";
import CART_IMG_2 from "../../../assets/images/IMAGE (5).png";
import CART_IMG_3 from "../../../assets/images/IMAGE (6).png";
import CART_IMG_4 from "../../../assets/images/IMAGE (8).png";
import CART_IMG_5 from "../../../assets/images/IMAGE (9).png";
import CASINO from "../../../assets/images/Frame (9).svg";
import ARROW_1 from "../../../assets/images/Frame (25).svg";
import ARROW_2 from "../../../assets/images/Frame (26).svg";
import CRYPTO from "../../../assets/images/Frame (12).svg";
import CASINO_IMG_1 from "../../../assets/images/IMAGE (14).png";
import CASINO_IMG_2 from "../../../assets/images/IMAGE (15).png";
import CASINO_IMG_3 from "../../../assets/images/IMAGE (16).png";
import CASINO_IMG_4 from "../../../assets/images/IMAGE (17).png";
import CASINO_IMG_5 from "../../../assets/images/IMAGE (18).png";
import CASINO_IMG_6 from "../../../assets/images/IMAGE (19).png";
import CRYPTO_IMG_1 from "../../../assets/images/IMAGE (21).png";
import CRYPTO_IMG_2 from "../../../assets/images/IMAGE (22).png";
import CRYPTO_IMG_3 from "../../../assets/images/IMAGE (23).png";
import CRYPTO_IMG_4 from "../../../assets/images/IMAGE (24).png";
import CRYPTO_IMG_5 from "../../../assets/images/IMAGE (25).png";
import CRYPTO_IMG_6 from "../../../assets/images/IMAGE (26).png";
import CRYPTO_IMG_7 from "../../../assets/images/IMAGE (27).png";
import BOUNUS from "../../../assets/images/Frame (27).svg";
import BOUNUS1 from "../../../assets/images/IMAGE (29).png";
import BOUNUS2 from "../../../assets/images/IMAGE (30).png";
import BOUNUS3 from "../../../assets/images/IMAGE (31).png";
import BONUSES from "../../../assets/images/Frame (29).svg";
import BONUSES_IMG_1 from "../../../assets/images/IMAGE (33).png";
import BONUSES_IMG_2 from "../../../assets/images/IMAGE (34).png";
import BONUSES_IMG_3 from "../../../assets/images/IMAGE (35).png";
import BONUSES_IMG_4 from "../../../assets/images/IMAGE (36).png";
import BONUSES_IMG_5 from "../../../assets/images/IMAGE (37).png";
import BONUSES_IMG_6 from "../../../assets/images/IMAGE (38).png";
import NFT from "../../../assets/images/IMAGE.svg";
import NFT_IMG_1 from "../../../assets/images/IMAGE (39).png";
import NFT_IMG_2 from "../../../assets/images/IMAGE (40).png";
import NFT_IMG_3 from "../../../assets/images/IMAGE (41).png";
import NFT_IMG_4 from "../../../assets/images/IMAGE (42).png";

//model images
import LOGO1 from "../../../assets/images/LOGO.png";
import CROSS from "../../../assets/images/icons8-cross-100.png";
import Image from "../../../assets/images/IMAGE.jpg";
import Login from "../../LoginAndRgister/Login";

//components
import Footer from "../footer/Footer";
import TableView from "./TableView";
import Register from "../../LoginAndRgister/Register";
import MessagesHome from "./MessagesHome";

//applying hover effects
const HoverableImage = styled.img`
  display: flex;
  width: 150px;
  height: 210px;
  flex-shrink: 0;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const Component = styled.div`
  //   width: 150px;
  height: 210px;
  flex-shrink: 0;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const Winner = styled.div`
  //   width: 150px;
  //   height: 210px;
  flex-shrink: 0;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const Boxes = styled.div`
  //   width: 150px;
  //   height: 210px;
  flex-shrink: 0;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const MainHome = ({ update }) => {
  const [showM, setshowM] = useState(false);
  const [navigateAcc, setnavigateAcc] = useState(true);

  const openRegisterModal = () => {
    setshowM(true);
    setnavigateAcc(false);
  };

  const System = () => {
    return (
      <>
        <div
          onClick={() => setshowM(false)}
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
                onClick={() => setnavigateAcc(true)}
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
                onClick={() => setnavigateAcc(false)}
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
              src={LOGO1}
              style={{ position: "absolute", top: "50px", right: "9pc" }}
              alt="profile"
            />
            <img
              onClick={() => setshowM(false)}
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

  // MAIN HOME STARTS -->

  return (
    <div>
      <div
        style={{
          width: "1050px",
          height: "380px",
          marginTop: "20px",
          flexShrink: 0,
          background:
            "url(https://s3-alpha-sig.figma.com/img/ee44/a13d/56ea78f972cbc02885c228c8cfbdb887?Expires=1694995200&Signature=SEdquI25tbrC8Y5N1YPKhvChUP6fQL4NvvVrus86qi4zUHV~Ewcztt0lDPIOsS6QWDBi-wbqVkkk-pe8dlgBKg9u4BrrExyUA2w1ToUwGFsH39A8p3CYDG54wwfqGwVNLzjzHTfwoA2H6yLFdzYxS8I4Xb3QIkcXgihYvGvj05dXiczUabs8J7XG5I7KxQKoU-3Zf44AhfqTbDkiwV79R~ee8pc9i7J8R2Ak9QVyhpskjc6R9tjP-16GYBpKpGMcDgLc~kNJALKgijSNU-qGxHFavlaqzGqOoeZ2qYUuqXz8ie5S2k-YMIq9Ft7ztnSZkZqIeLDLi8bIJAX95aJr2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
          backgroundPosition: "fit-content",
          backgroundRepeat: "no-repeat",
          borderRadius: "8px",
        }}
      >
        {/* main top section */}
        <div className="inline-flex flex-col items-center gap-6 p-8">
          <img src={LOGO} alt="logo" />
          <p
            style={{
              width: "368px",
              color: "#fff",
              textAlign: "center",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28.8px",
            }}
          >
            Experience true innovation with the highest rewards program within
            the industry.
          </p>

          <button
            onClick={() => openRegisterModal()}
            style={{
              display: "flex",
              padding: "13px 20px",
              width: "150px",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "8px",
              background: "#FFE81A",
              boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
              color: "#141722",
              textAlign: "center",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
              letterSpacing: "0.5px",
            }}
          >
            REGISTER NOW
          </button>

          <p
            style={{
              width: "73px",
              color: "#B1B6C6",
              textAlign: "center",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            Or join with
          </p>

          <div
            style={{
              display: "flex",
              padding: "11px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "11px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "8px",
                background: "#1F2330",
                cursor: "pointer",
              }}
            >
              <img
                src={STEAM}
                alt="join"
                style={{ width: "17px", height: "17px" }}
              />
              <p
                style={{
                  width: "46px",
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                  letterSpacing: "0.5px",
                }}
              >
                Steam
              </p>
            </div>
            <div
              style={{
                display: "flex",
                padding: "11px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "8px",
                background: "#1F2330",
                cursor: "pointer",
              }}
            >
              <img
                src={TWITCH}
                alt="join"
                style={{ width: "17px", height: "17px" }}
              />
              <p
                style={{
                  width: "46px",
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                  letterSpacing: "0.5px",
                }}
              >
                Twitch
              </p>
            </div>
            <div
              style={{
                display: "flex",
                padding: "11px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "8px",
                background: "#1F2330",
                cursor: "pointer",
              }}
            >
              <img
                src={METAMASK}
                alt="join"
                style={{ width: "17px", height: "17px" }}
              />
              <p
                style={{
                  width: "65px",
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                  letterSpacing: "0.5px",
                }}
              >
                Metamask
              </p>
            </div>
          </div>
        </div>

        {/* side text */}

        <div style={{ marginLeft: "45em", marginTop: "-50px" }}>
          <div style={{ width: "237px" }}>
            <p
              style={{
                color: "#FFF",
                textAlign: "center",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16.8px",
              }}
            >
              1000X LEVERAGE CRYPTO FUTURES
            </p>
          </div>
          <div
            style={{
              width: "266px",
            }}
          >
            <p
              style={{
                color: "#B1B6C6",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
              }}
            >
              Instant execution, 0% slippage, 0% fees on loss
            </p>
          </div>
        </div>
      </div>

      {/* Homepage main image area */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "24px",
          marginLeft: "60px",
          marginTop: "24px",
        }}
      >
        <div style={{ width: "293px", height: "56px", flexShrink: 0 }}>
          <img src={ARROW_HOME} alt="home" />
        </div>
        <div>
          <img src={ARROW_HOME} alt="home" />
        </div>
        <div>
          <img src={ARROW_HOME} alt="home" />
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "-900px" }}>
          <p
            style={{
              color: "#FFFFC1",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14px",
            }}
          >
            01
          </p>
          <span
            style={{
              color: "#B1B6C6",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14px",
            }}
          >
            Register Account
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "160px" }}>
          <p
            style={{
              color: "#FFFFC1",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14px",
            }}
          >
            02
          </p>
          <span
            style={{
              color: "#B1B6C6",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14px",
            }}
          >
            Make a Deposit and Play
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "115px" }}>
          <p
            style={{
              color: "#FFFFC1",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14px",
            }}
          >
            03
          </p>
          <span
            style={{
              color: "#B1B6C6",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14px",
            }}
          >
            Receive Rewards
          </span>
        </div>
      </div>

      {/* central area */}

      <div style={{ display: "flex", marginTop: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={DOT} alt="dot" style={{ width: "8px", height: "8px" }} />
          <span
            style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            LIVE WINS
          </span>
        </div>

        {/* parent div */}
        <div style={{ display: "flex", marginLeft: "12em" }}>
          <div
            style={{
              display: "flex",
              marginLeft: "40em",
              width: "40px",
              height: "23px",
              padding: "4px 9px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexShrink: "0",
              borderRadius: "4px",
              background: "rgba(203, 215, 255, 0.03)",
            }}
          >
            <button
              style={{
                color: "#FFF",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
              }}
            >
              Live
            </button>
          </div>
          <div
            style={{
              display: "flex",
              width: "38px",
              height: "23px",
              padding: "4px 2px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexShrink: "0",
            }}
          >
            <button
              style={{
                color: "#686D7B",
                marginLeft: "10px",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
              }}
            >
              Month
            </button>
          </div>

          <div
            style={{
              display: "flex",
              width: "38px",
              height: "23px",
              padding: "4px 2px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexShrink: "0",
            }}
          >
            <button
              style={{
                color: "#686D7B",
                textAlign: "center",
                marginLeft: "10px",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
              }}
            >
              Week
            </button>
          </div>

          <div
            style={{
              display: "flex",
              width: "38px",
              height: "23px",
              padding: "4px 2px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexShrink: "0",
            }}
          >
            <button
              style={{
                color: "#686D7B",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
              }}
            >
              Day
            </button>
          </div>
        </div>
      </div>

      {/* image area frame main */}
      <div style={{ display: "flex", gap: "10px", marginLeft: "-8px" }}>
        <Winner
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={CART_IMG_1}
              alt="cart"
              style={{ width: "130px", height: "130px", marginTop: "10px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src={CART_ICON_1}
                alt="cart"
                style={{ width: "18px", height: "15px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                Hidden
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
              }}
            >
              $320.00
            </p>
          </div>
        </Winner>

        <Winner
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={CART_IMG_2}
              alt="cart"
              style={{ width: "130px", height: "130px", marginTop: "10px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src={CART_ICON_2}
                alt="cart"
                style={{ width: "18px", height: "15px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                staymelo7
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
              }}
            >
              $161.06
            </p>
          </div>
        </Winner>

        <Winner
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={CART_IMG_1}
              alt="cart"
              style={{ width: "130px", height: "130px", marginTop: "10px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src={CART_ICON_4}
                alt="cart"
                style={{ width: "18px", height: "15px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                landice
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
              }}
            >
              $500.00
            </p>
          </div>
        </Winner>

        <Winner
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={CART_IMG_3}
              alt="cart"
              style={{ width: "130px", height: "130px", marginTop: "10px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src={CART_ICON_3}
                alt="cart"
                style={{ width: "18px", height: "15px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                QSharp
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
              }}
            >
              $521.96
            </p>
          </div>
        </Winner>

        <Winner
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={CART_IMG_2}
              alt="cart"
              style={{ width: "130px", height: "130px", marginTop: "10px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src={CART_ICON_2}
                alt="cart"
                style={{ width: "18px", height: "15px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                staymelo7
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
              }}
            >
              $161.06
            </p>
          </div>
        </Winner>

        <Winner
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={CART_IMG_4}
              alt="cart"
              style={{ width: "130px", height: "130px", marginTop: "10px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src={CART_ICON_3}
                alt="cart"
                style={{ width: "18px", height: "15px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                Hidden
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
              }}
            >
              $134.09
            </p>
          </div>
        </Winner>

        <Winner
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={CART_IMG_5}
              alt="cart"
              style={{ width: "130px", height: "130px", marginTop: "10px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src={CART_ICON_5}
                alt="cart"
                style={{ width: "18px", height: "15px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                Melody👀🎵
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
              }}
            >
              $29.30
            </p>
          </div>
        </Winner>
      </div>

      {/* image area frame main end */}

      {/* casino view */}
      <div
        style={{ display: "flex", marginTop: "36px", marginBottom: "-15px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={CASINO}
            alt="casino"
            style={{ width: "13px", height: "13px" }}
          />
          <span
            style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            CASINO
          </span>
          <span
            style={{
              color: "#FFB018",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            View All
          </span>
        </div>

        {/* parent div */}
        <div style={{ display: "flex", marginLeft: "12em" }}>
          <div
            style={{
              display: "flex",
              marginLeft: "35em",
              height: "22px",
              padding: "3px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexShrink: "0",
              borderRadius: "4px",
              background: "rgba(203, 215, 255, 0.03)",
            }}
          >
            <button
              style={{
                color: "#FFF",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
              }}
            >
              Recommended
            </button>
          </div>
          {/* icons */}
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
        </div>
      </div>

      {/* casino images */}
      <div style={{ display: "flex", width: "1122px", marginTop: "36px" }}>
        <div style={{ display: "flex", gap: "33px" }}>
          <HoverableImage src={CASINO_IMG_1} alt="casino" />

          <HoverableImage src={CASINO_IMG_2} alt="casino" />

          <HoverableImage src={CASINO_IMG_3} alt="casino" />

          <HoverableImage src={CASINO_IMG_4} alt="casino" />

          <HoverableImage src={CASINO_IMG_5} alt="casino" />

          <HoverableImage src={CASINO_IMG_6} alt="casino" />
        </div>
        {/* <div>
                    <img src={CASINO_IMG_7} alt="price" style={{ marginRight: '720px', marginTop: "180px" }} />

                </div>
                <div>
                    <img src={CASINO_IMG_8} alt="price" style={{ marginTop: "180px", marginRight: "170px" }} />
                </div> */}
      </div>

      {/* Crypto view */}
      <div style={{ display: "flex", marginTop: "55px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={CRYPTO}
            alt="casino"
            style={{ width: "13px", height: "13px" }}
          />
          <span
            style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            CRYPTO FEATURES
          </span>
          <span
            style={{
              color: "#FFB018",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            Trade
          </span>
        </div>

        {/* parent div */}
        <div style={{ display: "flex", marginLeft: "50em" }}>
          {/* icons */}
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
        </div>
      </div>

      {/* crypto features images */}

      <div style={{ display: "flex", gap: "18px", marginLeft: "-8px" }}>
        <Component style={{ padding: "20px 0" }}>
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "170px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={CRYPTO_IMG_1}
              alt="crypto"
              style={{ marginTop: "15px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                BTC
              </p>
            </div>
            <p
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
              }}
            >
              23,035.14
            </p>

            <p
              style={{
                color: "#FF4949",
                textAlign: "center",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
              }}
            >
              -3.33%
            </p>

            {/* container */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                background: "rgba(15, 17, 26, 0.40)",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "10px",
                  padding: "10px 12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "12px",
                }}
              >
                1000 x Leverage
              </p>
            </div>
          </div>
        </Component>

        <Component style={{ display: "flex", gap: "10px", marginLeft: "-8px" }}>
          <div
            style={{
              padding: "20px 0",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                width: "145px",
                height: "170px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(203, 215, 255, 0.03)",
                gap: "12px",
              }}
            >
              <img
                src={CRYPTO_IMG_2}
                alt="crypto"
                style={{ marginTop: "15px" }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  ETH
                </p>
              </div>
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                1,591.583
              </p>

              <p
                style={{
                  color: "#FF4949",
                  textAlign: "center",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                -3.23%
              </p>

              {/* container */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  background: "rgba(15, 17, 26, 0.40)",
                }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "10px",
                    padding: "10px 12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginTop: "-5px",
                    lineHeight: "12px",
                  }}
                >
                  1000 x Leverage
                </p>
              </div>
            </div>
          </div>
        </Component>

        <Component style={{ display: "flex", gap: "10px", marginLeft: "-8px" }}>
          <div
            style={{
              padding: "20px 0",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                width: "145px",
                height: "170px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(203, 215, 255, 0.03)",
                gap: "12px",
              }}
            >
              <img
                src={CRYPTO_IMG_3}
                alt="crypto"
                style={{ marginTop: "15px" }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  DOGE
                </p>
              </div>
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                0.080552
              </p>

              <p
                style={{
                  color: "#FF4949",
                  textAlign: "center",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                -4.29%
              </p>

              {/* container */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  background: "rgba(15, 17, 26, 0.40)",
                }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "10px",
                    padding: "10px 12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginTop: "-5px",
                    lineHeight: "12px",
                  }}
                >
                  1000 x Leverage
                </p>
              </div>
            </div>
          </div>
        </Component>

        <Component style={{ display: "flex", gap: "10px", marginLeft: "-8px" }}>
          <div
            style={{
              padding: "20px 0",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                width: "145px",
                height: "170px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(203, 215, 255, 0.03)",
                gap: "12px",
              }}
            >
              <img
                src={CRYPTO_IMG_4}
                alt="crypto"
                style={{ marginTop: "15px" }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  LTC
                </p>
              </div>
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                91.9767
              </p>

              <p
                style={{
                  color: "#FF4949",
                  textAlign: "center",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                -2.39%
              </p>

              {/* container */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  background: "rgba(15, 17, 26, 0.40)",
                }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "10px",
                    padding: "10px 12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginTop: "-5px",
                    lineHeight: "12px",
                  }}
                >
                  1000 x Leverage
                </p>
              </div>
            </div>
          </div>
        </Component>

        <Component style={{ display: "flex", gap: "10px", marginLeft: "-8px" }}>
          <div
            style={{
              padding: "20px 0",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                width: "145px",
                height: "170px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(203, 215, 255, 0.03)",
                gap: "12px",
              }}
            >
              <img
                src={CRYPTO_IMG_5}
                alt="crypto"
                style={{ marginTop: "15px" }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  BNB
                </p>
              </div>
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                300.485
              </p>

              <p
                style={{
                  color: "#FF4949",
                  textAlign: "center",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                -2.44%
              </p>

              {/* container */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  background: "rgba(15, 17, 26, 0.40)",
                }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "10px",
                    padding: "10px 12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginTop: "-5px",
                    lineHeight: "12px",
                  }}
                >
                  1000 x Leverage
                </p>
              </div>
            </div>
          </div>
        </Component>

        <Component style={{ display: "flex", gap: "10px", marginLeft: "-8px" }}>
          <div
            style={{
              padding: "20px 0",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                width: "145px",
                height: "170px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(203, 215, 255, 0.03)",
                gap: "12px",
              }}
            >
              <img
                src={CRYPTO_IMG_6}
                alt="crypto"
                style={{ marginTop: "15px" }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  XRP
                </p>
              </div>
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                0.374977
              </p>

              <p
                style={{
                  color: "#FF4949",
                  textAlign: "center",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                -3.11%
              </p>

              {/* container */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  background: "rgba(15, 17, 26, 0.40)",
                }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "10px",
                    padding: "10px 12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginTop: "-5px",
                    lineHeight: "12px",
                  }}
                >
                  1000 x Leverage
                </p>
              </div>
            </div>
          </div>
        </Component>

        <Component style={{ display: "flex", gap: "10px", marginLeft: "-8px" }}>
          <div
            style={{
              padding: "20px 0",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                width: "145px",
                height: "170px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(203, 215, 255, 0.03)",
                gap: "12px",
              }}
            >
              <img
                src={CRYPTO_IMG_7}
                alt="crypto"
                style={{ marginTop: "15px" }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  LINK
                </p>
              </div>
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                7.53857
              </p>

              <p
                style={{
                  color: "#FF4949",
                  textAlign: "center",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginTop: "-5px",
                  lineHeight: "14.4px",
                }}
              >
                -3.09%
              </p>

              {/* container */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  background: "rgba(15, 17, 26, 0.40)",
                }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "10px",
                    padding: "10px 12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    marginTop: "-5px",
                    lineHeight: "12px",
                  }}
                >
                  1000 x Leverage
                </p>
              </div>
            </div>
          </div>
        </Component>
      </div>

      {/* Bonus */}
      <div style={{ display: "flex", marginTop: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={BOUNUS}
            alt="casino"
            style={{ width: "13px", height: "13px" }}
          />
          <span
            style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            BONUS BATTLES
          </span>
          <span
            style={{
              color: "#FFB018",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            View All
          </span>
        </div>

        {/* parent div */}
        <div style={{ display: "flex", marginLeft: "50em" }}>
          {/* icons */}
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
        </div>
      </div>

      {/* Bonus images */}

      <div style={{ display: "flex", gap: "32px", marginLeft: "-8px" }}>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "190px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={BOUNUS2}
              alt="cart"
              style={{ width: "165px", height: "165px", marginTop: "10px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "12px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginLeft: "12px",
                }}
              >
                Bonus Buy{" "}
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  $10
                </span>
              </p>
            </div>
            <p
              style={{
                color: "#B1B6C6",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
                marginRight: "auto",
                marginLeft: "12px",
              }}
            >
              Players
              <span
                style={{
                  marginLeft: "103px",
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                2/5
              </span>
            </p>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "5px 33px",
                  width: "160px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                join battle{" "}
                <span
                  style={{
                    color: "#141722",
                    textAlign: "center",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "12px",
                  }}
                >
                  Open: 04:46
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "190px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={BOUNUS1}
              alt="cart"
              style={{ width: "165px", height: "165px", marginTop: "10px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "12px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginLeft: "12px",
                }}
              >
                Bonus Buy{" "}
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  $10
                </span>
              </p>
            </div>
            <p
              style={{
                color: "#B1B6C6",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
                marginRight: "auto",
                marginLeft: "12px",
              }}
            >
              Players
              <span
                style={{
                  marginLeft: "103px",
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                2/5
              </span>
            </p>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "5px 33px",
                  width: "160px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                join battle{" "}
                <span
                  style={{
                    color: "#141722",
                    textAlign: "center",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "12px",
                  }}
                >
                  Open: 04:46
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "190px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={BOUNUS1}
              alt="cart"
              style={{ width: "165px", height: "165px", marginTop: "10px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "12px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginLeft: "12px",
                }}
              >
                Bonus Buy{" "}
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  $10
                </span>
              </p>
            </div>
            <p
              style={{
                color: "#B1B6C6",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
                marginRight: "auto",
                marginLeft: "12px",
              }}
            >
              Players
              <span
                style={{
                  marginLeft: "103px",
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                2/5
              </span>
            </p>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "5px 33px",
                  width: "160px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                join battle{" "}
                <span
                  style={{
                    color: "#141722",
                    textAlign: "center",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "12px",
                  }}
                >
                  Open: 04:46
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "190px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={BOUNUS3}
              alt="cart"
              style={{ width: "165px", height: "165px", marginTop: "10px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "12px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginLeft: "12px",
                }}
              >
                Bonus Buy{" "}
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  $10
                </span>
              </p>
            </div>
            <p
              style={{
                color: "#B1B6C6",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
                marginRight: "auto",
                marginLeft: "12px",
              }}
            >
              Players
              <span
                style={{
                  marginLeft: "103px",
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                2/5
              </span>
            </p>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "5px 33px",
                  width: "160px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "rgba(203, 215, 255, 0.08)",
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                Unavailable{" "}
                <span
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "12px",
                  }}
                >
                  Started{" "}
                </span>
                <span
                  style={{
                    color: "#FF4949",
                    textAlign: "center",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "12px",
                    marginLeft: "15px",
                  }}
                >
                  Live{" "}
                  <img
                    src={DOT}
                    alt="dot"
                    style={{ marginLeft: "55px", marginTop: "-10px" }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "190px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <img
              src={BOUNUS3}
              alt="cart"
              style={{ width: "165px", height: "165px", marginTop: "10px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  fontSize: "12px",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginLeft: "12px",
                }}
              >
                Bonus Buy{" "}
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  $10
                </span>
              </p>
            </div>
            <p
              style={{
                color: "#B1B6C6",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "-5px",
                lineHeight: "14.4px",
                marginRight: "auto",
                marginLeft: "12px",
              }}
            >
              Players
              <span
                style={{
                  marginLeft: "103px",
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                2/5
              </span>
            </p>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "5px 33px",
                  width: "160px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "rgba(203, 215, 255, 0.08)",
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                Unavailable{" "}
                <span
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "12px",
                  }}
                >
                  Started{" "}
                </span>
                <span
                  style={{
                    color: "#FF4949",
                    textAlign: "center",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "12px",
                    marginLeft: "15px",
                  }}
                >
                  Live{" "}
                  <img
                    src={DOT}
                    alt="dot"
                    style={{ marginLeft: "55px", marginTop: "-10px" }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Bonuses */}

      <div
        style={{ display: "flex", marginTop: "36px", marginBottom: "-15px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={BONUSES}
            alt="casino"
            style={{ width: "13px", height: "13px" }}
          />
          <span
            style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            Daily Bonuses
          </span>
          <span
            style={{
              color: "#FFB018",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            My Rewards
          </span>
        </div>
      </div>

      <div style={{ display: "flex", marginLeft: "12em" }}>
        <div
          style={{
            display: "flex",
            marginLeft: "40em",
            width: "40px",
            height: "23px",
            padding: "4px 9px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: "0",
            borderRadius: "4px",
            background: "rgba(203, 215, 255, 0.03)",
          }}
        >
          <button
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14.4px",
            }}
          >
            Day
          </button>
        </div>
        <div
          style={{
            display: "flex",
            width: "38px",
            height: "23px",
            padding: "4px 2px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: "0",
          }}
        >
          <button
            style={{
              color: "#686D7B",
              marginLeft: "10px",
              textAlign: "center",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14.4px",
            }}
          >
            Week
          </button>
        </div>

        <div
          style={{
            display: "flex",
            width: "38px",
            height: "23px",
            padding: "4px 2px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: "0",
          }}
        >
          <button
            style={{
              color: "#686D7B",
              textAlign: "center",
              marginLeft: "10px",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14.4px",
            }}
          >
            Month
          </button>
        </div>

        <div
          style={{
            display: "flex",
            width: "38px",
            height: "23px",
            padding: "4px 2px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: "0",
          }}
        >
          <button
            style={{
              color: "#686D7B",
              textAlign: "center",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "14.4px",
            }}
          >
            All
          </button>
        </div>

        <div style={{ display: "flex", marginLeft: "-2px" }}>
          {/* icons */}
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
        </div>
      </div>

      {/* Daily bonuses images */}
      <div style={{ display: "flex", gap: "10px", marginLeft: "-4px" }}>
        <Boxes style={{ padding: "20px 0" }}>
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "130px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
                padding: "22px 33px",
              }}
            >
              <img
                src={BONUSES_IMG_1}
                alt="cart"
                style={{ width: "28px", height: "28px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                Hidden
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                marginTop: "-20px",
              }}
            >
              $11,393.27
            </p>
          </div>
        </Boxes>

        <Boxes
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "130px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
                padding: "22px 33px",
              }}
            >
              <img
                src={BONUSES_IMG_2}
                alt="cart"
                style={{ width: "28px", height: "28px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                Aj9
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                marginTop: "-20px",
              }}
            >
              $11,393.27
            </p>
          </div>
        </Boxes>

        <Boxes
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "130px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
                padding: "22px 33px",
              }}
            >
              <img
                src={BONUSES_IMG_3}
                alt="cart"
                style={{ width: "28px", height: "28px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                hellomotto
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                marginTop: "-20px",
              }}
            >
              $11,393.27
            </p>
          </div>
        </Boxes>

        <Boxes
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "130px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
                padding: "22px 33px",
              }}
            >
              <img
                src={BONUSES_IMG_4}
                alt="cart"
                style={{ width: "28px", height: "28px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                theoneforus
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                marginTop: "-20px",
              }}
            >
              $11,393.27
            </p>
          </div>
        </Boxes>

        <Boxes
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "130px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
                padding: "22px 33px",
              }}
            >
              <img
                src={BONUSES_IMG_5}
                alt="cart"
                style={{ width: "28px", height: "28px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                Hidden
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                marginTop: "-20px",
              }}
            >
              $11,393.27
            </p>
          </div>
        </Boxes>
        <Boxes
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "130px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
                padding: "22px 33px",
              }}
            >
              <img
                src={BONUSES_IMG_5}
                alt="cart"
                style={{ width: "28px", height: "28px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                Phil9077
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                marginTop: "-20px",
              }}
            >
              $11,393.27
            </p>
          </div>
        </Boxes>
        <Boxes
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "145px",
              height: "130px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
                padding: "22px 33px",
              }}
            >
              <img
                src={BONUSES_IMG_6}
                alt="cart"
                style={{ width: "28px", height: "28px" }}
              />
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                }}
              >
                hiddenbigman
              </p>
            </div>
            <p
              style={{
                color: "#72F238",
                textAlign: "center",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                marginTop: "-20px",
              }}
            >
              $11,393.27
            </p>
          </div>
        </Boxes>
      </div>

      {/* NFT LOOT BOXES */}
      <div style={{ display: "flex", marginTop: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={BOUNUS}
            alt="casino"
            style={{ width: "13px", height: "13px" }}
          />
          <span
            style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            NFT Lootboxes
          </span>
          <span
            style={{
              color: "#FFB018",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            View All
          </span>
        </div>
        {/* NFT LOOT BOXES ARROW */}
        <div style={{ display: "flex", marginLeft: "52em" }}>
          {/* icons */}
          <div style={{ display: "flex", gap: "6px" }}>
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
        </div>
      </div>

      {/* NFT IMAGES VIEW */}
      <div style={{ display: "flex", gap: "10px", marginLeft: "-8px" }}>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "210px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#FFFFC1",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "80px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginTop: "15px",
                }}
              >
                Golden Grizzly
              </p>
              <span
                style={{
                  color: "#B1B6C6",
                  display: "flex",
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "5px",
                  marginRight: "85px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "10px",
                }}
              >
                AKbots <p>$5.88K</p>
              </span>
            </div>

            <img
              src={NFT_IMG_1}
              alt="cart"
              style={{ width: "183px", height: "183px", marginTop: "5px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  display: "flex",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "5px",
                  marginLeft: "15px",
                }}
              >
                <img
                  src={NFT}
                  alt="cart"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                AKbot
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  7Items
                </span>
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "11px 40px",
                  width: "190px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                OPEN FOR $20
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "210px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#FFFFC1",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "80px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginTop: "15px",
                }}
              >
                Golden Grizzly
              </p>
              <span
                style={{
                  color: "#B1B6C6",
                  display: "flex",
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "5px",
                  marginRight: "85px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "10px",
                }}
              >
                AKbots <p>$5.88K</p>
              </span>
            </div>

            <img
              src={NFT_IMG_2}
              alt="cart"
              style={{ width: "183px", height: "183px", marginTop: "5px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  display: "flex",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "5px",
                  marginLeft: "15px",
                }}
              >
                <img
                  src={NFT}
                  alt="cart"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                AKbot
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  7Items
                </span>
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "11px 40px",
                  width: "190px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                OPEN FOR $20
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "210px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#FFFFC1",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "80px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginTop: "15px",
                }}
              >
                Golden Grizzly
              </p>
              <span
                style={{
                  color: "#B1B6C6",
                  display: "flex",
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "5px",
                  marginLeft: "32px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "10px",
                  width: "200px",
                }}
              >
                Sports AKbots <p>$9.88K</p>
              </span>
            </div>

            <img
              src={NFT_IMG_2}
              alt="cart"
              style={{ width: "183px", height: "183px", marginTop: "5px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  display: "flex",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "5px",
                  marginLeft: "15px",
                }}
              >
                <img
                  src={NFT}
                  alt="cart"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                AKbot
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  2Items
                </span>
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "11px 40px",
                  width: "190px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                OPEN FOR $35.6
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "210px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#FFFFC1",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginTop: "15px",
                  width: "191px",
                }}
              >
                Bored Ape Yacht Club #4848
              </p>
              <span
                style={{
                  color: "#B1B6C6",
                  display: "flex",
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "5px",
                  marginLeft: "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "10px",
                  width: "190px",
                }}
              >
                Bored Ape Yacht Club <p>$490</p>
              </span>
            </div>

            <img
              src={NFT_IMG_3}
              alt="cart"
              style={{ width: "183px", height: "183px", marginTop: "5px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  display: "flex",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "5px",
                  marginLeft: "15px",
                }}
              >
                <img
                  src={NFT}
                  alt="cart"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                AKbot
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  3Items
                </span>
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "11px 40px",
                  width: "190px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                OPEN FOR $20
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px 0",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              width: "210px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(203, 215, 255, 0.03)",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#FFFFC1",
                  textAlign: "center",
                  fontSize: "14px",
                  marginRight: "5px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  marginTop: "15px",
                  width: "173px",
                }}
              >
                POLITICS IS BULLSHIT #34
              </p>
              <span
                style={{
                  color: "#B1B6C6",
                  display: "flex",
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "5px",
                  marginRight: "85px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "10px",
                }}
              >
                AKbots <p>$700K</p>
              </span>
            </div>

            <img
              src={NFT_IMG_4}
              alt="cart"
              style={{ width: "183px", height: "183px", marginTop: "5px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  display: "flex",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  gap: "5px",
                  marginLeft: "15px",
                }}
              >
                <img
                  src={NFT}
                  alt="cart"
                  style={{ width: "18px", height: "18px" }}
                />{" "}
                AKbot
                <span
                  style={{
                    marginLeft: "80px",
                    color: "#B1B6C6",
                    textAlign: "center",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                  }}
                >
                  7Items
                </span>
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  padding: "11px 40px",
                  width: "190px",
                  height: "40px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                OPEN FOR $99
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* main parent div end */}

      {/* table view */}
      <TableView />

      {/* footer */}
      <Footer update={update} />
      {showM ? <System /> : null}
    </div>

    // MAIN HOME ENDS <--
  );
};

export default MainHome;
