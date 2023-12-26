import buildSlice from "../buildSlice";
import { testApi } from "../testApi";

export interface TestSchema {
   count: number;
   items: {}[];
   item: {};
   error: boolean;
   isLoading: boolean;
}

const initialState: TestSchema = {
   count: 0,
   items: [],
   item: {},
   error: false,
   isLoading: false,
};

const testSlice = buildSlice({
   name: "test",
   initialState,
   reducers: {
      add: state => {
         state.count += 1;
      },
      subtract: state => {
         state.count -= 1;
      },
      addNumber: (state, action) => {
         state.count += action.payload;
      },
   },
   extraReducers(builder) {
      builder.addMatcher(testApi.endpoints.getTodos.matchFulfilled, (state, action) => {
         state.items = action.payload.test;
         state.isLoading = false;
         state.error = false;
      });
      builder.addMatcher(testApi.endpoints.getTodos.matchPending, (state, action) => {
         state.isLoading = true;
         state.error = false;
      });
      builder.addMatcher(testApi.endpoints.getTodos.matchRejected, (state, action) => {
         state.error = true;
         state.isLoading = false;
      });
   },
});

const getTestCount = (state: any) => state.test.count;

export const testSelectors = {
   getTestCount,
};
export const { actions: testActions } = testSlice;
export const { useActions: useTestActions } = testSlice;
export const { reducer: testReducer } = testSlice;
