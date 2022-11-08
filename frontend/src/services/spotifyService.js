import axios from "axios";

const apiUrl = 'https://api.spotify.com/v1/'

export const getSpotifyTrack = async () => {
    const url = `${apiUrl}tracks/6AdQ1rD4U0GippNGIm7wJ7?si=ca1d31827f604339`;
    const config = {
        headers: {
            Authorization: `Bearer` + state.token,
        },
    };

    return await axios.get(url, config);
}

export const getTrack = async (id) => {
    const url = `${apiUrl}tracks/${id}`
    const token = getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}

