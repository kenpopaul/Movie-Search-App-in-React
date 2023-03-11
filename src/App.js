import React from 'react';
import { useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=a44ac51f';

const movie1 = 
    {
        "Title": "Spiderman the Verse",
        "Year": "2019–",
        "imdbID": "tt12122034",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
    }




const App = () => {

const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
}

useEffect(() => {
    searchMovies('Spiderman');
}, []);

    return (
        <div className = "app">
            <h1>NixMovies</h1>

            <div className="search">
                <input
                    placeholder='Search for movies'
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
               <MovieCard movie1={movie1}/>
            </div>
        </div>
    );
}

export default App;