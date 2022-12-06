import { useDispatch, useSelector } from 'react-redux';
import { Contact, ContactListBox } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/slices/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log('contacts', contacts);
  const filter = useSelector(getFilter);
  console.log(filter);
  const normalizeFilter = filter.toLocaleLowerCase();
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
  console.log('filterContacts', filterContacts);
  console.log('normalizeFilter', normalizeFilter);

  return (
    <ContactListBox>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            {' '}
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </Contact>
        );
      })}
    </ContactListBox>
  );
};
