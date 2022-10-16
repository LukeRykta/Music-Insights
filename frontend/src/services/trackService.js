import axios from "axios";
const apiUrl = 'http://localhost:5000/api'

export const getAllTracks = async () => {
    return await axios.get(`${apiUrl}/tracks`);
}