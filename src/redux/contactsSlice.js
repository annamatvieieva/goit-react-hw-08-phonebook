import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = { contacts: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;
