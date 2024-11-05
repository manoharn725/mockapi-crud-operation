import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://672850bb270bd0b97554faa1.mockapi.io",
  }),
  tagTypes: ["GetStudentsData"],
  endpoints: (builder) => ({
    getStudentsData: builder.query({
      query: () => "/students",
      providesTags: ["GetStudentsData"],
    })
  }),
});

export const {useGetStudentsDataQuery} = studentsApi

