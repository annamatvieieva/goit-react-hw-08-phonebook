import { useDispatch, useSelector } from 'react-redux';
import { Contact, ContactListBox } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizeFilter = filter.toLocaleLowerCase();
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
  // const handleDelete = (id) => dispatch(deleteContact(id));

  return (
    <ContactListBox>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            {' '}
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() =>  dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </Contact>
        );
      })}
    </ContactListBox>
  );
};

