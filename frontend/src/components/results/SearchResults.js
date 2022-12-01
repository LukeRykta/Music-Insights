import SpotifyContext from "../../context/SpotifyContext";
import {useContext} from "react";
import {ResultsCard, ResultsContainer, ResultsWrapper} from "./ResultsElements";
import {limitString} from "../../utils";
import {Link} from "react-router-dom";

function SearchResults() {
    const {results} = useContext(SpotifyContext)
    //todo add case for empty results display message

    return (
        <ResultsContainer>
            <ResultsWrapper>

                <ResultsCard>
                    <div className='searchCategory'>
                        Artists
                    </div>
                    {results?.data?.artists?.items?.map((item)=> (
                        <div className='d-flex grow itemPointer'>
                            <img
                                style={{height: 50, width: 50}}
                                src={item?.images[2]?.url}
                            />
                            <Link to='/chart' style={{textDecoration: "none"}}>
                                <div style={{color: '#01bf71', marginLeft: '10px'}}>
                                    {limitString(item.name)}
                                </div>
                            </Link>
                        </div>
                    ))}
                </ResultsCard>

                <ResultsCard>
                    <div className='searchCategory'>
                        Albums
                    </div>
                    {results?.data?.albums?.items?.map((item)=> (
                        <div className='d-flex grow itemPointer'>
                            <img
                                style={{height: 50}}
                                src={item?.images[2]?.url}
                            />
                            <Link to='/chart' style={{textDecoration: "none"}}>
                                <div style={{color: '#01bf71', marginLeft: '10px'}}>
                                    {limitString(item.name)}
                                </div>
                            </Link>

                        </div>
                    ))}
                </ResultsCard>

                <ResultsCard>
                    <div className='searchCategory'>
                        Tracks
                    </div>
                    {results?.data?.tracks?.items?.map((item)=> (
                        <div className='d-flex grow itemPointer'>
                            <img
                                style={{height: 50, width: 50}}
                                src={item?.album?.images[2]?.url}
                            />
                            <Link to='/chart' style={{textDecoration: "none"}}>
                                <div style={{color: '#01bf71', marginLeft: '10px'}}>
                                    {limitString(item.name)}
                                </div>
                            </Link>
                        </div>
                    ))}
                </ResultsCard>

            </ResultsWrapper>
        </ResultsContainer>
    )
}

export default SearchResults;