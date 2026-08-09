import { createSlice } from "@reduxjs/toolkit";
import { HydrateUserAction, LoginUserAction } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  },

  // Synchronous actions defined in this slice
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },

    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },

  // Handle actions created outside this slice
  extraReducers: (builder) => {
    builder
      .addCase(LoginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(LoginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(LoginUserAction.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      .addCase(HydrateUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(HydrateUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(HydrateUserAction.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
