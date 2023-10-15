import styled from "styled-components";

export const StyledNFTSection = styled.div`
  width: 100%;

  .nft-cards {
    display: grid;
    width: 100%;
    align-items: stretch;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }

  .btn-wrapper {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 48px 0px;
  }
`;
