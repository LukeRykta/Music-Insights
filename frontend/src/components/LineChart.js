import faker from 'faker';
import React, { Component } from "react";
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

const song1data = ['583', '528', '538', '568', '600', '623', '668', '689', '712', '752', '735', '760'];

const yrLables = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: false,
            text: "Artist Name"
        },
    },
};

export const data = {
    labels: yrLables,
    datasets: [
        {
            label: 'Legends',
            data: song1data,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export const data1 = {
    labels: yrLables,
    datasets: [
        {
            label: 'Energy',
            data: yrLables.map(() => faker.datatype.number({ min: 0, max: 999 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ]
}

export const data2 = {
    labels: yrLables,
    datasets: [
        {
            label: '10 Bands',
            data: yrLables.map(() => faker.datatype.number({ min: 0, max: 999 })),
            borderColor: 'rgb(47,168,40)',
            backgroundColor: 'rgba(34,84,22,0.5)',
        },
    ]
}

class LineChart extends Component
{
    constructor() {
        super();
        this.state = {
            content: data
        }
    }

    onClick1 = () => {
        this.setState({content: data})
    }

    onClick2 = () => {
        this.setState({content: data1})
    }

    onClick3 = () => {
        this.setState({content: data2})
    }

    render(){
        return(
            <div>
                <Line data={this.state.content} options={options} />
                <div>
                    <Button style={{marginLeft: 40}} onClick={() => {this.onClick1()}}>Legend</Button>
                    <Button onClick={() => {this.onClick2()}}>Energy</Button>
                    <Button onClick={() => {this.onClick3()}}>10 Bands</Button>
                </div>
            </div>
        )
    }
}

export default (LineChart);