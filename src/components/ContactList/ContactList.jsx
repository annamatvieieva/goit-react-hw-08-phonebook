import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilterContacts } from 'redux/filter/selectors';
import { Contact, ContactListBox } from './ContactList.styled';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilterContacts);
  const message = 'You have no contacts';

  return (
    <ContactListBox>
      {filterContacts.length > 0
        ? filterContacts.map(({ id, name, number }) => {
            return (
              <Contact key={id}>
                {' '}
                <p>
                  {name}: {number}
                </p>
                <button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <DeleteIcon />
                </button>
              </Contact>
            );
          })
        : message}
    </ContactListBox>
  );
};
