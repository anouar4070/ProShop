import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

//This sets up the base configuration for all API requests. Every endpoint you define later will prepend this base URL.
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User"], // optional tag types used for cache invalidation
  endpoints: (builder) => ({}),
});
