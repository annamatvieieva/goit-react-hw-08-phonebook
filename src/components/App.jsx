import { PureComponent } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

export class App extends PureComponent {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
