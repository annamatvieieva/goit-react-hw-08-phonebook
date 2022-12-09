import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const normalizeFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return filterContacts;
  }
);
