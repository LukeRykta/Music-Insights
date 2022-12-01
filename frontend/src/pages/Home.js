import logo from '../logo.svg';
import '../css/App.css';
import {Link} from "react-router-dom";
import {getAllTracks} from "../services/trackService";
import {useContext, useEffect, useState} from "react";
import {Button, Form, FormControl, FormGroup, FormText} from "react-bootstrap";
import React from "react";
import TrackCard from "../components/results/TrackItem";
import SpotifyContext from "../context/SpotifyContext";
import GenreResults from "../components/results/GenreResults";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar/NavBar";
import tempAlbumArt from "../assets/tempAlbumArt.png";

const Home = () => {
    const defaultAlbum = '4j8uA4o5U4eoZJ2jXbNklD';
    const {getToken, getGenres} = useContext(SpotifyContext);
    const {getTracksInAlbum} = useContext(SpotifyContext);
    const {getTrackHistoricStats} = useContext(SpotifyContext);
    const [tracks, setTracks] = useState([]);
    const [art, setArt] = useState(tempAlbumArt);
    const [album, setAlbum] = useState([]);
    const [albumTitle, setAlbumTitle] = useState('Album Title');
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState(defaultAlbum);
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const db_tracks = [];
    const track_names = [];
    const track_ids = [];

    useEffect(() => {
        (async () => {
            getTracks();
        })();

        return () => {
            // perform component unmount cleanup
        }
    }, []);

    useEffect(() => {
        //getAlbum(search).then(r => console.log("useEffect get album triggered - r=" + r));
    }, []);

    useEffect(() => {
        getToken()
    }, [])

    async function getTracks() {
        const response = await getAllTracks();
        setTracks(response.data);
    }

    async function getTrackHistory() {
        const response = await getAllTracks();
        setTracks(response.data);
    }

    async function getAlbum(search){
        const response = await getTracksInAlbum(search);
        setAlbum(response.data);
        setSongs(album.tracks.items);
        setAlbumTitle(album.name);
        setArt(album.images[1].url);
    }

    async function getStatTracks() {
        const response = await getTrackHistoricStats();
        console.log(response);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getAlbum(search)
            .then(r => console.log(r + " form submitted... awaiting api results"))
            .catch(error => console.log(error))
    }

    tracks.forEach(function (track){
        db_tracks.push(track);
    });

    songs.forEach(function (song){
        track_names.push(song.name);
        track_ids.push(song.id);
    })

    return (
        <>
            <div className="App">
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Navbar toggle={toggle} />
                <header className="App-header header-color">
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"
                    />
                    <div className="box-shadow-test p-5">
                        <h1 className="">Welcome to Music Insights</h1>
                        <p className="welcomeDescription">
                            Find out how relevant your favorite albums are
                        </p>

                        <div className="flex-row">
                            <Link to="/chart">
                                <Button className="btn-success">Try It Out</Button>
                            </Link>
                            <Button className="btn-warning m-2" onClick={getGenres}>
                                Get Genres
                            </Button>
                            <Button className="btn-success" onClick={getTracks}>Refresh Songs</Button>
                            <Button className="btn-success m-2" onClick={getStatTracks}>stat</Button>
                        </div>
                    </div>

                    <div className="main">
                        <div className="flex-row">
                            <GenreResults />
                        </div>
                    </div>

                    <div className="title container">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup className="mb-3" controlId="formBasicInput">
                                <FormControl
                                    onChange={(e) => setSearch(e.target.value)}
                                    value={search}
                                    type="text"
                                    placeholder="album id"
                                    className="mt-3"
                                />
                                <FormText className="text-muted">
                                    Enter an Album ID to return song list
                                </FormText>
                            </FormGroup>
                        </Form>
                    </div>

                    {albumTitle}
                    <div className="child">
                        <img className="category grow"
                             style={{maxWidth: 250}}
                             src={art}
                             alt="albumArt"
                        />
                    </div>
                    <div className="parent">
                        <div className="child">
                            <div className="category">
                                Song List
                            </div>
                            {track_names.map((name) =>(
                                <div key={name}>
                                    {name}
                                </div>
                            ))}
                        </div>
                        <div className="child">
                            <div className="category">
                                Track-Ids
                            </div>
                            {track_ids.map((id) =>(
                                <div key={id}>
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
        </>
    );
}

export default Home;
