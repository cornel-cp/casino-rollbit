import React, { useEffect, useState } from 'react';
import styled from "styled-components";

//assets
import BALANCE_IMG from "../../../assets/images/AK BALANCE.svg";
import ARROW_ICON from "../../../assets/images/Frame (2).svg";
import CASINO from "../../../assets/images/Frame (9).svg";
import DOWN_ARROW from "../../../assets/images/Frame 400.png";
import SPORTS from "../../../assets/images/Frame (10).svg";
import NFT from "../../../assets/images/Frame (11).svg";
import FEATURES from "../../../assets/images/Frame (12).svg";
import PORTFOLIO from "../../../assets/images/Frame (13).svg";
import CLANS from "../../../assets/images/Frame (14).svg";
import LOTTERY from "../../../assets/images/Frame (15).svg";
import JACKPOT from "../../../assets/images/svg.svg";
import VIDEO from "../../../assets/images/Frame (16).svg";
import AWARD from "../../../assets/images/Frame (17).svg";
import VISA from "../../../assets/images/Frame (18).svg";
import DEBIT from "../../../assets/images/Frame (19).svg";
import PAY from "../../../assets/images/Frame (20).svg";
import GOOGLE from "../../../assets/images/Frame (21).svg";
import COLLAPSE from "../../../assets/images/Frame (34).svg";


//overflow style
const StyledComponent = styled.div`
width: 16rem; 
flex: 0 0 auto;
background: #1A1D29;
margin-right: 3.5pc;
position: sticky;
top: 65px;
left: 0;
overflow-y: scroll;
overflow-x: hidden;
max-height: 730px;
scroll-padding-top: 9rem;
box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.30);



&::-webkit-scrollbar {
  width: 0.6rem;
}

&::-webkit-scrollbar-track {
  background: #1A1D29;
}

&::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: rgba(203, 215, 255, 0.08);
}

`;

  




