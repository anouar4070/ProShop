import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    // Add the RTK Query API reducer under its defined reducer path
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Add the RTK Query middleware to the default middleware list
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
