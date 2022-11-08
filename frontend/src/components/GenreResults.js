import React, {useContext} from 'react'
import SpotifyContext from '../context/SpotifyContext'
import {Button, Card, CardImg} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

function GenreResults() {
    const {genres, getPlaylists} = useContext(SpotifyContext)

    return (
        <>
            <div className="d-flex flex-wrap m-3">
            {genres.map((genre) => {
                return (
                    <Card key={genre} className="trackCard m-2">
                        <Card.Body>
                            <div>
                                <CardImg
                                    src={genre.icons[0].url}
                                    className="m-2"
                                    style={{width: 200, height:200}}
                                    alt="Genre Cover"/>
                                <Card.Title className="text-center">{genre.name}</Card.Title>
                            </div>
                            <div className="Genre-buttons">
                                <Button
                                    className="btn-success"
                                    onClick={getPlaylists}>
                                        Select Genre
                                </Button>
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