import { apiSlice } from "@/store/api.slice.ts";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    auth: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useAuthMutation } = authApiSlice;
