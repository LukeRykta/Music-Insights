import './css/NavBar.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SpotifyProvider} from './context/SpotifyContext';
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import NotFound from "./pages/NotFound";
import TrackInfo from "./pages/TrackInfo";
import Newhome from "./pages/Newhome";

function AppRouter() {
    return (
        <SpotifyProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Newhome />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/newhome" element={<Home />} />
                    <Route path="/chart" element={<Chart />} />
                    <Route path="/track" element={<TrackInfo />} />
                    <Route path="/track/:id" element={<TrackInfo />} />
                </Routes>
            </BrowserRouter>
        </SpotifyProvider>
    );
}

export default AppRouter;
