import {Navbar, NavbarBrand} from "react-bootstrap";
import logo from './logo.svg';
import "../css/NavBar.css"
import React from "react";


function NavBar() {
    return (
        <>
            <Navbar className="color-nav" >
                <NavbarBrand href="/" className="navContainer">
                    <img
                        className="navImg"
                        alt={""}
                        src={logo}
                    />
                    <a style={{marginLeft: 50}}>
                        Music InsightS
                    </a>
                </NavbarBrand>
                <select>
                    <option value="Genres">Genres</option>
                    <option value="Rap">Rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                </select>

                <select>
                    <option value="Artists">Artists</option>
                    <option value="Artist1">Drake</option>
                    <option value="Artist2">SZA</option>
                    <option value="Artist3">Selena Gomez</option>
                </select>

                <select>
                    <option value="Songs">Songs</option>
                    <option value="Song1">Song1</option>
                    <option value="Song2">Song2</option>
                    <option value="Song3">Song3</option>
                </select>
            </Navbar>
        </>

    );
}

export default NavBar;