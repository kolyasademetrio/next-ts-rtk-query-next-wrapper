import { rtkApi } from "./rtkApi";

interface MutationApiDTO {
   completed: boolean;
   id: number;
   title: string;
   userId: number;
}

export const TODOS = "TODOS";

export const mutationApi = rtkApi.injectEndpoints({
   overrideExisting: true,
   endpoints: build => ({
      postTodo: build.mutation<void, MutationApiDTO>({
         query: body => ({
            method: "POST",
            url: `/todos`,
            body,
         }),
         invalidatesTags: [TODOS],
      }),
   }),
});

export const {
   endpoints: { postTodo },
   usePostTodoMutation,
} = mutationApi;
