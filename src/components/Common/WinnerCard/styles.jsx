import styled from "styled-components";

export const StyledWinnerCard = styled.div`
  padding: 20px 0;
  flex-shrink: 0;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  .card-content {
    border-radius: 8px;
    width: 129px;
    height: 178px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(203, 215, 255, 0.03);
    gap: 12px;

    .card-image {
      width: 115px;
      height: 115px;
      margin-top: 10px;
    }

    .user-details {
      display: flex;
      align-items: center;
      gap: 5px;

      .cart-icon {
        width: 18px;
        height: 15px;
      }

      .username {
        color: #fff;
        text-align: center;
        font-size: 14px;
        margin-right: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 14.4px;
      }
    }

    .price {
      color: #72f238;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      margin-top: -5px;
      line-height: 14.4px;
    }
  }
`;

export const LiveWinsSectionStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 36px;

  .dot-section {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dot-icon {
    width: 8px;
    height: 8px;
  }

  .live-wins-text {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  }
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Use 'auto' to show scrollbars only when needed, or 'hidden' to hide them */
  scroll-snap-type: x mandatory;

  /* If you want to hide the scrollbar completely, you can use the following */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome/Safari/Opera */
  }

  width: 100%;
  gap: 10px;
`;
