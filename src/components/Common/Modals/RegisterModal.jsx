import React, { useState } from "react";
import Login from "../../LoginAndRgister/Login";
import Register from "../../LoginAndRgister/Register";

//model images
import Image from "../../../assets/images/IMAGE.jpg";
import LOGO1 from "../../../assets/images/LOGO.png";
import CROSS from "../../../assets/images/icons8-cross-100.png";
import { StyledRegisterModal } from "./StyledRegisterModal";

const RegisterModal = ({ buttonText }) => {
  const [showM, setshowM] = useState(false);
  const [navigateAcc, setnavigateAcc] = useState(true);

  const openRegisterModal = () => {
    setshowM(true);
    setnavigateAcc(false);
  };

  return (
    <StyledRegisterModal>
      <button onClick={() => openRegisterModal()} className="register-button">
        {buttonText}
      </button>

      {showM && (
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
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  old and have read the{" "}
                  <span style={{ cursor: "pointer" }}>Term & Conditions.</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </StyledRegisterModal>
  );
};

export default RegisterModal;
