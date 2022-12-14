import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/slice';
import { contactsReducer } from './contacts/slice';
import { userReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
