import React from "react";

//assets
import Logo from "../../assets/images/LOGO.png";
import Image from "../../assets/images/IMAGE.jpg";
import TringleButton from "../../assets/images/Vector.png";
import STEAM from "../../assets/images/Frame (22).svg";
import TWITCH from "../../assets/images/Frame (23).svg";
import Metamask from "../../assets/images/Frame (2).png";

const Register = () => {
  return (
    <>
      <div style={{ marginTop: "20px", marginLeft: "24px" }}>
        <div>
          <div>
            <text
              style={{
                color: "#B1B6C6",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "bolda",
                lineHeight: "14.4px",
                textTransform: "uppercase",
                fontWeight: "bolder",
              }}
            >
              Username
            </text>

            <text
              style={{
                color: "#FF4949",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                textTransform: "uppercase",
                fontWeight: "bolder",
              }}
            >
              *
            </text>
          </div>

          <input
            style={{
              color: "#fff",
              backgroundColor: "rgba(15, 17, 26, 0.55)",
              width: "400px",
              height: "40px",
              paddingLeft: "15px",
              borderRadius: "10px",
              marginTop: "11px",
            }}
          />
          <div style={{ marginTop: "15px" }}>
            <text
              style={{
                color: "#B1B6C6",
                fontSize: "12px",

                fontStyle: "normal",
                fontWeight: "bolda",
                lineHeight: "14.4px",
                textTransform: "uppercase",
                fontWeight: "bolder",
              }}
            >
              EMAIL
            </text>

            <text
              style={{
                color: "#FF4949",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                textTransform: "uppercase",
                fontWeight: "bolder",
              }}
            >
              *
            </text>
          </div>
          <input
            style={{
              color: "#fff",
              backgroundColor: "rgba(15, 17, 26, 0.55)",
              width: "400px",
              height: "40px",
              paddingLeft: "15px",
              borderRadius: "10px",
              marginTop: "11px",
            }}
          />

          <div style={{ marginTop: "24px" }}>
            <span
              style={{
                color: "#B1B6C6",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "bolda",
                lineHeight: "14.4px",
                textTransform: "uppercase",
                fontWeight: "bolder",
              }}
            >
              PASSWORD
            </span>

            <text
              style={{
                color: "#FF4949",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14.4px",
                textTransform: "uppercase",
                fontWeight: "bolder",
              }}
            >
              *
            </text>
          </div>
          <input
            type="password"
            style={{
              color: "#fff",
              marginBottom: "4px",
              backgroundColor: "rgba(15, 17, 26, 0.55)",
              width: "400px",
              height: "40px",
              paddingLeft: "15px",
              borderRadius: "10px",
              marginTop: "11px",
            }}
          />
        </div>
        <span style={{ color: "#B1B6C6", fontSize: "13px", cursor: "pointer" }}>
          Forget Password?
        </span>
      </div>

      <div style={{ marginLeft: "24px", marginTop: "24px" }}>
        <p
          style={{
            color: "#B1B6C6",
            fontSize: "14px",
            marginRight: "5px",
            width: "390px",
          }}
        >
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>

      <div
        style={{
          marginLeft: "24px",
          cursor: "pointer",
          marginTop: "24px",
          backgroundColor: "#FFE81A",
          padding: "15px",
          width: "400px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
        }}
      >
        <span
          style={{ fontSize: "14px", padding: "15px 164px", fontWeight: "600" }}
        >
          LOGIN
        </span>
      </div>
      <div style={{ marginLeft: "24px", marginTop: "16px" }}>
        <span
          style={{ fontSize: "15px", color: "#B1B6C6", marginLeft: "9.4pc" }}
        >
          Or continue with
        </span>
      </div>
      <div style={{ display: "flex", marginLeft: "10px" }}>
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            marginLeft: "22px",
            borderRadius: "8px",
            marginTop: "16px",
            height: "42px",
            backgroundColor: "#1F2330",
            width: "100px",
          }}
        >
          <img
            style={{
              marginLeft: "17px",
              marginTop: "14px",
              height: "17px",
              width: "17px",
              marginRight: "5px",
            }}
            src={STEAM}
          />
          <div style={{ marginTop: "10px" }}>
            <span style={{ color: "#B1B6C6", fontWeight: "600" }}>Steam</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            cursor: "pointer",
            marginLeft: "24px",
            borderRadius: "8px",
            marginTop: "16px",
            height: "42px",
            backgroundColor: "#1F2330",
            width: "100px",
          }}
        >
          <img
            style={{
              marginLeft: "17px",
              marginTop: "14px",
              height: "17px",
              width: "17px",
              marginRight: "5px",
            }}
            src={TWITCH}
          />
          <div style={{ marginTop: "10px" }}>
            <span
              style={{ color: "#B1B6C6", marginLeft: "1px", fontWeight: "600" }}
            >
              Twitch
            </span>
          </div>
        </div>

        <div
          style={{
            marginLeft: "24px",
            cursor: "pointer",
            borderRadius: "8px",
            marginTop: "16px",
            height: "42",
            backgroundColor: "#1F2330",
            width: "120px",
            display: "flex",
          }}
        >
          <img
            style={{
              marginLeft: "17px",
              marginTop: "14px",
              height: "17px",
              width: "17px",
              marginRight: "5px",
            }}
            src={Metamask}
          />
          <div style={{ marginTop: "10px" }}>
            <span style={{ color: "#B1B6C6", fontWeight: "600" }}>
              Metamask
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
