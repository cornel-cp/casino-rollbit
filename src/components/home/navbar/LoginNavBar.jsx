import React from 'react'

const LoginNavBar = () => {
  return (
    <div style={{ width: "1915px", height: "65px", flexShrink: "0", background: "#1A1D29", boxShadow: "2px 2px 2px rgba(0,0,0,0.3)" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Link to="/">
        <img src={LOGO} alt="logo" style={{ width: "160px", height: "39.017px", flexShrink: "0", margin: "12.5px 12px" }} />
      </Link>


      <div onClick={() => rewardModelController()} style={{ display: "inline-flex", padding: "7px 12px", alignItems: "center", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>
        <img src={TREASURE} alt="treasure" style={{ width: "26px", height: "26px" }} />
        <p style={{ width: "58px", color: "#fff", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "14.4px", textTransform: "uppercase" }}>Rewards</p>
        <img src={ARROW_DOWN} alt="arrow" style={{ width: "8px", height: "6px" }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", margin: "0 25pc", gap: "15px" }}>
        <div style={{ display: "inline-flex", padding: "11px 14px", alignItems: "flex-start", gap: "10px", borderRadius: "6px", background: "#10121B" }}>
          <img src={COIN} alt="" style={{ width: "20px", height: "19px" }} />
          <p style={{ width: "39px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>$0.00</p>
        </div>
        <div onClick={() => OpenDepositModel()} style={{ display: "inline-flex", padding: "10px 16px", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "#FFE81A", boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)", cursor: "pointer" }}>
          <p style={{ color: "#141722", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Cashier</p>
        </div>
        <div onClick={() => BuyCryptoBtn()} style={{ display: "inline-flex", padding: "10px 16px", alignItems: "flex-start", gap: "10px", borderRadius: "8px", background: "rgba(203, 215, 255, 0.08)", cursor: "pointer" }}>
          <p style={{ color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px", letterSpacing: "0.5px", textTransform: "uppercase" }}>Buy Crypto</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", marginLeft: "2.2pc" }}>
        <div onClick={() => accountModelController()} style={{ display: "flex", width: "141px", height: "40px", flexShrink: "0", borderRadius: "8px", background: "rgba(203, 215, 255, 0.03)", cursor: "pointer" }}>
          <img src={HEXAGON} alt="hexagon" style={{ width: "29px", height: "29px", margin: "5px 8px" }} />

          <div>
            <p style={{ width: "55px", color: "#fff", fontSize: "13px", fontStyle: "normal", fontWeight: "400", lineHeight: "15.6px", letterSpacing: "0.5px", margin: "8px 6px" }}>Account</p>
            <img src={RECTANGLE} alt='rectangle' style={{ width: "51px", height: "5px", margin: "-2px 6px" }} />
            <img src={ARROW_DOWN} alt="arrow" style={{ width: "8px", height: "6px", margin: "-18px 70px" }} />
          </div>

        </div>

        <div style={{ display: "flex" }}>
          <img src={SEARCH_ICON} alt="search" />
        </div>
      </div>








    </div>

    <LoginFooter />

  </div>
  )
}

export default LoginNavBar