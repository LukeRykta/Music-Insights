import '../css/App.css'
import SearchResults from '../components/results/SearchResults'
import React, {useContext, useEffect} from "react";
import SpotifyContext from "../context/SpotifyContext";
import NavBar from "../components/navbar/NavBar";
function ResultsPage({search, handleSearchChange}) {
    const {getSearchResults} = useContext(SpotifyContext)

    useEffect(()=> {
        getSearchResults(search);
    }, [])


    return (
        <>
            <NavBar
                search={search}
                handleSearchChange={handleSearchChange}
            />
            <div className='App-header header-color'>
                <header className='mt-lg-5'>
                    <SearchResults/>
                </header>
            </div>
        </>
    );
}

export default ResultsPage;
