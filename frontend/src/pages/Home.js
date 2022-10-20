import logo from '../logo.svg';
import '../css/App.css';
import {Link} from "react-router-dom";
import {getAllTracks} from "../services/trackService";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import React from "react";



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
            <select>
                <option value="Genres">Genres</option>
                <option value="Rap">Rap</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
            </select>

            <select>
                <option value="Artists">Artists</option>
                <option value="Artist1">Drake</option>
                <option value="Artist2">SZA</option>
                <option value="Artist3">Selena Gomez</option>
            </select>

            <select>
                <option value="Songs">Songs</option>
                <option value="Song1">Song1</option>
                <option value="Song2">Song2</option>
                <option value="Song3">Song3</option>
            </select>

            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />

                <p>
                    MUSIC INSIGNTS
                </p>
                <p>
                    Track your fav Musicians!!!!
                </p>
                <Link to="/chart">
                    <Button>Try It</Button>
                </Link>

            </header>

        </div>
    );
}

export default Home;
