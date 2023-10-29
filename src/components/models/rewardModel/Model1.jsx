import React from "react";

//assets

import ADD from "../../../assets/modelImages/Frame (1).svg";
import GIFT from "../../../assets/modelImages/Frame.svg";
import COIN from "../../../assets/modelImages/IMAGE (1).png";
import BUCKET1 from "../../../assets/modelImages/IMAGE (2).png";
import BUCKET2 from "../../../assets/modelImages/IMAGE (3).png";
import BUCKET3 from "../../../assets/modelImages/IMAGE (4).png";
import BUCKET4 from "../../../assets/modelImages/IMAGE (5).png";
import REBOTE from "../../../assets/modelImages/IMAGE (6).png";
import CARD from "../../../assets/modelImages/IMAGE (7).png";

const Model1 = () => {
  return (
    <>
      {/* real model start */}

      <div>
        <div style={{ padding: "30px 25px", display: "flex" }}>
          <img
            src={COIN}
            alt="coin"
            style={{ width: "44px", height: "26px" }}
          />

          <div
            style={{ padding: "-10px 0", margin: "-8px 13px", color: "#fff" }}
          >
            <p>CALENDAR</p>
            <p
              style={{
                color: "#72F238",
                fontSize: "14px",
                display: "flex",
                gap: "7px",
                margin: "0px 0px",
              }}
            >
              Pending: <span>$0.00</span>
            </p>
          </div>

          {/* button sec */}

          <div
            style={{
              display: "flex",
              padding: "10px 14px",
              margin: "-7px 9pc",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "10px",
              background: "#86F454",
              boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)",
            }}
          >
            CLAIM
          </div>
        </div>

        {/* next sec 2 */}

        <div style={{ padding: "15px 25px", display: "flex" }}>
          <img
            src={BUCKET1}
            alt="bucket1"
            style={{ width: "44px", height: "42px" }}
          />

          <div
            style={{ padding: "-10px 0", margin: "2px 13px", color: "#fff" }}
          >
            <p style={{ fontSize: "14px", width: "90px" }}>DAILY BONUS</p>
          </div>

          {/* button sec */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 25px",
              height: "50px",
              margin: "-9px 8.3pc",
              alignItems: "center",
              gap: "5px",
              borderRadius: "10px",
              background: "#FFE81A",
              boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
            }}
          >
            {" "}
            <img src={GIFT} alt="gift" /> ADD
          </div>
        </div>

        {/* next sec 3 */}

        <div style={{ padding: "20px 26px", display: "flex" }}>
          <img
            src={BUCKET2}
            alt="bucket2"
            style={{ width: "44px", height: "42px" }}
          />

          <div
            style={{ padding: "-10px 0", margin: "4px 13px", color: "#fff" }}
          >
            <p style={{ fontSize: "14px", width: "100px" }}>WEEKLY BONUS</p>
          </div>

          {/* button sec */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 25px",
              height: "50px",
              margin: "-9px 7.8pc",
              alignItems: "center",
              gap: "5px",
              borderRadius: "10px",
              background: "#FFE81A",
              boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
            }}
          >
            {" "}
            <img src={GIFT} alt="gift" /> ADD
          </div>
        </div>

        {/* next sec 4 */}

        <div style={{ padding: "15px 25px", display: "flex" }}>
          <img
            src={BUCKET3}
            alt="bucket3"
            style={{ width: "44px", height: "42px" }}
          />

          <div
            style={{ padding: "-10px 0", margin: "5px 13px", color: "#fff" }}
          >
            <p style={{ fontSize: "14px", width: "130px" }}>MONTHLY BONUS</p>
          </div>

          {/* button sec */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 25px",
              height: "50px",
              margin: "-9px 6pc",
              alignItems: "center",
              gap: "5px",
              borderRadius: "10px",
              background: "#FFE81A",
              boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
            }}
          >
            {" "}
            <img src={GIFT} alt="gift" /> ADD
          </div>
        </div>

        {/* next sec 5 */}

        <div style={{ padding: "20px 25px", display: "flex" }}>
          <img
            src={BUCKET4}
            alt="bucket4"
            style={{ width: "44px", height: "42px" }}
          />

          <div
            style={{ padding: "-10px 0", margin: "4px 13px", color: "#fff" }}
          >
            <p style={{ fontSize: "15px", width: "90px" }}>RAKEBACK</p>
          </div>

          {/* button sec */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 25px",
              height: "50px",
              margin: "-9px 8.3pc",
              alignItems: "center",
              gap: "5px",
              borderRadius: "10px",
              background: "#FFE81A",
              boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
            }}
          >
            {" "}
            <img src={GIFT} alt="gift" /> ADD
          </div>
        </div>

        {/* next sec 6 */}

        <div style={{ padding: "20px 25px", display: "flex" }}>
          <img
            src={REBOTE}
            alt="rebote"
            style={{ width: "40px", height: "40px" }}
          />

          <div
            style={{ padding: "-10px 0", margin: "5px 13px", color: "#fff" }}
          >
            <p style={{ fontSize: "14px", width: "90px" }}>ROLLBACK</p>
          </div>

          {/* button sec */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 25px",
              height: "50px",
              margin: "-9px 8.5pc",
              alignItems: "center",
              gap: "5px",
              borderRadius: "10px",
              background: "#FFE81A",
              boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
            }}
          >
            {" "}
            <img src={GIFT} alt="gift" /> ADD
          </div>
        </div>

        {/* next sec 7 */}

        <div style={{ padding: "20px 25px", display: "flex" }}>
          <img
            src={CARD}
            alt="card"
            style={{ width: "40px", height: "32px" }}
          />

          <div
            style={{ padding: "-10px 0", margin: "5px 13px", color: "#fff" }}
          >
            <p style={{ fontSize: "14px", width: "90px" }}>FREE SIDEBET</p>
          </div>

          {/* button sec */}

          <div
            style={{
              display: "flex",
              padding: "23px 26px",
              height: "24px",
              margin: "-7px 7.4pc",
              alignItems: "center",
              gap: "5px",
              borderRadius: "10px",
              background: "#86F454",
              boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)",
            }}
          >
            {" "}
            <img src={ADD} alt="add" /> CLAIM
          </div>
        </div>

        <div
          style={{
            display: "inline-flex",
            height: "40px",
            padding: "10px 130px",
            marginTop: "15px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20px",
            gap: "10px",
            flexShrink: "0",
            borderRadius: "8px",
            background: "rgba(203, 215, 255, 0.08)",
          }}
        >
          <p
            style={{
              color: "#fff",
              display: "flex",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
              letterSpacing: "0.5px",
            }}
          >
            VIEW DASHBOARD
          </p>
        </div>
      </div>
    </>
  );
};

export default Model1;
