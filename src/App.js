import React from 'react';
import { useEffect } from 'react';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=a44ac51f';


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
                />
            </div>
        </div>
    );
}

export default App;