import faker from 'faker';
import React, { Component, useState } from "react";
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
import {Button, ButtonGroup, ToggleButton} from "react-bootstrap";
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

const yrLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

const data1 = {
    labels: yrLabels,
    datasets: [
        {
            label: 'Legends',
            data: song1data,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

const data2 = {
    labels: yrLabels,
    datasets: [
        {
            label: 'Energy',
            data: yrLabels.map(() => faker.datatype.number({ min: 0, max: 999 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const data3 = {
    labels: yrLabels,
    datasets: [
        {
            label: '10 Bands',
            data: yrLabels.map(() => faker.datatype.number({ min: 0, max: 999 })),
            borderColor: 'rgb(47,168,40)',
            backgroundColor: 'rgba(34,84,22,0.5)',
        },
    ],
};

function LineChart() {
    const [data, setData] = useState(data1);
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Year', value: '1' },
        { name: 'Month', value: '2' },
        { name: 'Week', value: '3' },
    ];

    function handleClick1(e){
        setData(data1)
    }

    function handleClick2(e){
        setData(data2)
    }

    function handleClick3(e){
        setData(data3)
    }

    return(
        <div>
            <ButtonGroup>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <Line data={data} options={options} />
            <div>
                <Button style={{marginLeft: 40}} onClick={handleClick1}>Legend</Button>
                <Button onClick={handleClick2}>Energy</Button>
                <Button onClick={handleClick3}>10 Bands</Button>
            </div>
        </div>
    )
}

export default LineChart;