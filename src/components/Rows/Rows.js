import React,{useState,useEffect} from 'react'
import './Rows.css'
import axios from '../../axios';
const Rows = ({title,fetchUrl,isLargeRow=false}) => {
    console.log("Inside Rows")
    const [movies,setMovies]=useState([]);
    const baseUrl="https://image.tmdb.org/t/p/original/"
  useEffect(() => {
     async function fetchData(){
         const requests=await axios.get(fetchUrl);
         setMovies(requests.data.results);
         return requests;
     }
     fetchData();
  }, [fetchUrl]) 
    return (
        <div className='rows'>
            <h2>{title}</h2>
            <div className='row_posters'>
            {movies.map(movie=>(
                ( isLargeRow && movie.poster_path || !isLargeRow && movie.backdrop_path)?
                 (<img className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id}
                src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt='img-backdrop'/>
            ):<></>))}
            </div>
            
        </div>
    )
}

export default Rows
