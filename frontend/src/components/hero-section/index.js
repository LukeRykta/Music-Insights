import React, {useState} from 'react'
import { Btn } from '../buttons/ButtonElements'
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg,
} from "./HeroElements";
import Video from '../../videos/video.mp4'
import Video2 from '../../videos/video2.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer id={'top'}>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video2} type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Music Analysis Made Easy</HeroH1>
                    <HeroP>
                        Sign up for a free account today
                    </HeroP>
                    <HeroBtnWrapper>
                        <Btn
                            to="/signup"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            className="grow"
                        >
                            Create Account {hover ? <ArrowForward /> : <ArrowRight />}
                        </Btn>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection