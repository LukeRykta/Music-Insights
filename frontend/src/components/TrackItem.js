import {Button, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './TrackItem.css';

const TrackCard = ({ obj }) => {
    return (
        <Card className ="trackCard" style={{ width: '12rem', height: 'auto'}}>
            <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>{obj.artist}</Card.Text>
                <Link to={`/track/${obj._id}`}>
                    <Button className="btn-success">
                        View Track Details
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default TrackCard;