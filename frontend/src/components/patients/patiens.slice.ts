import { apiSlice } from "@/store/api.slice.ts";
import { Patient } from "@/components/patients/types.ts";

export const patientsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], void>({
      query: () => "/patients",
    }),
  }),
});

export const { useGetPatientsQuery } = patientsSlice;
