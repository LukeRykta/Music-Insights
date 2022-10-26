import axios from "axios";
const apiUrl = 'https://api.spotify.com/v1/'

export const getSpotifyTrack = async () => {
    const url = `${apiUrl}tracks/6AdQ1rD4U0GippNGIm7wJ7?si=ca1d31827f604339`;
    const token = 'BQDCQRcdlFrHGTnrGmKZ2Uahaivpu9-HZf8iyVnS1qWKu8b6ZaGiZanMaKbnD5FBPkN_Vgo-IXi-WLzLmABKUdogzTqNcEn7a_S4wkqwVGMx-j7ETI_cDYK4J0Jx_fJdJy8EMhaLOYJa4LEldIyDvNVDV3mkRiUmWIc5-STkAXaJ6iD_fL6W9tnREfSBrzBa'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}

export const getTracksInAlbum = async (id) => {
    const url = `${apiUrl}albums/${id}`
    const token = 'BQDCQRcdlFrHGTnrGmKZ2Uahaivpu9-HZf8iyVnS1qWKu8b6ZaGiZanMaKbnD5FBPkN_Vgo-IXi-WLzLmABKUdogzTqNcEn7a_S4wkqwVGMx-j7ETI_cDYK4J0Jx_fJdJy8EMhaLOYJa4LEldIyDvNVDV3mkRiUmWIc5-STkAXaJ6iD_fL6W9tnREfSBrzBa'
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return await axios.get(url, config);
}
