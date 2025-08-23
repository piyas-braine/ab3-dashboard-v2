import { baseQueryWithAuth } from "@/utility/customBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const problemApi = createApi({
    reducerPath: "problemApi",
    baseQuery: baseQueryWithAuth,
    tagTypes: ["problems"],
    endpoints: (builder) => ({
        getAllProblem: builder.query({
            query: () => ({
                url: `/problem`,
                method: "GET",
            }),
            providesTags: ["problems"],
        }),
        getProblem: builder.query({
            query: (id) => ({
                url: `/problem/${id}`,
                method: "GET",
            }),
            providesTags: ["problems"],
        }),
        createProblem: builder.mutation({
            query: (body) => ({
                url: `/problem`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["problems"],
        }),
        deleteProblem: builder.mutation({
            query: (id) => ({
                url: `/problem/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["problems"],
        }),
    }),
});

export const { useGetAllProblemQuery, useGetProblemQuery, useCreateProblemMutation, useDeleteProblemMutation } = problemApi;