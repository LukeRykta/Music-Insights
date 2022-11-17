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
import {Form, FormControl, FormGroup, FormText} from "react-bootstrap";

const NavBar = ({ toggle }) => {
    function handleSubmit() {

    }

    function setSearch(value) {

    }

    let search;
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
                        <div className="">
                            <Form onSubmit={handleSubmit}>
                                <FormGroup className="mb-3"  controlId="formBasicInput">
                                    <FormControl
                                        onChange={(e) => setSearch(e.target.value)}
                                        value={search}
                                        type="text"
                                        placeholder="Search"
                                        className="mt-3"/>
                                </FormGroup>
                            </Form>
                        </div>
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