import React, {useContext, useEffect, useState} from "react";
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
import {Button, ButtonGroup, ToggleButton} from "react-bootstrap";
import {Link} from "react-router-dom";
import AlbumTray from "./AlbumTray";
import SpotifyContext from "../../context/SpotifyContext";

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

// const song1data = ['234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432'];
const dummyData = [...Array(365).keys()];
// const song1data = ['234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432', '234', '634', '823', '124', '525', '513', '129', '592', '146', '154', '472', '432']
// const song2data = ['648', '234', '734', '845', '534', '375', '764', '235', '534', '154', '743', '273'];
// const song3data = ['156', '235', '345', '263', '624', '267', '152', '345', '845', '483', '245', '135'];

// const allSongData = [song1data, song2data, song3data, song1data, song2data, song3data, song1data, song2data, song3data];
const allSongData = [dummyData];
// const songNames = [{name: "Legend", value: '0'}, {name: "Energy", value: '1'}, {name: "10 Bands", value:'2'}, {name: "Know Yourself", value: '3'},
//                     {name: "No Tellin'", value: '4'}, {name: "Madonna", value: '5'}, {name: "6 God", value: '6'}, {name: "Star67", value: '7'},
//                      {name: "Preach", value: '8'}]

const songNames =  [];

export const view = {
    // yLables: ['January','January','January','January','January','January','January','January','January','January','January','January','February','February','February','February','February','February','February','February','February','February','February','February','March','March','March','March','March','March','March','March','March','March','March','March','April','April','April','April','April','April','April','April','April','April','April','April','May','May','May','May','May','May','May','May','May','May','May','May','June', 'June', 'July', 'July', 'August', 'August', 'September', 'September', 'October', 'October', 'November', 'November', 'December', 'December', ],
    yLables: ['January', null, null, 'February', null, null,'March','April','May','June','July','August','September','October','November','December'],
    mLables: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6','Week 7','Week 8'],
    wLables: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

const monthDayObj = {
    0: 'January',
    31: 'February',
    59: 'March',
    89: 'April',
    100: 'May',
    120: 'June',
    150: 'July',
    200: 'August',
}

export const options = {
    scales: {
        x: {
            ticks:{
                display: true,
                drawTicks: false,
                autoSkip: false,
                callback: function(val, index) {
                    // Hide every 2nd tick label
                    // return index % 2 === 0 ? this.getLabelForValue(val) : '';
                    if(monthDayObj[index]) {
                        return monthDayObj[index];
                    }
                    return '';
                },
            },
            title: {
                display: true,
                text: 'Time',
                font: {
                    size: 20
                }
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Listens',
                font: {
                    size: 20
                }

            }
        },
    },
    animations: {
        tension: {
            duration: 600,
            easing: 'quadratic',
            from: .6,
            to: 0,
            loop: false
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
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

function LineChart(size) {
    const defaultAlbum = '4j8uA4o5U4eoZJ2jXbNklD';
    const {getToken, getGenres, getTracksInAlbum, token} = useContext(SpotifyContext);
    const [label, setLabel] = useState(view.yLables)
    const [songIndex, setSongIndex] = useState(0);
    const [radioValue, setRadioValue] = useState('1');
    const [songRadioValue, setSongRadioValue] = useState('0');
    const [artistName, setArtistName] = useState([]);
    const [album, setAlbum] = useState([]);
    const [albumTitle, setAlbumTitle] = useState();
    const [songs, setSongs] = useState([]);
    const [art, setArt] = useState([]);
    const [search, setSearch] = useState(defaultAlbum);

    const song_ids = [];

    const timeRadios = [
        { name: 'Year', value: '1' },
        { name: 'Month', value: '2' },
        { name: 'Week', value: '3' },
    ];

    function getSet(vals){
        return vals;
    }

    let dataModel = {
        // labels: label,
        labels: dummyData,
        datasets: [
            {
                data: allSongData.map(getSet).at(songIndex),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.3)',
                fill: 'origin',
                tension: 200,
                hoverBorderDash: 2,
                pointHitRadius: 200,
                pointHoverRadius: 15,
                pointHoverBorderWidth: 2,
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
        getToken()
        console.log(size);
    }, [])

    useEffect(() => {
        if (token !== '' && album !== []){
            getAlbum(search).catch(error => console.log(error))
        }
    }, [token])

    async function getAlbum(search){
        const response = await getTracksInAlbum(search);
        console.log(response)
        setArtistName(response.data.artists[0].name)
        setAlbum(response.data);
        setAlbumTitle(response.data.name);
        setSongs(response.data.tracks.items);
        setArt(response.data.images[0].url);
    }

    const handleClick = (event) => {
        event.preventDefault();
        getAlbum(search)
            .then(r => console.log(r + " form submitted... awaiting api results"))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        setData(() => dataModel)
    }, [songIndex, songRadioValue, label])

    return(
        <>
            <div className="bg-dark">
                <div className="mt-5 d-flex text-center mb-3">
                    <h1 className="text-center">{artistName}</h1>
                    <h1 className="text-muted" style={{paddingLeft:20}}>{albumTitle}</h1>
                    <img
                        src={art}
                        className="chartArt"
                        style={{height: 50, paddingLeft:20}}
                    />
                </div>
                <div className="">
                    <Line data={data} options={options} />
                </div>
                <div className="d-flex">
                    <div>
                        <ButtonGroup className=" px-5">
                            {timeRadios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    name="radio"
                                    value={radio.value}
                                    className="btn-success grow"
                                    checked={radioValue === radio.value}
                                    onChange={handleTimeChange}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                    <div>
                        {songs.map((songRadio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`songRadio-${idx}`}
                                type="radio"
                                name="songRadio"
                                value={idx.toString()}
                                className="btn-dark m-1 growTrack"
                                checked={songRadioValue === idx.toString()}
                                onChange={handleSongChange}
                            >
                                {songRadio.name}
                            </ToggleButton>
                        ))}
                    </div>
                    <div className="px-5">
                        <AlbumTray/>
                        <Link to="/">
                            <Button className="btn-danger"> Go to Home </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default (LineChart);