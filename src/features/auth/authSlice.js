import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    isAuthenticated: false,
    user: null, 
    token: null,
  },
  reducers: {
      signUp(state, action) {
          localStorage.setItem("token", action.hash )
          const { email, lastname, firstname, username, hash } = action.payload
          state.user = { email, lastname, firstname, username };
          state.token = hash;
          state.isAuthenticated = true;
      },
      logIn(state, action) {
          localStorage.setItem("token", action.hash )
          const { email, lastname, firstname, username, hash } = action.payload
          state.user = { email, lastname, firstname, username };
          state.token = hash;
          state.isAuthenticated = true;
      },
      logOut(state) {
        localStorage.removeItem("token");
          state.user = null
          state.token = null
          state.isAuthenticated = false;
      },
  },
});

export const { signUp, logIn, logOut } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;