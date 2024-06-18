import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./view/register/Register";
import LogIn from "./view/logIn/LogIn";
import Home from "./pages/home/Home";
import Prices from "./pages/pices/Prices";
import HomeLayout from "./layouts/homeLayout/HomeLayout";
import Welcome from "./pages/workspaces/welcome/Welcome";
import Profile from "./pages/workspaces/profile/Profile";
import Referral from "./pages/workspaces/referral/Referral";
import Premade from "./pages/workspaces/premade/Premade";
import FillUp from "./pages/workspaces/fillUp/FillUp";
import PrivateRoute from "./routes/PrivateRoute";
import Error404 from "./view/errors/Error404";
import OwnWord from "./pages/workspaces/ownWord/OwnWord";
import FillUpById from "./pages/workspaces/fillUp/FillUpById";
import PremadeById from "./pages/workspaces/premade/PremadeById";
import About from "./pages/about/About";
import HowItWork from "./pages/how-it-work/HowItWork";
import EmailVerify from "./view/emailVerify/EmailVerify";
import EmailConfirmed from "./view/emailVerify/EmailConfirmed";
import { Bars } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const loading = useSelector((state: RootState) => state.loader.active);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWork />} />
            <Route path="/pricing" element={<Prices />} />
            <Route path="/register" element={<Register />} />
            <Route path="/emailVerify" element={<EmailVerify />} />
            <Route path="/confirmed-email" element={<EmailConfirmed />} />
            <Route path="/login" element={<LogIn />} />
            <Route element={<PrivateRoute />}>
              <Route path="welcome" element={<Welcome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="referral" element={<Referral />} />
              <Route path="premade" element={<Premade />} />
              <Route path="premade/:ID" element={<Premade />} />
              <Route path="premade-data/:ID" element={<PremadeById />} />
              <Route path="fillup" element={<FillUp />} />
              <Route path="fillup/:ID" element={<FillUp />} />
              <Route path="fillup-data/:ID" element={<FillUpById />} />
              <Route path="ownWord/:ID" element={<OwnWord />} />
            </Route>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      {loading && (
        <Bars
          height="80"
          width="80"
          color="#EE4335"
          ariaLabel="bars-loading"
          wrapperStyle={{
            position: "fixed",
            inset: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          wrapperClass=""
        />
      )}
    </>
  );
}

export default App;
