import {Nav, Navbar, NavbarBrand, NavDropdown} from "react-bootstrap";
import logo from './logo.svg';
import "../css/NavBar.css"
import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    const [selectValue, setSelectValue] = React.useState("");
    const onChange = (event) => {
        const value = event.target.value;
        setSelectValue(value);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" className="shadow-effect">
                <Nav>
                    <Link to="/">
                        <img
                            className="navImg"
                            alt={""}
                            src={logo}
                        />
                    </Link>
                    <NavbarBrand>
                        Music Insights
                    </NavbarBrand>
                    <div className="navDropdowns">
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Genre"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">Pop</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rock</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Classical</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Rap</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Artist"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">Drake</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Kendrick</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">J. Cole</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Lil Baby</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Album"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">Scorpion</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">If You're Reading This, It's Too Late</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Nothing Was The Same</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Care Package</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Nav>
            </Navbar>
        </>

    );
}

export default NavBar;