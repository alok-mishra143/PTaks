import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
  },
});
