import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import HomeAppBar from "./components/home/header/AppBar";

//reward section models

// deposit section models
import { useContext } from "react";
import { AppContext } from "./AppContext";
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
import NFTLoans from "./components/Pages/NFT/NFTLoans";
import NFTLootboxes from "./components/Pages/NFT/NFTLootboxes";
import MyBets from "./components/Pages/Sports/MyBets";
import Sports from "./components/Pages/Sports/Sports";
import ProtectedRoute from "./components/Router/ProtectedRoute";
import PageFooter from "./components/home/Footer/PageFooter";
import { ContentLayout, PageLayout } from "./components/home/MainHome/styles";
import BalancesPage from "./components/home/balances/Balances";
import NavBar from "./components/home/header/NavBar";
import SideBar from "./components/home/header/SideBar";
import Profile from "./components/home/profile/Profile";
import Referals from "./components/home/referals/Referals";
import Setting from "./components/home/setting/Setting";

function App() {
  const { isSidebarOpen, isChatBoxOpen } = useContext(AppContext);
  return (
    <BrowserRouter>
      <NavBar />
      <SideBar />

      <PageLayout isSidebarOpen={isSidebarOpen} isChatBoxOpen={isChatBoxOpen}>
        <ContentLayout>
          <Routes>
            <Route exact path="/" element={<HomeAppBar />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/balances"
              element={
                <ProtectedRoute>
                  <BalancesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/referrals"
              element={
                <ProtectedRoute>
                  <Referals />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Setting />
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
            <Route path="/manage-rollbots" element={<ManageRollbots />} />
            <Route path="/manage-sportsbots" element={<ManageSportsbots />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/nft-loans" element={<NFTLoans />} />
            <Route path="/nft-lootboxes" element={<NFTLootboxes />} />

            {/* SPORTS */}
            <Route path="/sports" element={<Sports />} />
            <Route path="/my-bets" element={<MyBets />} />

            {/* models */}
            {/* <Route path='/model' element={<WModel1 />} /> */}
            {/* <Route path='/model' element={<WModel2 />} />  */}
            {/* <Route path='/model' element={<WModel3 />} /> */}
            {/* <Route path='/model' element={<WModel4 />} /> */}
            {/* <Route path='/model' element={<WModel5 />} /> */}

            {/* <Route path='/model4' element={<DModel4 />} /> */}

            {/* <Route path='/model2' element={<DModel2 />} />  */}

            {/* //   <Route path='/model1' element={<DModel1 />} /> 
        //  <Route path='/model3' element={<DModel3 />} />
        //   <Route path='/model5' element={<DModel5 />} />
        //   <Route path='/model6' element={<DModel6 />} />
        //   <Route path='/model7' element={<DModel7 />} />   */}

            {/* <Route path='/model1' element={<Model1 />} />
        <Route path='/model2' element={<Model2 />} />
        <Route path='/model3' element={<Model3 />} />
        <Route path='/model4' element={<Model4 />} />
        <Route path='/model5' element={<Model5 />} /> */}
          </Routes>
        </ContentLayout>
        <PageFooter />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
