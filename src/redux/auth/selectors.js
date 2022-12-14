import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.user.user;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectIsRefreshing = state => state.user.isRefreshing;

export const selectAuthInformation = createSelector(
  [selectUser, selectIsLoggedIn, selectIsRefreshing],
  (user, isLoggedIn, isRefreshing) => {
    const authInformation = { user, isLoggedIn, isRefreshing };
    return authInformation;
  }
);
