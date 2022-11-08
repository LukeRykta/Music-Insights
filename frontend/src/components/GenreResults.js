import React, {useContext} from 'react'
import SpotifyContext from '../context/SpotifyContext'
import {Button, Card, CardImg} from "react-bootstrap";

function GenreResults() {
    const {genres, getPlaylists} = useContext(SpotifyContext)

    return (
        <>
            <div className="d-flex justify-content-around d-inline-block">
            {genres.map((genre) => {
                return (
                    <Card key={genre} className="trackCard m-2">
                        <Card.Body>
                            <div>
                                <Card.Title>{genre.name}</Card.Title>
                                <Button className="btn-success" onClick={getPlaylists}>
                                    See Playlists
                                </Button>
                            </div>
                            <div>
                                <CardImg src={genre.icons[0].url} alt="Genre Cover"/>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}
            </div>
        </>
    )
}

export default GenreResults