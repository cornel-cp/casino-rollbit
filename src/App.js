import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import HomeAppBar from "./components/home/header/AppBar";

//reward section models

// deposit section models
import { useContext } from "react";
import { AppContext } from "./AppContext";
import NFTDetails from "./components/Common/NFTDetails/NFTDetails";
import AKOriginals from "./components/Pages/Casino/AKOriginals";
import Blackjack from "./components/Pages/Casino/Blackjack";
import BonusBattles from "./components/Pages/Casino/BonusBattles";
import Casino from "./components/Pages/Casino/Casino";
import Challenges from "./components/Pages/Casino/Challenges";
import GameShows from "./components/Pages/Casino/GameShows";
import LiveCasino from "./components/Pages/Casino/LiveCasino";
import Rollercoaster from "./components/Pages/Casino/Rollercoaster";
import Roulette from "./components/Pages/Casino/Roulette";
import Slots from "./components/Pages/Casino/Slots";
import WithChallenges from "./components/Pages/Casino/WithChallenges";
import WithSidebets from "./components/Pages/Casino/WithSidebets";
import ManageRollbots from "./components/Pages/NFT/ManageRollbots";
import ManageSportsbots from "./components/Pages/NFT/ManageSportsbots";
import Marketplace from "./components/Pages/NFT/Marketplace";
import MyNFTs from "./components/Pages/NFT/MyNfts";
import NFTBox from "./components/Pages/NFT/NFTBox";
import NFTExternal from "./components/Pages/NFT/NFTExternal";
import NFTLoans from "./components/Pages/NFT/NFTLoans";
import NFTLootboxes from "./components/Pages/NFT/NFTLootboxes";
import NFTMainPage from "./components/Pages/NFT/NFTMainPage";
import NFTMyLoans from "./components/Pages/NFT/NFTMyLoans";
import NFTMyLootboxes from "./components/Pages/NFT/NFTMyLootboxes";
import NFTMyPurchases from "./components/Pages/NFT/NFTMyPurchases";
import NFTMySales from "./components/Pages/NFT/NFTMySales";
import MyBets from "./components/Pages/Sports/MyBets/MyBets";
import Sports from "./components/Pages/Sports/Sports";
import SportsHeader from "./components/Pages/Sports/SportsHeader/SportsHeader";
import ProtectedRoute from "./components/Router/ProtectedRoute";
import AccountPageLayout from "./components/home/Account/AccountPageLayout";
import BalancesPage from "./components/home/Account/Balances/Balances";
import Deposits from "./components/home/Account/Deposits/Deposits";
import Profile from "./components/home/Account/Profile/Profile";
import Referrals from "./components/home/Account/Referrals/Referrals";
import Settings from "./components/home/Account/Settings/Settings";
import Withdrawals from "./components/home/Account/Withdrawals/Withdrawals";
import PageFooter from "./components/home/Footer/PageFooter";
import {
  ContentLayout,
  PageLayout,
  SportsContentLayout,
} from "./components/home/MainHome/styles";
import NavBar from "./components/home/header/NavBar";
import SideBar from "./components/home/header/SideBar";

const routesConfig = [
  { path: "/sports", component: Sports },
  { path: "/my-bets", component: MyBets },
  { path: "/nft/marketplace", component: Marketplace },
  { path: "/nft/marketplace/my-sales", component: NFTMySales },
  { path: "/nft/marketplace/my-purchases", component: NFTMyPurchases },
  { path: "/nft/marketplace/box", component: NFTBox },
  { path: "/nft/portfolio", component: MyNFTs },
  { path: "/nft/my-loans", component: NFTMyLoans },
  { path: "/nft/external", component: NFTExternal },
  { path: "/nft/lobby/rollbots", component: ManageRollbots },
  { path: "/nft/lobby/sportsbots", component: ManageSportsbots },
  { path: "/manage-akbots", component: ManageRollbots },
  { path: "/manage-sportsbots", component: ManageSportsbots },
  { path: "/nft/lootboxes/play", component: NFTLootboxes },
  { path: "/nft/lootboxes/manage", component: NFTMyLootboxes },
  { path: "/nft/details", component: NFTDetails },
  // Add more routes as needed
];

function App() {
  const { isSidebarOpen, isChatBoxOpen, selectedOption } =
    useContext(AppContext);

  const isSportsRoute = selectedOption === "/sports";
  const isMyBetsRoute = selectedOption === "/my-bets";

  return (
    <BrowserRouter>
      <NavBar />
      <SideBar />

      <PageLayout isSidebarOpen={isSidebarOpen} isChatBoxOpen={isChatBoxOpen}>
        {isSportsRoute || isMyBetsRoute ? <SportsHeader /> : null}
        {routesConfig.some((route) => route.path === selectedOption) ? (
          <SportsContentLayout>
            <Routes>
              {routesConfig.map((route) => (
                <Route path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </SportsContentLayout>
        ) : (
          <ContentLayout>
            <Routes>
              <Route exact path="/" element={<HomeAppBar />} />
              <Route
                path="/account/profile"
                element={
                  <ProtectedRoute>
                    <AccountPageLayout>
                      <Profile />
                    </AccountPageLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account/balances"
                element={
                  <ProtectedRoute>
                    <AccountPageLayout>
                      <BalancesPage />
                    </AccountPageLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account/referrals/:tab"
                element={
                  <ProtectedRoute>
                    <AccountPageLayout>
                      <Referrals />
                    </AccountPageLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account/deposits/:tab"
                element={
                  <ProtectedRoute>
                    <AccountPageLayout>
                      <Deposits />
                    </AccountPageLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account/withdrawals/:tab"
                element={
                  <ProtectedRoute>
                    <AccountPageLayout>
                      <Withdrawals />
                    </AccountPageLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/account/settings"
                element={
                  <ProtectedRoute>
                    <AccountPageLayout>
                      <Settings />
                    </AccountPageLayout>
                  </ProtectedRoute>
                }
              />

              {/* CASINO */}
              <Route path="/casino" element={<Casino />} />
              <Route path="/ak-originals" element={<AKOriginals />} />
              <Route path="/blackjack" element={<Blackjack />} />
              <Route path="/bonus-battles" element={<BonusBattles />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/game-shows" element={<GameShows />} />
              <Route path="/live-casino" element={<LiveCasino />} />
              <Route path="/rollercoaster" element={<Rollercoaster />} />
              <Route path="/roulette" element={<Roulette />} />
              <Route path="/slots" element={<Slots />} />
              <Route path="/with-challenges" element={<WithChallenges />} />
              <Route path="/with-sidebets" element={<WithSidebets />} />

              {/* NFT */}
              <Route path="/nft" element={<NFTMainPage />} />
              <Route path="/nft/loans" element={<NFTLoans />} />
              <Route path="/nft/details" element={<NFTDetails />} />
            </Routes>
          </ContentLayout>
        )}

        <PageFooter />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
