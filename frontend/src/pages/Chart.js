import logo from '../logo.svg';
import '../css/App.css';
import {Link} from "react-router-dom";

function Chart() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Chart Page
                </p>
                <Link to="/">go to home</Link>
            </header>
        </div>
    );
}

export default Chart;
