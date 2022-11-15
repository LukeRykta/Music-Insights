import React from "react";
import {FaBars} from 'react-icons/fa';

import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavLinks,
    NavLogo,
    NavMenu,
    NavItem,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";

const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Music Insights</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth="true"
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="discover"
                                smooth="true"
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="services"
                                smooth="true"
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="signup"
                                smooth="true"
                            >Sign Up</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink
                                to='/'
                            >Sign In</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>

    );
}

export default NavBar;