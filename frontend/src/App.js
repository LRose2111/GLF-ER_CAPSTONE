// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import CoursePage from "./pages/CoursePage/CoursePage";
import SplashPage from "./pages/SplashPage/SplashPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import NeoshoPage from "./pages/NeoshoPage/NeoshoPage";
import PatricaIslandPage from "./pages/PatriciaIslandPage/PatriciaIslandPage";
import ShangriLaPage from "./pages/ShangriLaPage/ShangriLaPage";
import ElkRiverPage from "./pages/ElkRiverPage/ElkRiverPage";
import ScramblePage from "./pages/ListingPage/ScramblePage";
import About from "./pages/About/About";
import GolfNews from "./pages/GolfNews/GolfNews";
import MWMPage from "./pages/MWMPage/MWM";
import SWMOPage from "./pages/SWMOPage/SWMO";
import WHPage from "./pages/WHPage/WH";
import WTPage from "./pages/WTPage/WT";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/default" element={<SplashPage />} />
        <Route path="/publicland" element={<PrivateRoute><CoursePage /></PrivateRoute>} />
        <Route path="/videos" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
        <Route path="/publicland/shawnee" element={<PrivateRoute><ElkRiverPage /></PrivateRoute>} />
        <Route path="/publicland/schell" element={<PrivateRoute><NeoshoPage/></PrivateRoute>} />
        <Route path="/publicland/bushwacker" element={<PrivateRoute><ShangriLaPage /></PrivateRoute>} />
        <Route path="/publicland/fourrivers" element={<PrivateRoute><PatricaIslandPage /></PrivateRoute>} />
        <Route path="/listing/mwm" element={<PrivateRoute><MWMPage /></PrivateRoute>} />
        <Route path="/listing/whp" element={<PrivateRoute><WHPage/></PrivateRoute>} />
        <Route path="/listing/swmo" element={<PrivateRoute><SWMOPage /></PrivateRoute>} />
        <Route path="/listing/wt" element={<PrivateRoute><WTPage /></PrivateRoute>} />
        <Route path="/listings" element={<PrivateRoute><ScramblePage /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/news" element={<PrivateRoute><GolfNews /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;