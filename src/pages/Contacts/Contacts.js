import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { ContactForm } from 'components/ContactForm';
import { ContactsPageStyle, PhoneBook, SavedContact } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsPageStyle>
      <h1>My Phonebook</h1>
      <div>
        <ContactForm />
        <PhoneBook>
          <h2>My Contacts</h2>
          <Filter />
          <SavedContact>
            {isLoading && !error && (
              <b>Please, wait. Contacts are loading or updating...</b>
            )}
            <ContactList />
          </SavedContact>
        </PhoneBook>
      </div>
    </ContactsPageStyle>
  );
};

export default Contacts;
