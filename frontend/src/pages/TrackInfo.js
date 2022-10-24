import {useEffect, useState} from "react";
import axios from "axios";
import {getTrackById} from "../services/trackService";
import {useParams} from "react-router-dom";


const TrackInfo = () => {

    const [track, setTrack] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getTrack().then(r => console.log("get individual track: " + r));
    }, []);

    const getTrack = async () => {
        const response = getTrackById(id);
        setTrack(response.data);
    }
    return (
        <div>
            {track.artist}
        </div>
    )
}

export default TrackInfo;