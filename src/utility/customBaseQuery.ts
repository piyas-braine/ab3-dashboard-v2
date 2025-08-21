import { fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { BASE_URL } from "@/utility/Api";

// Define base query with headers
const customBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    return headers;
  },
});

// TypeScript-compatible wrapper function
export const baseQueryWithAuth: BaseQueryFn<
  Parameters<typeof customBaseQuery>[0], // args type
  unknown, // response type
  FetchBaseQueryError // error type
> = async (args, api, extraOptions) => {
  const result = await customBaseQuery(args, api, extraOptions);

  return result;
};