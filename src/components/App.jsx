import { GlobalStyle } from './GlobalStyle';
import { useEffect } from 'react';
import { Box } from './Box';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';


export const App = () => {
  const dispatch = useDispatch();
  
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
        <ContactList />
      </Box>
    </>
  );
};
