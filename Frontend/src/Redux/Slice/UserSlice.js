import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isUserLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isUserLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = UserSlice.actions;

export default UserSlice.reducer;
