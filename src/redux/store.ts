import { configureStore } from "@reduxjs/toolkit";
import planSlice from "./plan-slice";

const reducer = {
  plan: planSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
