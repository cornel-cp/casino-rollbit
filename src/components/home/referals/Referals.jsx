import React from 'react';
import { Link } from 'react-router-dom';

//assets
import USER from '../../../assets/images/Frame (44).svg';
import FLOW from '../../../assets/images/Frame (49).svg';
import FLOW_COLORED from '../../../assets/images/Frame (56).svg';
import BUGER from '../../../assets/images/Frame (50).svg';
import GEAR from '../../../assets/images/Frame (51).svg';
import OUT from '../../../assets/images/Frame (52).svg';
import MONEY from '../../../assets/images/Frame (53).svg';
import DIVIDER from '../../../assets/images/Rectangle.svg';
import ReferalsFooter from '../footer/ReferalsFooter';

const Referals = () => {
  return (
    <div style={{ width: "1920px", height: "1149px", display: "flex", margin: "0 20px" }}>
      {/* sidebars */}
      <div style={{ padding: "30px 0" }}>

        <Link to="/profile">
          <div style={{ display: "flex", margin: "8px 0", width: "165px", padding: "10px 16px", flexDirection: "column", alignItems: "flex-start", gap: "40px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>

            <p style={{ display: "flex", }}><img src={USER} alt="user" style={{ width: "19px", height: "19px" }} /> <span style={{
              color: "#FFF",
              fontSize: "14px",
              margin: "0 15px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px"
            }}>Profile</span></p>
          </div >
        </Link>

        <Link to="/balances">
          <div style={{ display: "flex", margin: "8px 0", width: "165px", padding: "10px 16px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", }}>
            <p style={{ display: "flex" }}><img src={MONEY} alt="money" style={{ width: "19px", height: "19px" }} /> <span style={{
              color: "#FFF",
              fontSize: "14px",
              margin: "0 15px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px"
            }}>Balances</span></p>
          </div >
        </Link>

        <Link to="/referrals">
          <div style={{ display: "flex", margin: "8px 0", width: "165px", padding: "10px 16px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", }}>
            <p style={{ display: "flex" }}><img src={FLOW_COLORED} alt="flow" style={{ width: "19px", height: "19px" }} /> <span style={{
              color: "#FFFFC1",
              fontSize: "14px",
              fontStyle: "normal",
              margin: "0 15px",
              fontWeight: "400",
              lineHeight: "16.8px"
            }}>Referrals</span></p>
          </div >
        </Link>

        <Link>
          <div style={{ display: "flex", margin: "8px 0", width: "165px", padding: "10px 16px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", }}>
            <p style={{ display: "flex" }}><img src={BUGER} alt="burger" style={{ width: "19px", height: "19px" }} /> <span style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              margin: "0 15px",
              fontWeight: "400",
              lineHeight: "16.8px"
            }}>Deposits</span></p>
          </div>
        </Link>

        <Link>
          <div style={{ display: "flex", margin: "8px 0", width: "165px", padding: "10px 16px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", }}>
            <p style={{ display: "flex" }}><img src={BUGER} alt="burger" style={{ width: "19px", height: "19px" }} /> <span style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              margin: "0 15px",
              fontWeight: "400",
              lineHeight: "16.8px"
            }}>Withdrawals</span></p>
          </div >
        </Link>

        <Link to="/settings">
          <div style={{ display: "flex", margin: "8px 0", width: "165px", padding: "10px 16px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", }}>
            <p style={{ display: "flex" }}><img src={GEAR} alt="gear" style={{ width: "19px", height: "19px" }} /> <span style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              margin: "0 15px",
              fontWeight: "400",
              lineHeight: "16.8px"
            }}>Settings</span></p>
          </div >
        </Link>

        <Link>
          <div style={{ display: "flex", margin: "8px 0", width: "165px", padding: "10px 16px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", }}>
            <p style={{ display: "flex" }}><img src={OUT} alt="out" style={{ width: "19px", height: "19px" }} /> <span style={{
              color: "#FFF",
              fontSize: "14px",
              fontStyle: "normal",
              margin: "0 15px",
              fontWeight: "400",
              lineHeight: "16.8px"
            }}>Log Out</span></p>
          </div >
        </Link>
      </div >


      {/* REFERALS TITLE */}
      <div>
        <div style={{ margin: "35px 2pc" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <img src={FLOW} alt="money" style={{ width: "18px", height: "18px", marginTop: "5px" }} />
            <p style={{ width: "122px", color: "#fff", fontSize: "22px", fontStyle: "normal", fontWeight: "400", lineHeight: "26.4px", textTransform: "uppercase" }}>
              Referrals
            </p>
          </div>


          {/* REFFERALS BUTTONS */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", margin: "25.5px 0" }}>
            <div style={{ display: "flex", padding: "8px 16px", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.08)" }}>
              <p style={{ color: "#FFFFC1", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8x", textTransform: "uppercase" }}>Referrals</p>
            </div>
            <div style={{ display: "flex", padding: "8px 16px", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.08)" }}>
              <p style={{ color: "#B1B6C6", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8x", textTransform: "uppercase" }}>Referred users</p>
            </div>
          </div>

          {/* INPUT AREA ********** */}
          <div style={{ display: "inline-flex", padding: "25px 80px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "11px" }}>
              <p style={{ width: "175px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "14.4px", textTransform: "uppercase" }}>Set custom referrals code</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="text" style={{ display: "flex", width: "500px", padding: "10px", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "10pxs", borderRadius: "6px", background: "rgba(15, 17, 26, 0.55)", color: "#fff" }} />
                <div style={{ display: "flex", padding: "10px 25px", alignItems: "center", gap: "10px", borderRadius: "6px", background: "#FFE81A", boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)", width: "100px", height: "40px" }}>
                  <p style={{ textAlign: "center", color: "#141722", fontSize: "13px", fontStyle: "normal", fontWeight: "400", lineHeight: "15.6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>create</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dollars */}

          <div style={{ display: 'flex', width: "785px", justifyContent: 'center', alignItems: "center", gap: "14px", margin: "20px -10px" }}>
            <div style={{ display: "flex", padding: "23px 72px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "11px" }}>
                <p style={{ width: "51px", color: "#fff", fontSize: "18px", fontStyle: "normal", fontWeight: "400", lineHeight: "21.6px" }}>$0.00</p>
                <p style={{ width: "102px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "15.6px", textTransform: "uppercase" }}>Total wagered</p>
              </div>
            </div>

            <div style={{ display: "flex", padding: "23px 75px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "11px" }}>
                <p style={{ width: "51px", color: "#fff", fontSize: "18px", fontStyle: "normal", fontWeight: "400", lineHeight: "21.6px" }}>$0.00</p>
                <p style={{ width: "95px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "15.6px", textTransform: "uppercase" }}>Total claimed</p>
              </div>
            </div>

            <div style={{ display: "flex", padding: "23px 72px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "11px" }}>
                <p style={{ width: "51px", color: "#fff", fontSize: "18px", fontStyle: "normal", fontWeight: "400", lineHeight: "21.6px" }}>$0.00</p>
                <p style={{ width: "106px", color: "#B1B6C6", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "15.6px", textTransform: "uppercase" }}>Total available</p>
              </div>
            </div>
          </div>

          {/* NOT FOUND */}
          <div style={{ margin: "3pc 16pc" }}>
            <div style={{ display: "inline-flex", padding: "23px 32px", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(15, 17, 26, 0.55)" }}>
              <p style={{ color: "#676D7C", fontSize: "18px", fontStyle: "normal", fontWeight: "400", lineHeight: "21.6px", textTransform: "uppercase" }}>No Referrals Found</p>
            </div>
          </div>

          {/* DIVIDER */}
          <div>
            <img src={DIVIDER} alt="divider" />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0", }}>
              <p style={{ width: "480px", color: "#B1B6C6", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>If you're a content creator, make sure to check out our <span style={{ color: "#FFB018", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Partnership Program</span>.</p>
            </div>
          </div>



























        </div>
      <ReferalsFooter />
      </div>


    </div>
  )
}

export default Referals;