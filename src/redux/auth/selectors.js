import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthInformation = createSelector(
  [selectUser, selectIsLoggedIn, selectIsRefreshing],
  (user, isLoggedIn, isRefreshing) => {
    const authInformation = { user, isLoggedIn, isRefreshing };
    return authInformation;
  }
);
