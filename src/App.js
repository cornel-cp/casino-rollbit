import { BrowserRouter, Routes, Route } from "react-router-dom";


//components
import HomeAppBar from "./components/home/header/AppBar";
import LoginAppBar from "./components/home/header/LoginAppBar";
import LoginBalances from "./components/home/balances/LoginBalances";
import LoginReferals from "./components/home/referals/LoginReferals";
import LoginSetting from "./components/home/setting/LoginSetting";


//reward section models
import Model1 from "./components/models/rewardModel/Model1";
import Model2 from "./components/models/rewardModel/Cop";
import Model3 from "./components/models/rewardModel/Model3";
import Model4 from "./components/models/rewardModel/Model4";
import Model5 from "./components/models/rewardModel/Model5";

// deposit section models
import DModel1 from "./components/models/depositModel/DModel1";
import DModel2 from "./components/models/depositModel/DModel2";
import DModel3 from "./components/models/depositModel/DModel3";
import DModel4 from "./components/models/depositModel/DModel4";
import DModel5 from "./components/models/depositModel/DModel5";
import DModel6 from "./components/models/depositModel/DModel6";
import DModel7 from "./components/models/depositModel/DModel7";
import WModel1 from "./components/models/withdrawalModel/WModel1";
import WModel2 from "./components/models/withdrawalModel/WModel2";
import WModel3 from "./components/models/withdrawalModel/WModel.3";
import WModel4 from "./components/models/withdrawalModel/WModel4";
import WModel5 from "./components/models/withdrawalModel/WModel5";






function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeAppBar />} />
        <Route exact path='/profile' element={<LoginAppBar />} />
        <Route exact path='/balances' element={<LoginBalances />} />
        <Route exact path='/referrals' element={<LoginReferals />} />
        <Route exact path='/settings' element={<LoginSetting />} />

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
    </BrowserRouter>

  )
}

export default App;
