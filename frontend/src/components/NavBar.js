import {Navbar, NavbarBrand} from "react-bootstrap";
import logo from './logo.svg';
import "../css/NavBar.css"

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
                        Music Insights
                    </a>
                </NavbarBrand>
            </Navbar>
        </>
    );
}

export default NavBar;