import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function AlbumTray({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const iyrtitl = "https://upload.wikimedia.org/wikipedia/en/1/11/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png"
    const moreLife = "https://media.pitchfork.com/photos/5929c24b13d197565213bce1/1:1/w_600/ae52c98d.jpg"
    const scorpion = "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg"
    const darkLane = "https://upload.wikimedia.org/wikipedia/en/6/6b/Drake_-_Dark_Lane_Demo_Tapes.png"
    const views = "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg"
    const wattba = "https://upload.wikimedia.org/wikipedia/en/9/94/Drake_and_Future_-_What_a_Time_to_Be_Alive_cover.jpg"
    const nwts = "https://upload.wikimedia.org/wikipedia/en/4/42/Drake_-_Nothing_Was_the_Same_cover.png"
    const takeCare = "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg"
    const tml = "https://upload.wikimedia.org/wikipedia/en/9/9c/Drake_-_Thank_Me_Later_cover.jpg"
    const soFarGone = "https://upload.wikimedia.org/wikipedia/en/1/1d/Drake_-_So_Far_Gone_cover.png"
    const albums = [iyrtitl, moreLife, scorpion, darkLane, views, wattba, nwts, takeCare, tml, soFarGone]

    function test () {
        window.location.reload()
        // grab data
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                Show Albums
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} className="bg-dark text-white">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Albums</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex">
                        {albums.map((album) => (
                            <div className="grow" >
                                <img
                                    onClick={test}
                                    src={album}
                                    style={{width: 250, height: 250}}
                                />
                            </div>
                        ))}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function RenderTray() {
    return (
        <>
            {['bottom'].map((placement, idx) => (
                <AlbumTray key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}

export default (RenderTray)