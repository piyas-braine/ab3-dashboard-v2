import { baseQueryWithAuth } from "@/utility/customBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const organizationApi = createApi({
    reducerPath: "organizationApi",
    baseQuery: baseQueryWithAuth,
    tagTypes: ["organizations"],
    endpoints: (builder) => ({
        inviteOrganization: builder.mutation({
            query: (body) => ({
                url: `/invites/invite-organization`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["organizations"],
        }),
        setUpOrganization: builder.mutation({
            query: (body) => ({
                url: `/organization/setup-organization`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["organizations"],
        }),
        getAllOrganizations: builder.query({
            query: () => ({
                url: `/organization`,
                method: "GET",
            }),
            providesTags: ["organizations"],
        }),
        getOrganization: builder.query({
            query: (id) => ({
                url: `/organization/${id}`,
                method: "GET",
            }),
            providesTags: ["organizations"],
        }),
    }),
});

export const { useInviteOrganizationMutation, useSetUpOrganizationMutation, useGetAllOrganizationsQuery, useGetOrganizationQuery } = organizationApi;