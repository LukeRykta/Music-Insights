import axios from "axios";
const apiUrl =  process.env.REACT_APP_API_URL;

export const getSpotifyTrack = async () => {
    const url = 'https://api.spotify.com/v1/tracks/6AdQ1rD4U0GippNGIm7wJ7?si=ca1d31827f604339';
    const token = 'BQAHPgc_rDMdpH52iJCbeF0z_UHlR-7FQ36I4fLui12ki0ggY-qefMd4cgc12kzSYj_tIjvipLVQlt9sMQDzY263CA6OgAPQfn6g6G3zJfYBZL7q_GtSPulHTa82GfHF-788gHnL0CPVdf0Eo0K8SaTSlfI7DIRLsy-h9kuWh6IB9L11QssmA1tiztio7cNX'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}

export const getTracksInAlbum = async () => {
    const url = 'https://api.spotify.com/v1/albums/6OQ9gBfg5EXeNAEwGSs6jK?si=W9WF0lXLQyiwVlsiTG9IHA'
    const token = 'BQAHPgc_rDMdpH52iJCbeF0z_UHlR-7FQ36I4fLui12ki0ggY-qefMd4cgc12kzSYj_tIjvipLVQlt9sMQDzY263CA6OgAPQfn6g6G3zJfYBZL7q_GtSPulHTa82GfHF-788gHnL0CPVdf0Eo0K8SaTSlfI7DIRLsy-h9kuWh6IB9L11QssmA1tiztio7cNX'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}
