import styled from "styled-components";

export const StyledNFTCard = styled.div`
  border-radius: 8px;
  width: 210px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(203, 215, 255, 0.03);
  gap: 12px;

  .padding-wrapper {
    padding: 20px 0;
  }

  .text-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      color: #ffffc1;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      margin-top: 15px;
    }

    .sub-title {
      color: #b1b6c6;
      display: flex;
      text-align: center;
      font-size: 12px;
      margin-top: 5px;
      margin-left: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      gap: 10px;
      width: 190px;

      .amount {
        display: inline-block;
      }
    }
  }

  .image-section {
    img {
      width: 183px;
      height: 183px;
      margin-top: 5px;
    }
  }

  .info-section {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: auto;

    .info-text {
      color: #fff;
      text-align: center;
      display: flex;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      gap: 5px;
      margin-left: 15px;

      img {
        width: 18px;
        height: 18px;
      }

      .info-name {
        display: inline-block;
      }

      .item-count {
        color: #b1b6c6;
      }
    }
  }

  .button-section {
    display: flex;

    button {
      padding: 11px 40px;
      width: 190px;
      height: 40px;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      background: #ffe81a;
      box-shadow: 0px 0px 10px 0px rgba(255, 176, 25, 0.4);
      color: #141722;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
  }
`;
