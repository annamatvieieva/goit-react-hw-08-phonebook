import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';

const Contacts = () => {
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

export default Contacts;
