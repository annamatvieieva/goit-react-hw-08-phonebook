import { useSelector } from 'react-redux';
import { Contact, ContactListBox } from './ContactList.styled';
import { selectFilterContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <ContactListBox>
      {filterContacts.map(({ id, name, phone }) => {
        return (
          <Contact key={id}>
            {' '}
            <p>
              {name}: {phone}
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
