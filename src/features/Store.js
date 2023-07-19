import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Movies/movieSlice";

export const Store = configureStore({
  reducer: {
    movie: movieSlice
  },
});
