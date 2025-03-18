import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Using dummy data instead of actual API calls for design only
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://asif-portfolio-server.vercel.app/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Project", "Skill", "Feedback"],
  endpoints: (builder) => ({
    // Project
    getAllProjects: builder.query({
      query: () => "/projects",
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Project"],
    }),
    addProject: builder.mutation({
      query: (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
          formData.append(key, (data)[key]);
        });

        return {
          url: "/projects",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Project"],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useAddProjectMutation,
  useDeleteProjectMutation,
} = api;
