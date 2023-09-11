import React from 'react';
import { Link } from 'react-router-dom';

//assets
import USER from '../../../assets/images/Frame (44).svg';
import FLOW from '../../../assets/images/Frame (49).svg';
import BUGER from '../../../assets/images/Frame (50).svg';
import GEAR from '../../../assets/images/Frame (51).svg';
import OUT from '../../../assets/images/Frame (52).svg';
import MONEY from '../../../assets/images/Frame (53).svg';
import MONEY_COLORED from '../../../assets/images/Frame (57).svg';
import SWITCH from '../../../assets/images/Frame (55).svg';
import COIN from '../../../assets/images/IMAGE (47).png';
import CIRCLE from '../../../assets/images/Frame 507.svg';
import LoginFooter from '../footer/LoginFooter';
import BalancesFooter from '../footer/BalancesFooter';

const Balances = () => {
  return (
    <div style={{ margin: "0px 20px", display: "flex" }}>
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
            <p style={{ display: "flex" }}><img src={MONEY_COLORED} alt="money" style={{ width: "19px", height: "19px" }} /> <span style={{
              color: "#FFFFC1",
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
            <p style={{ display: "flex" }}><img src={FLOW} alt="flow" style={{ width: "19px", height: "19px" }} /> <span style={{
              color: "#FFF",
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

      {/* BALANCES TITLE  */}
      <div style={{ display: "flex", margin: "35px 2pc", gap: "12px" }}>
        <div style={{ display: "flex", gap: "12px" }}>
          <img src={MONEY} alt="money" style={{ width: "18px", height: "18px", marginTop: "5px" }} />
          <p style={{ width: "111px", color: "#fff", fontSize: "22px", fontStyle: "normal", fontWeight: "400", lineHeight: "26.4px", textTransform: "uppercase" }}>
            Balances
          </p>

          <div style={{ display: "flex", padding: "4px 16px", alignItems: "center", gap: "10px", borderRadius: "6px", background: "#86F454", boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)", height: "1.8pc", marginLeft: "20pc" }}>
            <p style={{ color: "#141722", fontSize: "13px", fontStyle: "normal", fontWeight: "400", lineHeight: "15.6px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Create Referral Balance</p>

          </div>



        </div>


      </div>

      {/* BALANCES PARA */}

      <div style={{ display: "inline-flex", alignItems: "flex-start", margin: "6pc -44.3pc", gap: "29.9pc" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={SWITCH} alt="switch" style={{ width: "14px", height: "14px" }} />
          <p style={{ width: "101px", color: "#B1B6C6", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Switch Balance</p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", }}>
          <p style={{ width: "39px", color: "#B1B6C6", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Total:</p>
          <p style={{ width: "39px", color: "#72F238", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>$0.00</p>
        </div>
      </div>

      {/* BALANCES */}

      <div style={{ display: "flex", width: "680px", margin: "9pc 28px", padding: "40px 16px", flexDirection: "column", alignItems: "flex-start", gap: "10px", borderRadius: "10px", background: "rgba(15, 17, 26, 0.55)", height: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "-20px 0" }}>
          <div>
            <img src={CIRCLE} alt="CIRCLE" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px" }}>
            <p style={{ width: "32px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Main</p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <img src={COIN} alt="CIRCLE" style={{ width: "17px", height: "16px" }}/>
              <p style={{ width: "39px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>$0.00</p>
            </div>
          </div>
        </div>
      </div>



      <BalancesFooter />

    </div>


  )
}

export default Balances;