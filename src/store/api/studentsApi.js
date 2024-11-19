import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://672850bb270bd0b97554faa1.mockapi.io",
  }),
  tagTypes: ["GetStudentsData", "GetStudentById"],
  endpoints: (builder) => ({
    getStudentsData: builder.query({
      query: () => "/students",
      providesTags: ["GetStudentsData"],
    }),
    getStudentById: builder.query({
      query: (id) => ({
        url: `/students/${id}`,
        method: "GET",
        providesTags: ["GetStudentById"],
      }),
    }),
    addStudent: builder.mutation({
      query: (studentData) => ({
        url: "/students",
        method: "POST",
        body: studentData,
      }),
      invalidatesTags: ["GetStudentsData"],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["GetStudentsData"],
    }),
    updateStudent: builder.mutation({
      query: ({ id, ...studentData }) => ({
        url: `/students/${id}`,
        method: "PUT",
        body: studentData,
      }),
      invalidatesTags: ["GetStudentsData", "GetStudentById"],
    }),
  }),
});

export const {
  useGetStudentsDataQuery,
  useGetStudentByIdQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
} = studentsApi;
