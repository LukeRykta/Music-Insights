import '../css/App.css';
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Button, Card, ModalHeader, Tab, Tabs, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import LineChart from "../components/LineChart";

function Chart() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Drake vs Kendrick</h1>
                <div>
                    <div className="show">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1} style={{marginLeft: 40}}>
                            <ToggleButton id="tbg-radio-1" value={1} className="btn-success">
                                Year
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-2" value={2} className="btn-success">
                                Month
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-3" value={3} className="btn-success">
                                Week
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div className="chartContainer" style={{paddingBottom: 25, width: window.outerWidth / 1.5}}>
                        <LineChart />
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