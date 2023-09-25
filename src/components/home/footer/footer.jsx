import React from "react";
import styled from "styled-components";

//assets
import LOGO from "../../../assets/images/LOGO (1).png";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: -200px;
  width: 1750px;
  margin-left: -370px;
  height: 430px;
  flex-shrink: 0;
  background: #141622;
`;

const Wrapper = styled.div`
  margin: 80px 0;
`;

const StyledDiv = styled.div`
  margin-left: -200px;
`;

const StyledP = styled.p`
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #b1b6c6;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px;
`;

const StyledCopyrightText = styled.p`
  color: #b1b6c6;
  width: 320px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  margin: 20px 0;
`;

const Footer = ({ update }) => {
  return (
    <FooterWrapper>
      <div className="sm">
        <div
          className="sm-text"
          style={{
            width: "430px",
            margin: "80px 85px",
          }}
        >
          <div
            className="logo"
            style={{
              width: "208px",
              height: "50px",
              margin: "30px -80px",
            }}
          >
            <img src={LOGO} alt="" />
            <StyledCopyrightText>
              Copyright © 2023 AK47.com. All rights reserved. AK is a brand name
              of Anoukha Gaming A.K. Company Address: Bangalore, karnataka,
              India, 560090.
            </StyledCopyrightText>
            <StyledCopyrightText>
              Anoukha Gaming A.K. payments can be processed by WINGAMING SUPPORT
              LIMITED (Registration Number HE406701). Company Address: Avlonos,
              1, MARIA HOUSE, 1075, Nicosia, Cyprus.
            </StyledCopyrightText>
            <StyledCopyrightText>
              Crypto trading is not gambling, and therefore not covered by our
              gaming license.
            </StyledCopyrightText>
          </div>
        </div>
      </div>

      <div style={{ margin: "80px 0" }}>
        <div style={{ marginLeft: "-200px" }}>
          <StyledP>PLATFORM</StyledP>
          <li style={{ listStyle: "none", marginTop: "20px" }}>
            <StyledLink href="#">Support</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">FAQ</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Partnership Program</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Blog</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Help Center</StyledLink>
          </li>
        </div>
      </div>
      <div style={{ margin: "80px 0px" }}>
        <div>
          <StyledP>ABOUT US</StyledP>
          <li style={{ listStyle: "none", marginTop: "20px" }}>
            <StyledLink href="#">AML Policy</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Sports Policy</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Responsible Gaming</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Privacy Policy</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Terms and Conditions</StyledLink>
          </li>
        </div>
      </div>
      <div style={{ margin: "80px 100px" }}>
        <div>
          <StyledP>COMMUNITY</StyledP>
          <li style={{ listStyle: "none", marginTop: "20px" }}>
            <StyledLink href="#">Facebook</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Twitter</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Instagram</StyledLink>
          </li>
          <li style={{ listStyle: "none", marginTop: "10px" }}>
            <StyledLink href="#">Discord</StyledLink>
          </li>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
