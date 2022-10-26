import logo from '../logo.svg';
import '../css/App.css';
import {Link} from "react-router-dom";
import {getAllTracks, getTrackById} from "../services/trackService";
import {getSpotifyTrack, getTracksInAlbum} from "../services/spotifyService";
import {useEffect, useState} from "react";
import {Button, Form, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";
import React from "react";
import TrackCard from "../components/TrackItem";

const Home = () => {
    const defaultAlbum = '3SpBlxme9WbeQdI9kx7KAV';

    const [tracks, setTracks] = useState([]);
    const [token, setToken] = useState(['no response']);
    const [art, setArt] = useState([]);
    const [album, setAlbum] = useState([]);
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState(defaultAlbum);

    const db_tracks = [];
    const track_names = [];
    const track_ids = [];

    useEffect(() => {
        getTracks().then(r => console.log("getTracks called..."));

                //     .then(response => setAlbum(response.data))
                //     .catch(error => console.log(error));
    }, [])

    async function getTracks() {
        const response = await getAllTracks();
        setTracks(response.data);
    }

    async function getAlbum(search){
        const response = await getTracksInAlbum(search);
        console.log(response.data);
        setAlbum(response.data);
        setSongs(album.tracks.items);
        setArt(album.images[1].url);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getAlbum(search)
            .then(r => console.log("form submitted... awaiting api results"))
            .catch(error => console.log(error))
        //setSearch("");
    }

    tracks.forEach(function (track){
        db_tracks.push(track);
    });

    songs.forEach(function (song){
        track_names.push(song.name);
        track_ids.push(song.id);
    })

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

                </div>

                <div className="title container">

                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="mb-3" controlId="formBasicInput">
                            <FormControl
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                type="text"
                                placeholder="album id"
                                className="mt-3"/>
                            <FormText className="text-muted">
                                Enter an Album ID to return song list
                            </FormText>
                        </FormGroup>
                    </Form>

                </div>

                {album.name}
                <div className="child">
                    <img className="category"
                         src={art}
                    />
                </div>
                <div className="parent">
                    <div className="child">
                        <div className="category">
                            Song List
                        </div>
                        {track_names.map((name) =>(
                            <div>
                                {name}
                            </div>
                        ))}
                    </div>
                    <div className="child">
                        <div className="category">
                            Track-Ids
                        </div>
                        {track_ids.map((id) =>(
                            <div>
                                {id}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-3">
                        {db_tracks.map((track) => (
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
