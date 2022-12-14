import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operations';

const userInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// const extraActions = [register];
// const getAction = type => extraActions.map(action => action[type]);

export const userSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => {})
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {})
      .addCase(logIn.pending, (state, action) => {})
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {})
      .addCase(logOut.pending, state => {})
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {}),
  // .addMatcher(isAnyOf(...getAction('rejected')), (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // })
});

export const userReducer = userSlice.reducer;
