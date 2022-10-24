import './css/NavBar.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import TrackInfo from "./pages/TrackInfo";

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/chart" element={<Chart />} />
                <Route path="/track" element={<TrackInfo />} />
                <Route path="/track/:id" element={<TrackInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
