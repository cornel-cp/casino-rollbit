import React, { useState } from "react";
import Register from "../../LoginAndRgister/Register";

//model images
import Image from "../../../assets/images/IMAGE.jpg";
import LOGO1 from "../../../assets/images/LOGO.png";
import CROSS from "../../../assets/images/icons8-cross-100.png";
import Login from "../../LoginAndRgister/Login";
import Modal from "../../Modals/Modal";
import { StyledRegisterModal } from "./StyledRegisterModal";

const RegisterModal = ({ buttonText, modalOption }) => {
  const [showModal, setShowModal] = useState(false);
  const [openedModal, setOpenedModal] = useState(modalOption);

  const openRegisterModal = (option) => {
    setShowModal(true);
    setOpenedModal(option);
  };

  return (
    <StyledRegisterModal>
      {modalOption === "login" ? (
        <button
          onClick={() => openRegisterModal("login")}
          className="text-white w-11 text-sm font-normal leading-5 tracking-wider mr-5 uppercase"
        >
          {buttonText ?? modalOption}
        </button>
      ) : (
        <button
          onClick={() => openRegisterModal("register")}
          className="register-button uppercase"
        >
          {buttonText ?? modalOption}
        </button>
      )}

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <StyledRegisterModal>
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
              height: "auto",
              width: "55pc",
              borderRadius: "10px",
            }}
          >
            <div style={{ padding: "24px" }}>
              <div style={{ marginBottom: "24px" }}>
                <div
                  onClick={() => setOpenedModal("login")}
                  style={{
                    marginRight: "15px",
                    cursor: "pointer",
                    borderRadius: "8px",
                    background:
                      openedModal === "login"
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
                      color: openedModal === "login" ? "#FFFFC1" : "#B1B6C6",
                      cursor: "pointer",
                      padding: "11px 16px",
                      fontWeight: "bolder",
                    }}
                  >
                    LOGIN
                  </span>
                </div>
                <div
                  onClick={() => setOpenedModal("register")}
                  style={{
                    borderRadius: "8px",
                    background:
                      openedModal === "login"
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
                      color: openedModal === "login" ? "#B1B6C6" : "#FFFFC1",
                      cursor: "pointer",
                      padding: "11px 16px",
                      fontWeight: "bolder",
                    }}
                  >
                    REGISTER
                  </span>
                </div>
              </div>
              {openedModal === "login" ? <Login /> : <Register />}
            </div>

            <div style={{}}>
              <img
                src={LOGO1}
                style={{ position: "absolute", top: "50px", right: "9pc" }}
                alt="profile"
              />
              <img
                onClick={() => setShowModal(false)}
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
                  height: "100%",
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
        </StyledRegisterModal>
      </Modal>
    </StyledRegisterModal>
  );
};

export default RegisterModal;
