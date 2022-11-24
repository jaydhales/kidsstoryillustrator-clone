import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { 
    isAuthenticated: false,
    user: null, 
    token: null,
  },
  reducers: {
      signUp: (state, action) => {
          localStorage.setItem("token", action.hash )
          const { email, token } = action.payload
          state.user = { email };
          state.token = token;
          state.isAuthenticated = true;
      },
      logIn: (state, action) => {
          localStorage.setItem("token", action.hash )
          const { email, token } = action.payload
          state.user = { email };
          state.token = token;
          state.isAuthenticated = true;
      },
      logOut: (state) => {
        localStorage.removeItem("token");
          state.user = null
          state.token = null
          state.isAuthenticated = false;
      },
  },
});

export const { signUp, logIn, logOut } = authSlice.actions;

export default authSlice.reducer;