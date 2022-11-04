import '../css/App.css';
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Button, ButtonGroup, Card, ModalHeader, Tab, Tabs, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

import LineChart from "../components/LineChart";

function Chart() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Drake</h1>
                <div>
                    <div className="chartContainer" style={{paddingBottom: 25, width: window.outerWidth / 1.5}}>
                        <LineChart/>
                    </div>
                </div>
                <Link to="/">
                    <Button className="btn-success"> Go to Home </Button>
                </Link>
            </header>
        </div>
    );
}

export default Chart;