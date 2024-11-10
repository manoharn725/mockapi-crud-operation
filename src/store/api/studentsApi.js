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
    }),
    addStudent: builder.mutation({
      query:({firstName, lastName, email, phoneNumber}) => ({
        url: '/students',
        method: 'POST',
        body: {firstName, lastName, email, phoneNumber},
      }),
      invalidatesTags:['GetStudentsData']
    })
  }),
});

export const { useGetStudentsDataQuery, useAddStudentMutation } = studentsApi;
