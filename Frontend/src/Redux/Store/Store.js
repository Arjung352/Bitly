import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Slice/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
