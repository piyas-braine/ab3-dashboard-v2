import { baseQueryWithAuth } from "@/utility/customBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: baseQueryWithAuth,
    tagTypes: ["users"],
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => ({
                url: `/users/me`,
                method: "GET",
            }),
            providesTags: ["users"],
        }),
        login: builder.mutation({
            query: (body) => ({
                url: `/users/login`,
                method: "POST",
                body
            }),
            invalidatesTags: ["users"],
        }),
        logOut: builder.mutation<void, void>({
            query: () => ({
                url: `/users/logout`,
                method: "POST",
            }),
            invalidatesTags: ["users"],
        }),
    }),
});

export const { useGetMeQuery, useLoginMutation, useLogOutMutation } = userApi;