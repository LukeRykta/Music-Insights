import axios from "axios";
const apiUrl = 'https://api.spotify.com/v1/'

export const getSpotifyTrack = async () => {
    const url = `${apiUrl}tracks/6AdQ1rD4U0GippNGIm7wJ7?si=ca1d31827f604339`;
    const token = 'BQBR30mSzU6YAOjq58UTDAK_StsICCP0Y4k1CS6BLDOIB4l0UjoTpyFD_D089Rc493Ba3pT2lIDeF2J6oTr_KHmQcqFAuGxXr_4xzP7M1OfaJmtFbQBOOMCfiJnTH5vXjI67uLE7y9YWq8Oit8m-dThCxk1CEbm4buj2wLd0NnjS9PYKRXBZYYpHYrdqJX86'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}

export const getTracksInAlbum = async (id) => {
    const url = `${apiUrl}albums/${id}`
    const token = 'BQBR30mSzU6YAOjq58UTDAK_StsICCP0Y4k1CS6BLDOIB4l0UjoTpyFD_D089Rc493Ba3pT2lIDeF2J6oTr_KHmQcqFAuGxXr_4xzP7M1OfaJmtFbQBOOMCfiJnTH5vXjI67uLE7y9YWq8Oit8m-dThCxk1CEbm4buj2wLd0NnjS9PYKRXBZYYpHYrdqJX86'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}
