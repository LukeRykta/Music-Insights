import '../css/App.css';
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Button, ButtonGroup, Card, ModalHeader, Tab, Tabs, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

import LineChart from "../components/LineChart";

function Chart() {
    return (
        <div className="App">
            <header className="App-header">

                <div className="box-shadow-test">
                    <h1 className="text-center">Drake</h1>
                    <div>
                        <div style={{paddingBottom: 25, width: window.outerWidth / 1.5}}>
                            <LineChart/>
                        </div>
                    </div>
                    <Link to="/">
                        <Button className="btn-danger"> Go to Home </Button>
                    </Link>
                </div>
            </header>
        </div>
    );
}
//
export default Chart;