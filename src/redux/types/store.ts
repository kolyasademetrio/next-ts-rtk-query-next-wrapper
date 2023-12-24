import {
   EnhancedStore,
   Reducer,
   ReducersMapObject,
   AnyAction,
   CombinedState,
} from "@reduxjs/toolkit";
// import { AxiosInstance } from "axios";
import { rtkApi } from "../rtkApi";
import { TestSchema } from "@/src/redux/slices/testSlice";
import { DynamicSchema } from "../slices/dynamicSlice";

export interface StoreSchema {
   test: TestSchema;

   dynamic?: DynamicSchema;

   [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type StoreSchemaKey = keyof StoreSchema;

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StoreSchema>;
   reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
   add: (key: StoreSchemaKey, reducer: Reducer) => void;
   remove: (key: StoreSchemaKey) => void;
}

export interface ReduxStoreWithReducerManager extends EnhancedStore<StoreSchema> {
   reducerManager: ReducerManager;
}

export interface ThunkConfig<Error> {
   rejectValue: Error;
   state: StoreSchema;
}

export type StateSchemaKey = keyof StoreSchema;

export type ReducersList = {
   [name in StateSchemaKey]?: Reducer<NonNullable<StoreSchema[name]>>;
};
