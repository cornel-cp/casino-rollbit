import React from 'react';


// assets

import USER from "../../../assets/modelImages/Frame (6).svg";
import BAG from "../../../assets/modelImages/Frame (7).svg";
import FLAW from "../../../assets/modelImages/Frame (8).svg";
import BUILD from "../../../assets/modelImages/Frame (9).svg";
import GEAR from "../../../assets/modelImages/Frame (11).svg";
import OUT from "../../../assets/modelImages/Frame (12).svg";

const Model5 = () => {
  return (

   
    <div>

  

            <p style={{color:"#B1B6C6", margin:"20px 15px", fontSize:"14px", fontStyle:"normal", fontWeight:"400"}}>Hello, mr.anouk</p>

            <div style={{listStyle:"none", fontSize:"14px", display:"flex",  margin:"10px 15px", width:"170px", padding:"10px 17px", flexDirection:"column", alignItems:"flex-start", borderRadius:"8px", textDecoration:"none", background: "rgba(203, 215, 255, 0.03)"}}>

                <li><a style={{ textDecoration:"none", display:"flex", gap:"10px"}} href="/profile"> <img src={USER} alt="user" />  <span style={{color:"#fff"}}>Profile</span></a></li>
            </div>


            



            <div style={{listStyle:"none", fontSize:"14px", display:"flex", margin:"10px 15px", width:"170px", padding:"10px 17px", flexDirection:"column", alignItems:"flex-start", borderRadius:"8px", textDecoration:"none", background: "rgba(203, 215, 255, 0.03)"}}>

                <li><a style={{ textDecoration:"none", display:"flex", gap:"10px"}} href="/balances"> <img src={BAG} alt="bag" />  <span style={{color:"#fff"}}>Balances</span></a></li>
            </div>






            <div style={{listStyle:"none", fontSize:"14px", display:"flex", margin:"10px 15px", width:"170px", padding:"10px 17px", flexDirection:"column", alignItems:"flex-start", borderRadius:"8px", textDecoration:"none", background: "rgba(203, 215, 255, 0.03)"}}>

                <li><a style={{ textDecoration:"none", display:"flex", gap:"10px"}} href="/referrals"> <img src={FLAW} alt="flaw" />  <span style={{color:"#fff"}}>Referrals</span></a></li>
            </div>






            <div style={{listStyle:"none", fontSize:"14px", display:"flex", margin:"10px 15px", width:"170px", padding:"10px 17px", flexDirection:"column", alignItems:"flex-start", borderRadius:"8px", textDecoration:"none", background: "rgba(203, 215, 255, 0.03)"}}>

                <li><a style={{ textDecoration:"none", display:"flex", gap:"10px"}} href=""> <img src={BUILD} alt="build" />  <span style={{color:"#fff"}}>Deposits</span></a></li>
            </div>




            <div style={{listStyle:"none", fontSize:"14px", display:"flex", margin:"10px 15px", width:"170px", padding:"10px 17px", flexDirection:"column", alignItems:"flex-start", borderRadius:"8px", textDecoration:"none", background: "rgba(203, 215, 255, 0.03)"}}>

                <li><a style={{ textDecoration:"none", display:"flex", gap:"10px"}} href=""> <img src={BUILD} alt="build" />  <span style={{color:"#fff"}}>Withdrawals</span></a></li>
            </div>




            <div style={{listStyle:"none", fontSize:"14px", display:"flex", margin:"10px 15px", width:"170px", padding:"10px 17px", flexDirection:"column", alignItems:"flex-start", borderRadius:"8px", textDecoration:"none", background: "rgba(203, 215, 255, 0.03)"}}>

                <li><a style={{ textDecoration:"none", display:"flex", gap:"10px"}} href="/settings"> <img src={GEAR} alt="gear" />  <span style={{color:"#fff"}}>Settings</span></a></li>
            </div>







            <div style={{listStyle:"none", fontSize:"14px", display:"flex", margin:"10px 15px", width:"170px", padding:"10px 17px", flexDirection:"column", alignItems:"flex-start", borderRadius:"8px", textDecoration:"none", background: "rgba(203, 215, 255, 0.03)"}}>

                <li><a style={{ textDecoration:"none", display:"flex", gap:"10px"}} href="#"> <img src={OUT} alt="out" />  <span style={{color:"#fff"}}>Log Out</span></a></li>
            </div>

           
        </div>


  
  )
}

export default Model5;