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
import ScramblePage from "./pages/ScramblePage/ScramblePage";
import About from "./pages/About/About";
import GolfNews from "./pages/GolfNews/GolfNews";

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
        <Route path="/courses" element={<PrivateRoute><CoursePage /></PrivateRoute>} />
        <Route path="/videos" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
        <Route path="/course/elkriver" element={<PrivateRoute><ElkRiverPage /></PrivateRoute>} />
        <Route path="/course/neosho" element={<PrivateRoute><NeoshoPage/></PrivateRoute>} />
        <Route path="/course/shangrila" element={<PrivateRoute><ShangriLaPage /></PrivateRoute>} />
        <Route path="/course/patricaisland" element={<PrivateRoute><PatricaIslandPage /></PrivateRoute>} />
        <Route path="/scrambles" element={<PrivateRoute><ScramblePage /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/golfnews" element={<PrivateRoute><GolfNews /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;