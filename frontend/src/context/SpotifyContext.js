import { createContext, useReducer } from 'react'
import axios from 'axios'
import spotifyReducer from './SpotifyReducer'

const SpotifyContext = createContext();
const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
const SPOTIFY_API = process.env.REACT_APP_SPOTIFY_API;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const SpotifyProvider = ({children}) => {
    const initialState = {
        token: '',
        genres: [],
        album: [],
        playlists: [],
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
            //console.log("album has context");
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
        getToken,
        getGenres,
        getTracksInAlbum,
        getPlaylists,
    }}>
        {children}
    </SpotifyContext.Provider>
};

export default SpotifyContext;