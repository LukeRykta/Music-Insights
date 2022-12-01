import React, { useRef } from 'react'
import Icon1 from '../../images/svg-1.png'
import Icon2 from '../../images/svg-2.png'
import Icon3 from '../../images/svg-6.png'
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from "./toolElements";
import {useOnScreen} from "../../utils";

const Services = ({ handleNavScrolled }) => {

    const myRef = useRef();

    const isVisible = useOnScreen(myRef);
    handleNavScrolled('services', isVisible);

    return (
        <ServicesContainer id="services" ref={myRef}>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Find Artists</ServicesH2>
                    <ServicesP>We help you find what you need</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Find Albums</ServicesH2>
                    <ServicesP>We help you find what you need</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Find Songs</ServicesH2>
                    <ServicesP>We help you find what you need</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
};

export default Services;