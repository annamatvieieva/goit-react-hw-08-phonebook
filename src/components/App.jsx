import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Box p={3}>
        <Box as="h1" mb={4}>
          Phonebook
        </Box>
        <ContactForm />
        <Box as="h2" mb={4}>
          Contacts
        </Box>
        <Filter />
        {isLoading && !error && (
          <b>Please, wait. Contacts are loading or updating...</b>
        )}
        <ContactList />
      </Box>
    </>
  );
};
