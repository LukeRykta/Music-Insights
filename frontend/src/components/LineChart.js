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
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const yLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const mLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
const wLabels = ['...', '...', 'Today'];
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

export const data = {
    labels,
    datasets: [
        {
            label: 'Drake',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 10000})),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export const data1 = {
    labels,
    datasets: [
        {
            label: 'Kendrick',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ]
}

export const data2 = {
    labels,
    datasets: [
        {
            label: 'Kendrick',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
                <button onClick={() => {this.onClick1()}}>Drake</button>
                <button onClick={() => {this.onClick2()}}>Kendrick</button>
                <button onClick={() => {this.onClick3()}}>Bob</button>
            </div>
        )
    }
}

export default (LineChart);