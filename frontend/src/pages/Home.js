import logo from '../logo.svg';
import '../css/App.css';
import {Link} from "react-router-dom";
import {getAllTracks} from "../services/trackService";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import React from "react";
import TrackCard from "../components/TrackItem";

const Home = () => {
    const [tracks, setTracks] = useState([]);
    const relevant_tracks = [];

    tracks.forEach(function (track){
        relevant_tracks.push(track);
    });

    useEffect(() => {
        getTracks().then(r => console.log(r));
    }, [])

    async function getTracks() {
        const response = await getAllTracks();
        setTracks(response.data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />

                <h1>Welcome to Music Insights</h1>

                <p className="welcomeDescription">
                    Find out how relevant your favorite albums are
                </p>

                <Link to="/chart">
                    <Button className="btn-success">Try It Out</Button>
                </Link>
                <Button className="btn-success mt-2" onClick={getTracks}>Get Songs</Button>
                <div className="container">
                    <div className="row mt-3">
                        {relevant_tracks.map((track) => (
                            <div key={track._id} className="px-5 my-3 col-lg-3 col-md-6 col-sm-12">
                                <TrackCard obj={track} />
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
