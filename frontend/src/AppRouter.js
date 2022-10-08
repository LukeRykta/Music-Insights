import './css/NavBar.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/chart" element={<Chart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
