import axios from "axios";
const apiUrl = 'https://api.spotify.com/v1/'

export const getSpotifyTrack = async () => {
    const url = `${apiUrl}tracks/6AdQ1rD4U0GippNGIm7wJ7?si=ca1d31827f604339`;
    const token = 'BQC1BuNHFGLMm38VnZkRzIWjahhHskkllU9w-WZYsu5qQibjsVbwx7T-eHwC_IcVSXPBNRzpzcZt3HtMb2dFg219_rO5FBQ6Q5HfnmokBQBrKu0sRkHXIwRCkLs0eix_Kq1LEoQRxwQPGrXjKPF0_xE3U7i3fOcJN7-J6cUa3sWfabaDJRLNLTlvbVkH86Fq'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}

export const getTracksInAlbum = async (id) => {
    const url = `${apiUrl}albums/${id}`
    const token = 'BQC1BuNHFGLMm38VnZkRzIWjahhHskkllU9w-WZYsu5qQibjsVbwx7T-eHwC_IcVSXPBNRzpzcZt3HtMb2dFg219_rO5FBQ6Q5HfnmokBQBrKu0sRkHXIwRCkLs0eix_Kq1LEoQRxwQPGrXjKPF0_xE3U7i3fOcJN7-J6cUa3sWfabaDJRLNLTlvbVkH86Fq'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}
