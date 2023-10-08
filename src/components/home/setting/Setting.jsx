import React from "react";

//assets
import { Link } from "react-router-dom";
import FLOW from "../../../assets/images/Frame (49).svg";
import BUGER from "../../../assets/images/Frame (50).svg";
import GEAR from "../../../assets/images/Frame (51).svg";
import OUT from "../../../assets/images/Frame (52).svg";
import MONEY from "../../../assets/images/Frame (53).svg";
import USER from "../../../assets/images/Frame (58).svg";
import GEAR_COLORED from "../../../assets/images/Frame (59).svg";

const Setting = () => {
  return (
    <div style={{ margin: "0px 20px", display: "flex" }}>
      {/* sidebars */}
      <div style={{ padding: "30px 0" }}>
        <Link to="/profile">
          <div
            style={{
              display: "flex",
              margin: "8px 0",
              width: "165px",
              padding: "10px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "40px",
              borderRadius: "8px",
              background: "rgba(203, 215, 255, 0.03)",
            }}
          >
            <p style={{ display: "flex" }}>
              <img
                src={USER}
                alt="user"
                style={{ width: "19px", height: "19px" }}
              />{" "}
              <span
                style={{
                  color: "#FFF",
                  fontSize: "14px",
                  margin: "0 15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Profile
              </span>
            </p>
          </div>
        </Link>

        <Link to="/balances">
          <div
            style={{
              display: "flex",
              margin: "8px 0",
              width: "165px",
              padding: "10px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "8px",
              background: "rgba(203, 215, 255, 0.03)",
            }}
          >
            <p style={{ display: "flex" }}>
              <img
                src={MONEY}
                alt="money"
                style={{ width: "19px", height: "19px" }}
              />{" "}
              <span
                style={{
                  color: "#FFF",
                  fontSize: "14px",
                  margin: "0 15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Balances
              </span>
            </p>
          </div>
        </Link>

        <Link to="/referrals">
          <div
            style={{
              display: "flex",
              margin: "8px 0",
              width: "165px",
              padding: "10px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "8px",
              background: "rgba(203, 215, 255, 0.03)",
            }}
          >
            <p style={{ display: "flex" }}>
              <img
                src={FLOW}
                alt="flow"
                style={{ width: "19px", height: "19px" }}
              />{" "}
              <span
                style={{
                  color: "#FFF",
                  fontSize: "14px",
                  fontStyle: "normal",
                  margin: "0 15px",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Referrals
              </span>
            </p>
          </div>
        </Link>

        <Link>
          <div
            style={{
              display: "flex",
              margin: "8px 0",
              width: "165px",
              padding: "10px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "8px",
              background: "rgba(203, 215, 255, 0.03)",
            }}
          >
            <p style={{ display: "flex" }}>
              <img
                src={BUGER}
                alt="burger"
                style={{ width: "19px", height: "19px" }}
              />{" "}
              <span
                style={{
                  color: "#FFF",
                  fontSize: "14px",
                  fontStyle: "normal",
                  margin: "0 15px",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Deposits
              </span>
            </p>
          </div>
        </Link>

        <Link>
          <div
            style={{
              display: "flex",
              margin: "8px 0",
              width: "165px",
              padding: "10px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "8px",
              background: "rgba(203, 215, 255, 0.03)",
            }}
          >
            <p style={{ display: "flex" }}>
              <img
                src={BUGER}
                alt="burger"
                style={{ width: "19px", height: "19px" }}
              />{" "}
              <span
                style={{
                  color: "#FFF",
                  fontSize: "14px",
                  fontStyle: "normal",
                  margin: "0 15px",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Withdrawals
              </span>
            </p>
          </div>
        </Link>

        <Link to="/settings">
          <div
            style={{
              display: "flex",
              margin: "8px 0",
              width: "165px",
              padding: "10px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "8px",
              background: "rgba(203, 215, 255, 0.03)",
            }}
          >
            <p style={{ display: "flex" }}>
              <img
                src={GEAR_COLORED}
                alt="gear"
                style={{ width: "19px", height: "19px" }}
              />{" "}
              <span
                style={{
                  color: "#FFFFC1",
                  fontSize: "14px",
                  fontStyle: "normal",
                  margin: "0 15px",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Settings
              </span>
            </p>
          </div>
        </Link>

        <Link>
          <div
            style={{
              display: "flex",
              margin: "8px 0",
              width: "165px",
              padding: "10px 16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "8px",
              background: "rgba(203, 215, 255, 0.03)",
            }}
          >
            <p style={{ display: "flex" }}>
              <img
                src={OUT}
                alt="out"
                style={{ width: "19px", height: "19px" }}
              />{" "}
              <span
                style={{
                  color: "#FFF",
                  fontSize: "14px",
                  fontStyle: "normal",
                  margin: "0 15px",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Log Out
              </span>
            </p>
          </div>
        </Link>
      </div>

      {/* SETTINGS TITLE */}
      <div>
        <div style={{ margin: "35px 2pc" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <img
              src={GEAR}
              alt="gear"
              style={{ width: "18px", height: "18px", marginTop: "5px" }}
            />
            <p
              style={{
                width: "122px",
                color: "#fff",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "26.4px",
                textTransform: "uppercase",
              }}
            >
              Settings
            </p>
          </div>

          {/* CHANGE EMAIL/ NEW EMAIL */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                margin: "2pc 0",
              }}
            >
              <p
                style={{
                  width: "126px",
                  color: "#fff",
                  fontSize: "17px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21.6px",
                  textTransform: "uppercase",
                }}
              >
                Change email
              </p>
              <div
                style={{
                  display: "flex",
                  padding: "6px 8px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "4px",
                  background: "rgba(203, 215, 255, 0.08)",
                }}
              >
                <p
                  style={{
                    color: "#B1B6C6",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Show Current Email
                </p>
              </div>
            </div>

            {/* input field */}
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    width: "100px",
                    color: "#B1B6C6",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                    textTransform: "uppercase",
                  }}
                >
                  New Email
                  <span
                    style={{
                      width: "9px",
                      color: "#FF4949",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "14.4px",
                      textTransform: "uppercase",
                    }}
                  >
                    *
                  </span>
                </p>

                <input
                  type="text"
                  style={{
                    color: "#fff",
                    display: "flex",
                    width: "600px",
                    padding: "0.7pc 12px",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "10px",
                    borderRadius: "6px",
                    background: "rgba(15, 17, 26, 0.55)",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "13px 14px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "6px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                  margin: "1.8pc 0",
                }}
              >
                <p
                  style={{
                    color: "#141722",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "15.6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Change Email
                </p>
              </div>
            </div>
          </div>

          {/* VERIFY EMAIL/ STATUS*/}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "23px",
              margin: "0.5pc 0",
            }}
          >
            <div>
              <p
                style={{
                  width: "168px",
                  color: "#fff",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21.6px",
                  textTransform: "uppercase",
                }}
              >
                Verify your email
              </p>
            </div>
            <div>
              <p
                style={{
                  width: "100px",
                  color: "#B1B6C6",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Status:{" "}
                <span
                  style={{
                    width: "51px",
                    color: "#72F238",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "16.8px",
                  }}
                >
                  Verified
                </span>
              </p>
            </div>
          </div>

          {/* PASSWORD */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "25px",
              margin: "3pc 0",
            }}
          >
            <div>
              <p
                style={{
                  width: "168px",
                  color: "#fff",
                  fontSize: "17px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21.6px",
                  textTransform: "uppercase",
                }}
              >
                Change password
              </p>
            </div>
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    width: "100px",
                    color: "#B1B6C6",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                    textTransform: "uppercase",
                  }}
                >
                  Old Password{" "}
                  <span
                    style={{
                      width: "9px",
                      color: "#FF4949",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "14.4px",
                      textTransform: "uppercase",
                    }}
                  >
                    *
                  </span>
                </p>

                <input
                  type="text"
                  style={{
                    color: "#fff",
                    display: "flex",
                    width: "600px",
                    padding: "0.7pc 12px",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "10px",
                    borderRadius: "6px",
                    background: "rgba(15, 17, 26, 0.55)",
                  }}
                />
              </div>
            </div>
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    width: "150px",
                    color: "#B1B6C6",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "14.4px",
                    textTransform: "uppercase",
                  }}
                >
                  New Password{" "}
                  <span
                    style={{
                      width: "9px",
                      color: "#FF4949",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "14.4px",
                      textTransform: "uppercase",
                    }}
                  >
                    *
                  </span>
                </p>

                <input
                  type="text"
                  style={{
                    color: "#fff",
                    display: "flex",
                    width: "600px",
                    padding: "0.7pc 12px",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "10px",
                    borderRadius: "6px",
                    background: "rgba(15, 17, 26, 0.55)",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "11px 20px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "6px",
                background: "#FFE81A",
                boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
              }}
            >
              <p
                style={{
                  color: "#141722",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Change Password
              </p>
            </div>
          </div>

          {/* 2FA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "26px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "11px" }}
            >
              <p
                style={{
                  width: "268px",
                  color: "#fff",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21.6px",
                  textTransform: "uppercase",
                }}
              >
                Two-factor Authentication
              </p>
              <p
                style={{
                  width: "85px",
                  color: "#676D7C",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21.6px",
                  textTransform: "uppercase",
                }}
              >
                Disabled
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "13px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                }}
              >
                <p
                  style={{
                    width: "785px",
                    color: "#B1B6C6",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22.4px",
                  }}
                >
                  Using two-factor authentication is highly recommended because
                  it protects your account with both your password and your
                  phone.
                </p>
                <p
                  style={{
                    width: "389px",
                    color: "#B1B6C6",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22.4px",
                  }}
                >
                  While 2FA is enabled, you will not be able to login via Steam.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                padding: "10px 20px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "8px",
                background: "#FFE81A",
                boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
              }}
            >
              <p
                style={{
                  color: "#141722",
                  textAlign: "center",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                Enable 2FA
              </p>
            </div>
          </div>

          {/* VERIFY IDENTITY */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              margin: "2.5pc 0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              <p
                style={{
                  width: "247px",
                  color: "#fff",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21.6px",
                  textTransform: "uppercase",
                }}
              >
                Verify your identity (KYC)
              </p>

              <div
                style={{
                  width: "90px",
                  display: "flex",
                  padding: "11px 20px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "#FFE81A",
                  boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "#141722",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "16.8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Verify
                </p>
              </div>
            </div>
          </div>

          {/* LOGIN HISTORY */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              margin: "2.5pc 0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              <p
                style={{
                  width: "131px",
                  color: "#fff",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21.6px",
                  textTransform: "uppercase",
                }}
              >
                Login History
              </p>

              <div
                style={{
                  display: "flex",
                  padding: "6px 14px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "6px",
                  background: "rgba(203, 215, 255, 0.08)",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "#B1B6C6",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "15.6px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Show Login History
                </p>
              </div>
            </div>
          </div>

          {/* TIPS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              margin: "2.5pc 0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              <p
                style={{
                  width: "39px",
                  color: "#fff",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "21.6px",
                  textTransform: "uppercase",
                }}
              >
                Tips
              </p>

              <div
                style={{
                  display: "flex",
                  padding: "6px 14px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "6px",
                  background: "rgba(203, 215, 255, 0.08)",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "#B1B6C6",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "15.6px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Show Tips
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
