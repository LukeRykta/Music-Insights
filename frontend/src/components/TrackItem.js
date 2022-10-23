import { Card } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './TrackItem.css';

const TrackCard = ({ obj }) => {
    return (
        <Card className ="trackCard" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>{obj.artist}</Card.Text>
                <Link className="btn" to={`/track/${obj._id}`}>
                    View Track Details
                </Link>
            </Card.Body>
        </Card>
    );
};

export default TrackCard;