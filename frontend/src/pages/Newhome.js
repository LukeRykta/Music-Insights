import React, {useState} from 'react';
import Navbar from '../components/navbar/NavBar';
import Sidebar from '../components/sidebar/index'
import HeroSection from "../components/hero-section";
import InfoSection from "../components/info-section/index"
import { homeObjOne, homeObjTwo, homeObjFour } from "../components/info-section/Data";
import Services from "../components/help-tools";
import Footer from "../components/footer";

const Newhome = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjFour}/>
            <Footer />
        </>
    );
};

export default Newhome;