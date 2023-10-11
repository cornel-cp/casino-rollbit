import styled from "styled-components";

export const PageLayout = styled.div`
  padding-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "240px" : "55px")};
  padding-right: ${({ isChatBoxOpen }) => (isChatBoxOpen ? "340px" : "0")};

  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 65px);
  justify-content: space-between;
  transition: all 250ms ease 0s;
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px auto;
  width: 100%;
  max-width: 1170px;
  padding: 24px 24px 48px;
  background: #1a1d29;
`;

export const SportsContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 24px 24px 48px;
  background: #1a1d29;
`;
