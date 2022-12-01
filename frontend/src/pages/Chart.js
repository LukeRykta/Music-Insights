import '../css/App.css';
import React, {useEffect, useState} from "react";
import LineChart from "../components/chart/LineChart";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar/NavBar";

function Chart() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        window.scrollTo({top: 100, behavior: 'smooth'});
    })

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />

            <header className="App-header header-color">
                <div className="box-shadow-test mt-1 flex bg-dark chart-size">
                    <div className="mt-5 chartContainer mb-3" style={{width: window.outerWidth/1.3}}>
                        <LineChart size={100}/>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Chart;