const SideBar = () => {

    const [isSideBar, setisSideBar] = useState(true);


    
        if (isSideBar === false) {

            return (
                <>
                    <div style={{
                        height: '100vh', // 100% of view    port height
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: '#1F2330',
                        width: "55px", 
                        gap: "5px",
                        // marginRight: "20pc",
                        position: 'fixed', 
                        
                    }}>

                        <img onClick={() => setisSideBar(true)} src={COLLAPSE} alt="collapsed" style={{ cursor: "pointer", width: "25px", height: "25px", marginTop: "15px", marginBottom: "5px" }} />
                        <img style={{ marginTop: '5px', cursor: "pointer" }} src={CASINO}  />
                        <img style={{ marginTop: '20px', cursor: "pointer" }} src={SPORTS} />
                        <img style={{ marginTop: '20px', cursor: "pointer" }} src={NFT} />
                        <img style={{ marginTop: '20px', cursor: "pointer" }} src={FEATURES} />
                        <img style={{ marginTop: '20px', cursor: "pointer" }} src={PORTFOLIO} />
                        <img style={{ marginTop: '20px', cursor: "pointer" }} src={CLANS} />
                        <img style={{ marginTop: '20px', cursor: "pointer" }} src={LOTTERY} />
                        <img style={{ marginTop: '20px', cursor: "pointer" }} src={JACKPOT} />
                        <img style={{ marginTop: '20px', cursor: "pointer" }} src={VIDEO} />
                        <img style={{ marginTop: '20px', cursor: "pointer" }} src={AWARD} />

                    </div>
                </>
            )
        } else {
            
        }
 



    return (

        <>




            <StyledComponent className="w-64 flex flex-col flex-shrink-0 mr-14 overFlow" style={{ background: "#1F2330" }}>


                <div className="m-5 ml-4">
                    <img src={BALANCE_IMG} alt="balance" />
                </div>

                <div className="w-38 flex justify-between items-center cursor-pointer">

                    <span className="text-gray-500 text-xs font-normal leading-4 flex mx-4">PLAY AK GAMES</span>

                    <img onClick={() => setisSideBar(false)} src={ARROW_ICON} alt='arrow' style={{ marginRight: "30px", cursor: "pointer" }} />

                </div>

                <div className="flex mt-5 cursor-pointer">


                    <div style={{ display: "flex", width: "170px" }}>

                        <img src={CASINO} alt="frame" className="w-5 h-5 text-white ml-5" />
                        <span className="text-white text-sm font-normal leading-5 ml-2">Casino</span>

                    </div>




                    <div className="ml-6">
                        <img src={DOWN_ARROW} alt="arrow" />
                    </div>

                </div >




                <div className="flex mt-5 cursor-pointer">


                    <div style={{ display: "flex", width: "170px" }}>

                        <img src={SPORTS} alt="frame" className="w-5 h-5 text-white ml-5" />
                        <span className="text-white text-sm font-normal leading-5 ml-2">Sports</span>

                    </div>




                    <div className="ml-6">
                        <img src={DOWN_ARROW} alt="arrow" />
                    </div>
                </div >

                <div className="flex mt-5 cursor-pointer">


                    <div style={{ display: "flex", width: "170px" }}>

                        <img src={NFT} alt="frame" className="w-5 h-5 text-white ml-5" />
                        <span className="text-white text-sm font-normal leading-5 ml-2">NFT</span>

                    </div>




                    <div className="ml-6">
                        <img src={DOWN_ARROW} alt="arrow" />
                    </div>
                </div >

                <div className="flex mt-5 cursor-pointer">


                    <div style={{ display: "flex", width: "170px" }}>

                        <img src={FEATURES} alt="frame" className="w-5 h-5 text-white ml-5" />
                        <span className="text-white text-sm font-normal leading-5 ml-2">Crypto Features</span>

                    </div>




                    <div className="ml-6">
                        <img src={DOWN_ARROW} alt="arrow" />
                    </div>
                </div >

                <div className="flex mt-5 cursor-pointer">


                    <div style={{ display: "flex", width: "170px" }}>

                        <img src={PORTFOLIO} alt="frame" className="w-5 h-5 text-white ml-5" />
                        <span className="text-white text-sm font-normal leading-5 ml-2">Crypto Portfolio</span>

                    </div>


                </div >

                <div className="flex mt-5 cursor-pointer">


                    <div style={{ display: "flex", width: "170px" }}>

                        <img src={CLANS} alt="frame" className="w-5 h-5 text-white ml-5" />
                        <span class=" text-white font-normal leading-5 ml-2">Clans</span>

                    </div>

                </div >



                <div>
                    <span style={{
                        color: "#686D7B",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "14.4px",
                        display: "flex",
                        margin: "25px 17px"
                    }}>OTHER</span>


                    <div>
                        <div>
                            <img src={LOTTERY} alt='lottery' style={{ display: "inline-block", marginLeft: "20px", marginRight: "10px" }} />
                            <span style={{ marginRight: "15px", width: "87px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>AK Lottery</span>
                            <span style={{ width: "46px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>$5.03K</span>
                            <span style={{ marginLeft: "25px", width: "14px", color: "#B1B6C6", fontSize: "11px", fontStyle: "normal", fontWeight: "400", lineHeight: "13.2px " }}>64</span>
                        </div>
                        <div>
                            <img src={JACKPOT} alt='lottery' style={{ display: "inline-block", marginLeft: "15px", marginRight: "10px", marginTop: "15px", marginBottom: "15px" }} />
                            <span style={{ marginRight: "15px", marginLeft: "-3px", width: "87px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Jackpot</span>
                            <span style={{ width: "46px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>$31.2</span>
                            <span style={{ marginLeft: "50px", width: "14px", color: "#B1B6C6", fontSize: "11px", fontStyle: "normal", fontWeight: "400", lineHeight: "13.2px " }}>10</span>
                        </div>
                        <div style={{ marginTop: "-5px" }}>
                            <img src={VIDEO} alt='lottery' style={{ display: "inline-block", marginLeft: "22px", marginRight: "10px" }} />
                            <span style={{ marginLeft: "3px", width: "87px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Streams</span>
                        </div>
                    </div>
                </div>





                <div>

                    <span style={{
                        color: "#686D7B",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "14.4px",
                        display: "flex",
                        margin: "25px 17px"
                    }}>EVENTS</span>




                    <img src={AWARD} alt='lottery' style={{ display: "inline-block", marginLeft: "25px", marginRight: "10px" }} />
                    <span style={{ marginRight: "2px", width: "87px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>$25K</span>
                    <span style={{ width: "46px", color: "#fff", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "16.8px" }}>Race</span>
                    <span style={{ marginLeft: "55px", width: "14px", color: "#B1B6C6", fontSize: "11px", fontStyle: "normal", fontWeight: "400", lineHeight: "13.2px " }}>09:01:04</span>





                </div>


                {/* //coins buy options */}

                <div className="w-64 h-36 flex-shrink-0 bg-blue-100 bg-opacity-10 mt-20">
                    <div>

                        <button className="inline-flex py-2 px-14 items-start gap-4 rounded-lg bg-blue-200 bg-opacity-20 text-white text-center text-sm font-normal leading-5 tracking-wider ml-6 mt-6 mb-6">BUY CRYPTO</button>

                        <div className="flex items-center gap-2 ml-4 mt-2 cursor-pointer">
                            <img src={VISA} alt="social" />
                            <img src={DEBIT} alt="social" />
                            <img src={PAY} alt="social" />
                            <img src={GOOGLE} alt="social" />
                        </div>




                    </div>


                </div>







            </StyledComponent >



            {/* main home page */}






        </>



    )

}

export default SideBar;