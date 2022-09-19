import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  addContact = contact => {
    const { name } = contact;
    const { contacts } = this.state;
    const normalizeName = name.toLocaleLowerCase();
    const filter = ({ name }) => name.toLowerCase().includes(normalizeName);
    if (contacts.find(filter)) {
      return alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <>
        <GlobalStyle />
        <Box p={3}>
          <Box as="h1" mb={4}>
            Phonebook
          </Box>
          <ContactForm onSubmit={this.addContact} />
          <Box as="h2" mb={4}>
            Contacts
          </Box>
          <Filter value={filter} onChange={this.handleChange} />
          <ContactList contacts={filterContacts} onClick={this.deleteContact} />
        </Box>
      </>
    );
  }
}
