import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIkey } from "../../apis/MovieApiKey";
import MovieApi from "../../apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const MovieKey = "Harry";
    const respons = await MovieApi.get(`/?i=tt3896198&apikey=${APIkey}&s=${MovieKey}`);
    return respons.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const series = "Friends";
    const respons = await MovieApi.get(`/?i=tt3896198&apikey=${APIkey}&s=${series}`);
    return respons.data;
  }
);
export const fetchAsyncSelectedMovieOrShows = createAsyncThunk(
  "movies/fetchAsyncSelectedMovieOrShows",
  async (id) => {
    const respons = await MovieApi.get(`/?i=${id}&apikey=${APIkey}&plot=full`);
    return respons.data;
  }
);
const initialState = {
  isLoding: true,
  movies: {},
  shows: {},
  selectedMovieOrShow:{},
};

const movieSclice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.movies = action.payload;
      state.isLoding = false;
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.shows = action.payload;
      state.isLoding = false;
    },
    [fetchAsyncSelectedMovieOrShows.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.selectedMovieOrShow = action.payload;
      state.isLoding = false;
    },
  },
});

export default movieSclice.reducer;
