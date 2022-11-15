import {Button, Card, Placeholder} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './TrackItem.css';

const TrackCard = ({ obj }) => {
    let loaded = false;
    if (obj){
        loaded = true;
    }

return (
    <div className="d-flex justify-content-around">
        {loaded ? (
            <Card className ="trackCard" style={{ width: '12rem', height: 'auto'}}>
                <Card.Body>
                    <Card.Title>{obj.title}</Card.Title>
                    <Link to={`/track/${obj._id}`}>
                        <Button className="btn-success">
                            View Track Details
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
            ) : (
                <Card className= "trackCard" style={{ width: '12rem' }}>
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={9} />
                        </Placeholder>

                        <Placeholder.Button variant="success" xs={11} />
                    </Card.Body>
                </Card>
            )
        }
    </div>
    );
};

export default TrackCard;
