import axios from "axios";
const apiUrl = 'https://api.spotify.com/v1/'

export const getSpotifyTrack = async () => {
    const url = `${apiUrl}tracks/6AdQ1rD4U0GippNGIm7wJ7?si=ca1d31827f604339`;
    const token = 'BQCi-AFo2e4AzrSGY37vnXFD_0KkeFVRV3QwgsohaHHhGuBQZDQiHbD7TnOULqgrmB1UBr7_mrKrFxnvpB4WgxVrTGpufareGQdTSbG0Oqd8kuh8z3CViVSu5AnBCHuzEk9NaNJrhAmqGpAOtKjD6ZXKRTJMukq3KwrBi-Jt_v_Ae2zKILPeybAJbYV7kJCR'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}

export const getTracksInAlbum = async (id) => {
    const url = `${apiUrl}albums/${id}`
    const token = 'BQCi-AFo2e4AzrSGY37vnXFD_0KkeFVRV3QwgsohaHHhGuBQZDQiHbD7TnOULqgrmB1UBr7_mrKrFxnvpB4WgxVrTGpufareGQdTSbG0Oqd8kuh8z3CViVSu5AnBCHuzEk9NaNJrhAmqGpAOtKjD6ZXKRTJMukq3KwrBi-Jt_v_Ae2zKILPeybAJbYV7kJCR'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}
