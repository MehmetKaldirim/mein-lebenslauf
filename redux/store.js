import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../components/users/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
