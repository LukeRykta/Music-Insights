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
import {Button} from "react-bootstrap";
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
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000})),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function Chart() {
    return (
        <div className="App">
            <select>
                <option value="Genres">Genres</option>
                <option value="Rap">Rap</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
            </select>

            <select>
                <option value="Artists">Artists</option>
                <option value="Artist1">Drake</option>
                <option value="Artist2">SZA</option>
                <option value="Artist3">Selena Gomez</option>
            </select>

            <select>
                <option value="Songs">Songs</option>
                <option value="Song1">Song1</option>
                <option value="Song2">Song2</option>
                <option value="Song3">Song3</option>
            </select>
            <header className="App-header">
                <div style={{height: 700, width: 1000}}>
                    <Line options={options} data={data} />
                </div>
                <Link to="/">
                    <Button> go to home </Button>
                </Link>
            </header>
        </div>
    );
}

export default Chart;
