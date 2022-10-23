import '../css/App.css';
import {Link} from "react-router-dom";
import faker from 'faker';
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {Button, Card, ModalHeader, Tab, Tabs, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: "Drake vs Kendrick"
        },
    },
};

const yLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const mLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
const wLabels = ['...', '...', 'Today'];
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Drake',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000})),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Kendrick',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function Chart() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Drake vs Kendrick</h1>
                <div>
                    <div className="show">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1} style={{marginLeft: 30}}>
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
                        <Line options={options} data={data} />
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
