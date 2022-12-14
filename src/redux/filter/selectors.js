import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';

export const selectFilter = state => state.filter.filter;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return filterContacts;
  }
);
