import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./reducer";

const store = configureStore({
  reducer: productsSlice
});

export default store;
