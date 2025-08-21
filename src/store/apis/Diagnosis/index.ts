import { baseQueryWithAuth } from "@/utility/customBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const diagnosisApi = createApi({
    reducerPath: "diagnosisApi",
    baseQuery: baseQueryWithAuth,
    tagTypes: ["diagnoses"],
    endpoints: (builder) => ({
        getAllDiagnosis: builder.query({
            query: () => ({
                url: `/diagnosis`,
                method: "GET",
            }),
            providesTags: ["diagnoses"],
        }),
    }),
});

export const { useGetAllDiagnosisQuery } = diagnosisApi;