import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

const INITIAL_STATE = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
  filter: '',
};

export class App extends Component {
  state = {...INITIAL_STATE};

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  addContact = contact => {
    const { name } = contact;
    const { contacts } = this.state;
    const normalizeName = name.toLocaleLowerCase();
    const filter = ({ name }) => name.toLowerCase().includes(normalizeName);
    if (contacts.find(filter)) {
      return alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({ contacts: [...prevState.contacts, contact] }));
    }
  }
  
    render() {
      const {contacts, filter} = this.state;
      const normalizeFilter = filter.toLocaleLowerCase();
      const filterContacts = contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));
      return (
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact}/>
          <h2>Contacts</h2>
            <Filter
              value={filter}
              onChange={this.handleChange}
            />
          <ContactList contacts={filterContacts}/>
        </div>
      );
    }
  }

