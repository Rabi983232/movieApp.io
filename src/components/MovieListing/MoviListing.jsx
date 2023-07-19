import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard';
import './movieListing.css'


export default function MoviListing() {
  const [search, setSearch] = useState(true)
  const data = useSelector(state => state.movie.movies)
  const series = useSelector(state => state.movie.shows)
  let renderMovies, renderShows = '';
  console.log(data);

  renderMovies = data.Response === 'True' ? (
    data.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    }
    )
  ) : (
    <div className="movie-error">
      <h1>{data.Error}</h1>
    </div>
  )
  renderShows = series.Response === 'True' ? (
    series.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    }
    )
  ) : (
    <div className="movie-error">
      <h1>{data.Error}</h1>
    </div>
  )
  console.log(data);
  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <br />
          <div className="movie-container">
            {data.Response === 'True' ? renderMovies : (
              <center>
                <h4 style={{ color: "white" }}>Loding.....</h4>
              </center>
            )}
            { }
          </div>
        </div>
        <div className="movie-list">
          <h2>Shows</h2>
          <br />
          <div className="movie-container">
            {series.Response === 'True' ? renderShows : (
              <center>
                <h4 style={{ color: "white" }}>Loding.....</h4>
              </center>
            )}
            { }
          </div>
        </div>
      </div>

    </>

  )
}
