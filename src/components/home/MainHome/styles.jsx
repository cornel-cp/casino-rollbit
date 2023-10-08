import styled from "styled-components";

export const PageLayout = styled.div`
  padding-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "240px" : "55px")};
  padding-right: ${({ isChatBoxOpen }) => (isChatBoxOpen ? "340px" : "0")};
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px auto;
  /* min-height: 100vh; */
  width: 100%;
  max-width: 1170px;
  padding: 24px 24px 48px;
  background: #1a1d29;
`;
