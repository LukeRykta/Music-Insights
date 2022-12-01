import './css/NavBar.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SpotifyProvider} from './context/SpotifyContext';
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import NotFound from "./pages/NotFound";
import TrackInfo from "./pages/TrackInfo";
import Newhome from "./pages/Newhome";
import ResultsPage from "./pages/ResultsPage";
import {useState} from "react";

function AppRouter() {

    const [search, setSearch] = useState('')

    const handleSearchChange = (event) => {
        setSearch(event);
    }

    return (
        <SpotifyProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Newhome
                            search={search}
                            handleSearchChange={handleSearchChange}
                        />
                    } />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/results" element={
                        <ResultsPage
                            search={search}
                            handleSearchChange={handleSearchChange}
                        />
                    }/>
                    <Route path="/chart" element={<Chart />} />
                    <Route path="/track" element={<TrackInfo />} />
                    <Route path="/track/:id" element={<TrackInfo />} />
                </Routes>
            </BrowserRouter>
        </SpotifyProvider>
    );
}

export default AppRouter;
