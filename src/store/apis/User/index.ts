import { baseQueryWithAuth } from "@/utility/customBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: baseQueryWithAuth,
    tagTypes: ["users"],
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => ({
                url: `/me`,
                method: "GET",
            }),
            providesTags: ["users"],
        }),
        logOut: builder.mutation<void, void>({
            query: () => ({
                url: `/logout`,
                method: "POST",
            }),
            invalidatesTags: ["users"],
        }),
    }),
});

export const { useGetMeQuery, useLogOutMutation } = userApi;