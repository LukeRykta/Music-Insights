import axios from "axios";
const apiUrl =  process.env.REACT_APP_API_URL;

export const getAllTracks = async () => {
    return await axios.get(`${apiUrl}/tracks`);
}

export const getTrackById = async (id) => {
    return await axios.get(`${apiUrl}/tracks/track/${id}`);
}