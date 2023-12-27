import { rtkApi } from "./rtkApi";

interface TestApiDTO {
   completed: boolean;
   id: number;
   title: string;
   userId: number;
}

import { TODOS } from "./mutationApi";

export const testApi = rtkApi.injectEndpoints({
   overrideExisting: true,
   endpoints: build => ({
      getTodos: build.query<{ test: TestApiDTO[] }, void>({
         query: () => `/todos`,
         transformResponse: (response: TestApiDTO[]) => {
            return { test: response };
         },
         providesTags: [TODOS],
      }),
      getTodoById: build.query<{ titleUpdated: string }, { id: string }>({
         query: ({ id }) => `/todos/${id}`,
         transformResponse: (response: TestApiDTO) => {
            return { titleUpdated: response.title };
         },
      }),
   }),
});

export const {
   endpoints: { getTodos, getTodoById },
   useGetTodosQuery,
   useLazyGetTodosQuery,
   useGetTodoByIdQuery,
} = testApi;
