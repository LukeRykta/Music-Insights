import React, { useState } from 'react';
import Navbar from '../components/navbar/NavBar';
import Sidebar from '../components/sidebar/index'
import HeroSection from "../components/hero-section";
import InfoSection from "../components/info-section/index"
import { homeObjOne, homeObjTwo, homeObjFour } from "../components/info-section/Data";
import Services from "../components/help-tools";
import Footer from "../components/footer";
import { cloneDeep, isEqual } from 'lodash';

const Newhome = ({search, handleSearchChange}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedNavItem, setSelectedNavItem] = useState({
            about: false, discover: false, services: false, signup: false
    });

    const toggle = () => setIsOpen(!isOpen);

    const handleNavScrolled = (id, isVisible) => {
        //console.log({id, isVisible})
        const selectedNavItemClone = cloneDeep(selectedNavItem);
        if (isVisible === 'toggle') {
            Object.keys(selectedNavItemClone).forEach((key) => {
                selectedNavItemClone[id] = key === id;
            })
        } else {
            selectedNavItemClone[id] = isVisible;
        }

        // setSelectedNavItem(selectedNavItemClone);
        if (isEqual(selectedNavItemClone, selectedNavItem)) {
            //console.log('no change', selectedNavItemClone);
        } else {
            //console.log('changed!', selectedNavItemClone);
            setSelectedNavItem(selectedNavItemClone);
        }
    }

    const firstSelectedNav = Object.keys(selectedNavItem).find((i) => selectedNavItem[i] === true);

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar
                search={search}
                handleSearchChange={handleSearchChange}
                toggle={toggle}
                selectedNavItem={firstSelectedNav}
                handleNavScrolled={handleNavScrolled} />
            <div style={{marginTop: '60px'}}>
                <HeroSection />
                <InfoSection {...homeObjOne} handleNavScrolled={handleNavScrolled}/>
                <InfoSection {...homeObjTwo} handleNavScrolled={handleNavScrolled}/>
                <Services handleNavScrolled={handleNavScrolled}/>
                <InfoSection {...homeObjFour} handleNavScrolled={handleNavScrolled}/>
                <Footer />
            </div>
        </>
    );
};

export default Newhome;