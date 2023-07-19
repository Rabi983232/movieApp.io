import React, { useEffect } from 'react'
import { fetchAsyncSelectedMovieOrShows } from '../../features/Movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "./movieDetails.css"




export default function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  console.warn(imdbID)
  useEffect(() => {
    dispatch(fetchAsyncSelectedMovieOrShows(imdbID));
  }, [dispatch, imdbID])
  const data = useSelector(state => state.movie.selectedMovieOrShow);
  console.log(data)
  return (
    <>
      <div className="movie-section">
        {imdbID != data.imdbID? (
          <h4>Loding....</h4>
        ) : (
          <>
            <div className="section-left">
              <div className="movie-title">{data.Title}</div>
              <div className="movie-reting">
                <span>
                  IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i> : {data.Runtime}
                </span>
                <span>
                  Year <i className="fa fa-calendar"></i> : {data.Year}
                </span>
              </div>
              <div className="movie-plot">
                {data.Plot}
              </div>
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>
                    {data.Director}
                  </span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>
                    {data.Actors}
                  </span>
                </div>
                <div>
                  <span>Genre</span>
                  <span>
                    {data.Genre}
                  </span>
                </div>
                <div>
                  <span>Language</span>
                  <span>
                    {data.Language}
                  </span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>
                    {data.Awards}
                  </span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={data.Poster} alt={data.Title} />
            </div>
          </>
        )}
      </div>
    </>
  )
}
