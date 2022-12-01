import React, { useContext, useEffect } from "react";
import { FaBars } from 'react-icons/fa';
import {Form, FormControl, FormGroup} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavLinks,
    NavLogo,
    NavMenu,
    NavItem,
    NavBtn,
    NavBtnLink,
    RightWrapper,
    LeftWrapper
} from "./NavbarElements";
import SpotifyContext from "../../context/SpotifyContext";

const NavBar = ({ search, handleSearchChange, toggle, selectedNavItem, handleNavScrolled }) => {
    const {getSearchResults, getToken} = useContext(SpotifyContext);
    const navigate = useNavigate();

    useEffect(() => {
        getToken();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/results");
    }

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
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="discover"
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="services"
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="signup"
                            >Sign Up</NavLinks>
                        </NavItem>
                    </LeftWrapper>

                    <RightWrapper>
                        <Form onSubmit={handleSubmit} style={{width: '20rem', marginBottom: '5px'}}>
                            <FormGroup controlId="formBasicInput">
                                <FormControl
                                    onChange={(e) => handleSearchChange(e.target.value)}
                                    value={search}
                                    type="text"
                                    placeholder="search"
                                />
                            </FormGroup>
                        </Form>

                        <NavBtn>
                            <NavBtnLink to='/'>Sign In</NavBtnLink>
                        </NavBtn>
                    </RightWrapper>

                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>

    );
}

export default NavBar;