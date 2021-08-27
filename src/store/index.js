import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsSlice } from "./reducer";

const store = configureStore({
  reducer: productsSlice
});

export default store;
