import React, { useEffect } from 'react'
import MoviListing from '../MovieListing/MoviListing'
import {fetchAsyncMovies,fetchAsyncShows} from '../../features/Movies/movieSlice';
import { useDispatch } from 'react-redux';



export default function Home() {
  const disspatch = useDispatch()
  useEffect(() => {
    disspatch(fetchAsyncMovies());
    disspatch(fetchAsyncShows());
  }, [disspatch])

  return (
    <div>
      <div className="benner-image"></div>

      <MoviListing />


    </div>
  )
}
