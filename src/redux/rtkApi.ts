import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TODOS } from "./mutationApi";

export const rtkApi = createApi({
   reducerPath: "api",
   tagTypes: [TODOS],
   baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
   endpoints: () => ({}),
});
