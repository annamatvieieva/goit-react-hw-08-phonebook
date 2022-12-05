import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

export const App = () => {
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
