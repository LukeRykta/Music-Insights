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
import chart from "../pages/Chart";

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

const song1data = ['234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432'];
const song2data = ['648', '234', '734', '845', '534', '375', '764', '235', '534', '154', '743', '273'];
const song3data = ['156', '235', '345', '263', '624', '267', '152', '345', '845', '483', '245', '135'];
const song4data = ['234', '345', '444', '324', '346', '976', '623', '345', '734', '346', '852', '531'];
const allSongData = [song1data, song2data, song3data, song4data];

const songNames = [{name: "Legend", value: '0'}, {name: "Energy", value: '1'}, {name: "10 Bands", value:'2'}, {name: "Know Yourself", value: '3'}]

export const view = {
    yLables: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    mLables: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6','Week 7','Week 8'],
    wLables: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

export const options = {

    animations: {
        tension: {
            duration: 100,
            easing: 'quadratic',
            from: .1,
            to: 0,
            loop: false
        },
    },
    responsive: true,
    plugins: {
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
    const [radioValue, setRadioValue] = useState('1');
    const [songRadioValue, setSongRadioValue] = useState('1');

    const timeRadios = [
        { name: 'Year', value: '1' },
        { name: 'Month', value: '2' },
        { name: 'Week', value: '3' },
    ];

    function getSet(vals){
        return vals;
    }

    let dataModel = {
        labels: label,
        datasets: [
            {
                label: 'Legend',
                data: allSongData.map(getSet).at(songIndex),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.3)',
                fill: 'origin',
                tension: .0,
                pointHitRadius: 100,
            },
        ],
    };

    const [data, setData] = useState(dataModel);

    function handleTimeChange(e){
        setRadioValue(e.currentTarget.value);
        if (e.currentTarget.value === '1'){
            setLabel(view.yLables)
        } else if (e.currentTarget.value === '2'){
            setLabel(view.mLables)
        } else if (e.currentTarget.value === '3'){
            setLabel(view.wLables)
        }
    }

    function handleSongChange(e){
        setSongRadioValue(e.currentTarget.value)
        setSongIndex(e.currentTarget.value)
        //console.log("target: " + e.currentTarget.value + ", index: " + songIndex);
    }

    useEffect(() => {
        setData(() => dataModel)
    }, [songIndex, songRadioValue, label])

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
                            onChange={handleTimeChange}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                <div className="">
                    <Line data={data} options={options} />
                    <div className="m-2">
                        {songNames.map((songRadio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`songRadio-${idx}`}
                                type="radio"
                                name="songRadio"
                                value={songRadio.value}
                                className="btn-dark m-1"
                                checked={songRadioValue === songRadio.value}
                                onChange={handleSongChange}
                            >
                                {songRadio.name}
                            </ToggleButton>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default (LineChart);