"use client";
import { testSelectors, useTestActions } from "../redux/slices/testSlice";
import { dynamicSelectors, dynamicActions } from "../redux/slices/dynamicSlice";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "./DynamicModuleLoader";
import { dynamicReducer } from "../redux/slices/dynamicSlice";
import { useGetTodosQuery, useGetTodoByIdQuery } from "../redux/testApi";

const TestClient = () => {
   // get count with selector function directly
   // const count = useSelector((state: any) => state.test.count);

   const { data } = useGetTodosQuery();
   const { data: data2 } = useGetTodoByIdQuery({ id: "2" });

   const count = useSelector(testSelectors.getTestCount);
   const dynamicCount = useSelector(dynamicSelectors.getDynamicCount);

   const { add, subtract, addNumber } = useTestActions();

   const addHandler = () => {
      add();
   };

   const subtractHandler = () => {
      subtract();
   };

   const addNumberHandler = () => {
      addNumber(5);
   };

   return (
      <>
         {console.log("data", data)}
         <div>
            <button onClick={addHandler}>+</button>
            <button onClick={subtractHandler}>-</button>
            {dynamicCount}
            <DynamicModuleLoader reducers={{ dynamic: dynamicReducer }}>
               <button onClick={addNumberHandler}>add 5</button>
               <div>{data2?.titleUpdated}</div>
               {/* {data?.map(item => (
                  <div>{item.title}</div>
               ))} */}
            </DynamicModuleLoader>
         </div>
         <div>{count}</div>
      </>
   );
};

export default TestClient;
