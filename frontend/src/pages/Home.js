import logo from '../logo.svg';
import '../css/App.css';
import {Link} from "react-router-dom";
import {getAllTracks, getTrackById} from "../services/trackService";
import {getSpotifyTrack, getTracksInAlbum} from "../services/tokenService";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import React from "react";
import TrackCard from "../components/TrackItem";

const Home = () => {
    const [tracks, setTracks] = useState([]);
    const [token, setToken] = useState(['no response']);
    const [album, setAlbum] = useState([]);
    const [songs, setSongs] = useState([]);
    const relevant_tracks = [];
    const spotify_tracks = [];

    tracks.forEach(function (track){
        relevant_tracks.push(track);
    });

    songs.forEach(function (song){
        spotify_tracks.push(song.name);
        console.log(song.name);
    })

    useEffect(() => {
        getTracks().then(r => console.log("getTracks called..."));
        getAlbum().then(r => console.log("getTracksInAlbum called..."));
    }, [])

    async function getTracks() {
        const response = await getAllTracks();
        setTracks(response.data);
    }

    async function getAlbum(){
        const response = await getTracksInAlbum();
        console.log(response.data);
        setAlbum(response.data);
        setSongs(album.tracks.items);
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
                <div className="flex-row">
                    <Link to="/chart">
                        <Button className="btn-success">Try It Out</Button>
                    </Link>
                    <Button className="btn-success m-2" onClick={getTracks}>Refresh Songs</Button>
                    <Button className="btn-success" onClick={getAlbum}>Get Album</Button>
                </div>
                <div>
                    Album: {album.name}
                    <br/>
                    Popularity: {album.popularity}
                    <br/>
                    {spotify_tracks.map((song) =>(
                        <div>
                            {song}
                        </div>
                    ))}
                </div>
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
