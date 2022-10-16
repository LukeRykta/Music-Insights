import logo from '../logo.svg';
import '../css/App.css';
import {Link} from "react-router-dom";
import {getAllTracks} from "../services/trackService";
import {useEffect, useState} from "react";



const Home = () => {
    const [tracks, setTracks] = useState({
        title: "",
        artist: ""
    });

    const handleChange = (event) => {

    }
    async function getTracks() {
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Home Page
                </p>
                <Link to="/chart">go to chart</Link>
            </header>
        </div>
    );
}

export default Home;
