import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { AppState } from "@/store/index.ts";
import { logOut } from "@/components/auth/auth.slice.ts";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5888",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as AppState).auth.token;
    if (token) {
      headers.set("Authorization", token);
    }
    return headers;
  },
});

const baseQueryWithLogout = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    api.dispatch(logOut());
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithLogout,
  endpoints: () => ({}),
});
