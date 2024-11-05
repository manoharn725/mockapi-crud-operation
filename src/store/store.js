import { configureStore } from "@reduxjs/toolkit";
import { studentsApi } from "./api/studentsApi";

export const store = configureStore({
    reducer:{
        [studentsApi.reducerPath]: studentsApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(studentsApi.middleware)
})