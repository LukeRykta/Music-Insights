import '../css/App.css';
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {Button} from "react-bootstrap";

import LineChart from "../components/LineChart";
import AlbumTray from "../components/AlbumTray";

function Chart() {

    useEffect(() => {
        window.scrollTo({top: 100, behavior: 'smooth'});
    })

    return (
        <div className="App">
            <header className="App-header header-color">
                <div className="box-shadow-test mt-1 flex bg-dark chart-size">
                    <div className="mt-5 d-flex text-center">
                        <h1 className="text-center">Drake</h1>
                        <h1 className="text-muted">...If You're Reading This, It's Too Late</h1>
                    </div>
                    <div className="mt-5 chartContainer mb-3" style={{width: window.outerWidth/1.3}}>
                        <LineChart/>
                    </div>
                </div>
            </header>
        </div>

    );
}
//
export default Chart;