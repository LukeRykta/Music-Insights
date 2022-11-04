import React, {useEffect, useState} from "react";
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
const song2data = ['513', '520', '438', '567', '350', '623', '668', '689', '712', '752', '735', '760'];
const song3data = ['573', '524', '428', '568', '600', '623', '668', '689', '712', '752', '735', '715'];

export const view = {
    yLables: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    mLables: ['Week 1', 'Week 2', 'Week 3', 'Week 4', '5', '6','7','8','9','10','11','12'],
    wLables: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}
//const yLables = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const options = {
    animations: {
        tension: {
            duration: 100,
            easing: 'easeInExpo',
            from: .2,
            to: 0,
            loop: false
        },
    },
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

function LineChart() {
    const [label, setLabel] = useState(view.yLables)

    let data1 = {
        labels: label,
        datasets: [
            {
                label: 'Legends',
                data: song1data,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    let data2 = {
        labels: label,
        datasets: [
            {
                label: 'Energy',
                data: song2data,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    }

    let data3 = {
        labels: label,
        datasets: [
            {
                label: '10 Bands',
                data: song3data,
                borderColor: 'rgb(47,168,40)',
                backgroundColor: 'rgba(34,84,22,0.5)',
            },
        ]
    }

    const [data, setData] = useState(data1);
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

    if (radioValue === '1'){
        console.log("radio " + radioValue + " detected");
        useEffect(() => {
            setData(() => data1)
        }, [label])
    } else if (radioValue === '2'){
        console.log("radio " + radioValue + " detected");
        useEffect(() => {
            setData(() => data1)
        }, [label])
    } else if (radioValue === '3'){
        console.log("radio " + radioValue + " detected");
        useEffect(() => {
            setData(() => data1)
        }, [label])
    }

    function handleChange(e){
        console.log("handle change reached");
        setRadioValue(e.currentTarget.value);
        console.log(e.currentTarget.value)
        if (e.currentTarget.value == 1){
            setLabel(view.yLables)
            console.log(label)
        } else if (e.currentTarget.value == 2){
            setLabel(view.mLables)
            console.log(label)
        } else if (e.currentTarget.value == 3){
            setLabel(view.wLables)
            console.log(label)
        }
    }

    return(
        <>
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
                            onChange={handleChange}
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
        </>
    )
}

export default (LineChart);