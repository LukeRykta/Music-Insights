import React from 'react'
import {FaInstagram, FaYoutube, FaTwitter, FaTiktok} from "react-icons/fa";
import {
    FooterContainer, FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights
} from "./footerElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destinations</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Videos</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencers</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">TikTok</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo
                            to='/'
                            className="grow"
                        >
                            Music Insights
                        </SocialLogo>
                        <WebsiteRights>
                            Music Insights © 2022
                            All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href='//www.instagram.com'
                                target="_blank"
                                aria-label="Instagram"
                                className="grow"
                            >
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink
                                href='//www.twitter.com'
                                target="_blank"
                                aria-label="Twitter"
                                className="grow"
                            >
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink
                                href='//www.youtube.com'
                                target="_blank"
                                aria-label="YouTube"
                                className="grow"
                            >
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink
                                href='//www.tiktok.com'
                                target="_blank"
                                aria-label="TikTok"
                                className="grow"
                            >
                                <FaTiktok/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;