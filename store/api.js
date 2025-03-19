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
  tagTypes: ["Project", "Skill", "Experience","Blog"],
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
          formData.append(key, data[key]);
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
      invalidatesTags: ["Project"],
    }),
    getProject: builder.query({
      query: (id) => `/projects/${id}`,
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Project"],
    }),
    updateProject: builder.mutation({
      query: ({ id, ...formData }) => {
        console.log("🚀 ~ formData:", formData);
        return {
          url: `/projects/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: ["Project"],
    }),
    //Skill
    getAllSkills: builder.query({
      query: () => "/skills",
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Skill"],
    }),
    addSkill: builder.mutation({
      query: (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });

        return {
          url: "/skills",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Skill"],
    }),
    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Skill"],
    }),
    getSkill: builder.query({
      query: (id) => `/skills/${id}`,
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Skill"],
    }),
    updateSkill: builder.mutation({
      query: ({ id, ...formData }) => ({
        url: `/skills/${id}`,
        method: "PATCH",
        body: formData,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: ["Skill"],
    }),
    //Experience
    getAllExperiences: builder.query({
      query: () => "/experiences",
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Experience"],
    }),
    addExperience: builder.mutation({
      query: (data) => {
        console.log("🚀 ~ data:", data);
        return {
          url: "/experiences",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
      },
      invalidatesTags: ["Experience"],
    }),
    deleteExperience: builder.mutation({
      query: (id) => ({
        url: `/experiences/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Experience"],
    }),
    getExperience: builder.query({
      query: (id) => `/experiences/${id}`,
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Experience"],
    }),
    updateExperience: builder.mutation({
      query: ({ id, ...formData }) => ({
        url: `/experiences/${id}`,
        method: "PATCH",
        body: formData,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: ["Experience"],
    }),
    //Blog
    getAllBlogs: builder.query({
      query: () => "/blogs",
      transformResponse: (response) => {
      return response.data;
      },
      providesTags: ["Blog"],
    }),
    addBlog: builder.mutation({
      query: (data) => {

      return {
        url: "/blogs",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      },
      invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
      url: `/blogs/${id}`,
      method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
    getBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      transformResponse: (response) => {
      return response.data;
      },
      providesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...formData }) => ({
      url: `/blogs/${id}`,
      method: "PATCH",
      body: formData,
      }),
      transformResponse: (response) => {
      return response.data;
      },
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useAddProjectMutation,
  useDeleteProjectMutation,
  useGetProjectQuery,
  useUpdateProjectMutation,
  useAddSkillMutation,
  useDeleteSkillMutation,
  useGetAllSkillsQuery,
  useGetSkillQuery,
  useUpdateSkillMutation,
  useAddExperienceMutation,
  useDeleteExperienceMutation,
  useGetAllExperiencesQuery,
  useGetExperienceQuery,
  useUpdateExperienceMutation,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
  useGetBlogQuery,
  useUpdateBlogMutation,
} = api;
