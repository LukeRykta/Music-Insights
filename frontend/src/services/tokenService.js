import axios from "axios";
const apiUrl =  process.env.REACT_APP_API_URL;

export const getSpotifyTrack = async () => {
    const url = 'https://api.spotify.com/v1/tracks/6AdQ1rD4U0GippNGIm7wJ7?si=ca1d31827f604339';
    const token = 'BQA0KQYqvun6DLs5PQiyzFTxJ0CFyH1EkmZt2Lbp85g3p7U1D3HtP7YT6PBLhlkRE3Oc7VW-Mg52xpiux1ODuiEAreYkDKQKKRlX1Qwxzqwybx3lGdTuZd8yjBkvdujZ_XdzGNJ-0A25sCR4Ms6FcxE3nUp1vrXa_yaZbNyOox0iQiZEcH6a9GP5VeVltYUe'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}

export const getTracksInAlbum = async () => {
    const url = 'https://api.spotify.com/v1/albums/6OQ9gBfg5EXeNAEwGSs6jK?si=W9WF0lXLQyiwVlsiTG9IHA'
    const token = 'BQDYphJyhZJDamgXvPVSxOTP1_YEoc0ZNl330RSx2XfFnedF_apT42Pr2IorE9AgYg1G25ndO04XeaSDkGcGzNEb8iytIAP5v8Et0kCiW49pEv1lAG-zLtRTs_rhCe-BYeHLY-k5vJFb87M3ZaGvpTWIlZO8M_PqlVeo0_fgS45tPuV9CFcSkpVfjYaxpv9a'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}
