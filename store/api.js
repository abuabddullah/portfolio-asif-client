import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Using dummy data instead of actual API calls for design only
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l2a4-bike-bazaar-server.vercel.app/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Project", "Skill", "Feedback"],
  endpoints: (builder) => ({}),
});

export const {} = api;
