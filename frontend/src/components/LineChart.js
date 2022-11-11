import React, {useEffect, useState} from "react";
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {ButtonGroup, ToggleButton} from "react-bootstrap";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

const song1data = ['513', '520', '438', '567', '350', '623', '668', '689', '712', '752', '735', '760'];
const song2data = ['513', '520', '438', '567', '350', '623', '668', '689', '712', '752', '735', '760'];
const song3data = ['573', '524', '428', '568', '600', '623', '668', '689', '712', '752', '735', '715'];
const allSongData = [song1data, song2data, song3data];

const dataVals = [{name: "test", value: '1'}, {name: "hi", value: '2'}, {name: "brandone", value:'3'}, {name: "luk", value: '4'}]

export const view = {
    yLables: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    mLables: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6','Week 7','Week 8','Week 9','Week 10','Week 11','Week 12'],
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
        filler: {
            propogate: true
        },
        legend: {
            labels:{
                font: {
                    size: 20,
                    color: "white"
                }
            },
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
    const [songIndex, setSongIndex] = useState(0);

    function getSet(vals){
        return vals;
    }

    let data1 = {
        labels: label,
        datasets: [
            {
                label: 'Legend',
                data: allSongData.map(getSet).at(songIndex),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: 'origin',
                tension: .4,
                pointHitRadius: 50,
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

    const timeRadios = [
        { name: 'Year', value: '1' },
        { name: 'Month', value: '2' },
        { name: 'Week', value: '3' },
    ];

    const songRadios = [
        dataVals.entries()
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

    function inc(e){
        setSongIndex(songIndex+1);
        console.log(songIndex)
    }

    useEffect(() => {
        setData(() => data1)
    }, [songIndex])

    if (radioValue === '1'){
        //console.log("radio " + radioValue + " detected");
        useEffect(() => {
            setData((data) => data1)
        }, [label])
    } else if (radioValue === '2'){
        //console.log("radio " + radioValue + " detected");
        useEffect(() => {
            setData((data) => data1)
        }, [label])
    } else if (radioValue === '3'){
        //console.log("radio " + radioValue + " detected");
        useEffect(() => {
            setData((data) => data1)
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

    function handleSongChange(e){
        return 0
    }

    return(
        <>
            <div>
                <ButtonGroup>
                    {timeRadios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            value={radio.value}
                            className="btn-success"
                            checked={radioValue === radio.value}
                            onChange={handleChange}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                <Line data={data} options={options} />
                <div>
                    {/*<Button style={{marginLeft: 40}} onClick={handleClick1}>Legend</Button>*/}
                    {/*<Button onClick={handleClick2}>Energy</Button>*/}
                    {/*<Button onClick={handleClick3}>10 Bands</Button>*/}
                    {/*<Button onClick={inc}>test</Button>*/}
                    {dataVals.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            value={radio.value}
                            className="btn-success"
                            checked={radioValue === radio.value}
                            onChange={handleSongChange}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </div>
            </div>
        </>
    )
}

export default (LineChart);