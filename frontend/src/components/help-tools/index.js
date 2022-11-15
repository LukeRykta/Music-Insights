import React from 'react'
import Icon1 from '../../images/svg-1.png'
import Icon2 from '../../images/svg-2.png'
import Icon3 from '../../images/svg-4.png'
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from "./toolElements";

const Services = () => {
    return (
        <ServicesContainer id="services">
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