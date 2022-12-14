import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register } from './operations';

const userInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const extraActions = [register];
const getAction = type => extraActions.map(action => action[type]);

export const userSlice = createSlice({
  name: 'auth',
  initialState: userInitialState,
  extraReducers: builder =>
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }),
  // .addMatcher(isAnyOf(...getAction('rejected')), (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // })
});

export const userReducer = userSlice.reducer;
