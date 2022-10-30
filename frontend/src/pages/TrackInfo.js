import {useEffect, useState} from "react";
import {getTrackById} from "../services/trackService";
import {useParams} from "react-router-dom";

const TrackInfo = () => {

    const [track, setTrack] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getTrack();
    }, []);

    const getTrack = async () => {
        const response = await getTrackById(id);
        setTrack(response.data);
    }
    return (
        <header className="App-header">
            <h1 className="card-header">{track.title}</h1>
            by
            <span style={{color: "#00FFA7FF"}}>{track.artist}</span>
        </header>
    )
}

export default TrackInfo;