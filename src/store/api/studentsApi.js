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
    getStudentById: builder.query({
      query: (id) => ({
        url: `/students/${id}`,
        method: "GET",
        providesTags: ["GetStudentsData"],
      }),
    }),
    addStudent: builder.mutation({
      query: ({ firstName, lastName, email, phoneNumber }) => ({
        url: "/students",
        method: "POST",
        body: { firstName, lastName, email, phoneNumber },
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
      query: ({ id, ...rest }) => ({
        url: `/students/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["GetStudentsData"],
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
