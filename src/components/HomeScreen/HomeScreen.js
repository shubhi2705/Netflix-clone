import React from 'react'
import Banner from '../Banner/Banner'
import Nav from '../NavBar/Nav'
import './HomeScreen.css';
import requests from '../../Requests';
import Rows from '../Rows/Rows'
const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            <Nav />
             <Banner />
             <Rows title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
             <Rows title='TRENDING NOW' fetchUrl={requests.fetchTrending} isLargeRow/> 

             <Rows title='Top Rated' fetchUrl={requests.fetchTopRated} isLargeRow/>
             <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies} isLargeRow/>

             <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} isLargeRow/>
             <Rows title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
             <Rows title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} isLargeRow/>

        </div>
    )
}

export default HomeScreen
