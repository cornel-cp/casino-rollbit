import React from "react";
import { Link } from "react-router-dom";

// assest

import { ReactComponent as STEAM } from "../../../assets/images/Frame (22).svg";
import { ReactComponent as TWITCH } from "../../../assets/images/Frame (23).svg";
import { ReactComponent as USER_COLORED } from "../../../assets/images/Frame (44).svg";
import { ReactComponent as FLOW } from "../../../assets/images/Frame (49).svg";
import { ReactComponent as BUGER } from "../../../assets/images/Frame (50).svg";
import { ReactComponent as GEAR } from "../../../assets/images/Frame (51).svg";
import { ReactComponent as OUT } from "../../../assets/images/Frame (52).svg";
import { ReactComponent as MONEY } from "../../../assets/images/Frame (53).svg";
import { ReactComponent as INFO } from "../../../assets/images/Frame (54).svg";
import { ReactComponent as USER } from "../../../assets/images/Frame (58).svg";

const Profile = () => {
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
              <USER_COLORED
                style={{ width: "19px", height: "19px", color: "#b1b6c6" }}
              />{" "}
              <span
                style={{
                  color: "#FFFFC1",
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
              <MONEY
                style={{ width: "19px", height: "19px", color: "#b1b6c6" }}
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
              <FLOW
                style={{ width: "19px", height: "19px", color: "#b1b6c6" }}
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
              <BUGER
                style={{ width: "19px", height: "19px", color: "#b1b6c6" }}
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
              <BUGER
                style={{ width: "19px", height: "19px", color: "#b1b6c6" }}
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
              <GEAR
                style={{ width: "19px", height: "19px", color: "#b1b6c6" }}
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
              <OUT
                style={{ width: "19px", height: "19px", color: "#b1b6c6" }}
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

      {/* NEXT PART======================= */}

      <div>
        <div style={{ margin: "35px 2pc" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <USER
              style={{
                width: "18px",
                height: "18px",
                marginTop: "5px",
                color: "#b1b6c6",
              }}
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
              Profile
            </p>
          </div>

          <p
            style={{
              textTransform: "uppercase",
              color: "#FFF",
              fontSize: "18px",
              fontStyle: "normal",
              margin: "35px 0px",
              fontWeight: "400",
              lineHeight: "21.6px",
            }}
          >
            change username
          </p>

          <p
            style={{
              textTransform: "uppercase",
              color: "#B1B6C6",
              fontSize: "12px",
              fontStyle: "normal",
              margin: "35px 0px",
              fontWeight: "400",
              lineHeight: "14.4px",
            }}
          >
            NEW username <span style={{ color: "#FF4949" }}>*</span>
          </p>

          {/* input sec=========================== */}

          <div style={{ display: "flex", margin: "-10px 0px" }}>
            <input
              style={{
                width: "600px",
                padding: "10px 12px",
                alignItems: "flex-end",
                gap: "10px",
                borderRadius: "6px",
                background: "rgba(15, 17, 26, 0.55)",
                color: "#fff",
              }}
              type="text"
            />

            <button
              style={{
                background: "#FFE81A",
                marginLeft: "20px",
                padding: "10px 14px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "6px",
                boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
              }}
            >
              CHANGE NAME
            </button>
          </div>

          {/* button sec============================ */}

          <div style={{ marginTop: "40px", display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  width: "33px",
                  height: "20px",
                  padding: "4px 0",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "99px",
                  background: "#B1B6C6",
                }}
              >
                {" "}
                <div
                  style={{
                    borderRadius: "99px",
                    margin: "0 1px",
                    width: "12px",
                    height: "12px",
                    background: "#10121B",
                  }}
                ></div>{" "}
              </div>

              <p
                style={{
                  color: "#B1B6C6",
                  fontSize: "14px",
                  fontStyle: "normal",
                  margin: "-19px 50px",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                {" "}
                Use profile linked AKbot as chat lottery avatar{" "}
              </p>

              {/* button sec 2===================== */}
              <div style={{ marginTop: "45px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "33px",
                    height: "20px",
                    padding: "4px 0",
                    alignItems: "flex-start",
                    gap: "10px",
                    borderRadius: "99px",
                    background: "#B1B6C6",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "99px",
                      margin: "0 1px",
                      width: "12px",
                      height: "12px",
                      background: "#10121B",
                    }}
                  ></div>
                </div>
                <p
                  style={{
                    color: "#B1B6C6",
                    fontSize: "14px",
                    fontStyle: "normal",
                    margin: "-19px 50px",
                    fontWeight: "400",
                    lineHeight: "16.8px",
                  }}
                >
                  Private Profile
                </p>
                <INFO
                  style={{
                    width: "15px",
                    height: "15px",
                    margin: "3px 9.4pc",
                    color: "#b1b6c6",
                  }}
                />
              </div>

              {/* Link accounts*************** */}
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    fontStyle: "normal",
                    margin: "35px 0",
                    fontWeight: "400",
                    lineHeight: "21.6px",
                    textTransform: "uppercase",
                  }}
                >
                  Link account
                </p>

                <div
                  style={{
                    display: "flex",
                    margin: "5.5pc -7.8pc",
                    gap: "15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "14px 36px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "8px",
                      background: "#1F2330",
                    }}
                  >
                    <STEAM
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#b1b6c6",
                      }}
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
                        textTransform: "uppercase",
                      }}
                    >
                      Steam
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "14px 33px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "8px",
                      background: "#1F2330",
                    }}
                  >
                    <TWITCH
                      style={{
                        width: "19px",
                        height: "20px",
                        color: "#b1b6c6",
                      }}
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
                        textTransform: "uppercase",
                      }}
                    >
                      Twitch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
