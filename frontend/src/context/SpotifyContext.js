import { createContext, useReducer } from 'react'
import axios from 'axios'
import spotifyReducer from './SpotifyReducer'

const SpotifyContext = createContext();
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
const SPOTIFY_API = process.env.REACT_APP_SPOTIFY_API;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const SONGSTATS_TOKEN = process.env.REACT_APP_SONGSTATS_TOKEN;

export const SpotifyProvider = ({children}) => {
    const initialState = {
        token: '',
        genres: [],
        album: [],
        playlists: [],
        trackStats: []
    }

    const [state, dispatch] = useReducer(spotifyReducer, initialState);
    const getToken = async () => {
        setLoading();
        const data = await axios(`${AUTH_ENDPOINT}`, {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        });
        if(data) {
            dispatch({
                type: 'GET_TOKEN',
                payload: data.data.access_token,
            });
        } else {
            console.log('Token not available. Please check Spotify Developer Settings.')
        }
    };

    const getGenres = async () => {
        setLoading();
        const url = `${SPOTIFY_API}/browse/categories?country=US&offset=0&limit=40`;
        const config = {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + state.token
            }
        }
        const genres = await axios.get(url, config)
        if(genres) {
            console.log(genres.data.categories.items)
            dispatch({
                type: 'GET_GENRES',
                payload: genres.data.categories.items
            });
        }
    }

    const getTrackHistoricStats = async () => {
        setLoading();
        const url = `https://api.songstats.com/enterprise/v1/tracks/historic_stats`;
        const config = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'apikey': '9f7dea9f-fede-4d69-bb48-8e7d37380695',
            },
            params: {
                'source' : 'spotify',
                'songstats_artist_id' : '3TVXtAsR1Inumwj472S9r4',
                'spotify_track_id' : '1bDbXMyjaUIooNwFE9wn0N',
                'end_date' : '2022-11-13'
            }
        }

        const historicTrackStats = await axios.get(url, config);
        if(historicTrackStats) {
            dispatch({
                type: 'GET_TRACK_STATS',
                payload: historicTrackStats
            })
        }
        return historicTrackStats;
    }

    const getTracksInAlbum = async (id) => {
        setLoading();
        const url = `${SPOTIFY_API}/albums/${id}`
        const config = {
            headers: {
                Authorization : 'Bearer ' + state.token
            },
        };

        const album = await axios.get(url, config);
        if(album) {
            console.log(album)
            dispatch({
                type: 'GET_ALBUM',
                payload: album
            })
        }
        return album;
    }

    const getPlaylists = async () => {
        console.log('Gotta build out the function first! :)')
    }

    const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <SpotifyContext.Provider value={{
        token: state.token,
        genres: state.genres,
        tracksInAlbum: state.album,
        playlists: state.playlists,
        historicTrackStats: state.trackStats,
        getToken,
        getGenres,
        getTrackHistoricStats,
        getTracksInAlbum,
        getPlaylists,
    }}>
        {children}
    </SpotifyContext.Provider>
};

export default SpotifyContext;