import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { resetWarningCache } from 'prop-types';
import { ContactList } from './ContactList/ContactList';

const INITIAL_STATE = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
  filter: '',
  name: '',
  number: '',
};

export class App extends Component {
  state = {...INITIAL_STATE};

  nameInputId = nanoid();
  telInputId = nanoid();
  filterInputId = nanoid();
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  reset = e => {
    this.setState({
      name: '',
      number: ''
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { name, number} = this.state;
    const contactId = nanoid();

    const contact = {
      id: contactId,
      name,
      number
    }
    this.setState(prevState => ({ contacts: [...prevState.contacts, contact]}))
    this.reset();
  }
  
    render() {
      const { name, number, contacts, filter } = this.state;
      const normalizeFilter = filter.toLocaleLowerCase();
      const filterContacts = contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));
      return (
        <>
          <GlobalStyle />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              id={this.nameInputId}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor={this.telInputId}>Number</label>
            <input
              type="tel"
              name="number"
              value={number}
              id={this.telInputId}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />

            <button type="submit">Add contact</button>
          </form>
          <h2>Contacts</h2>
          <label htmlFor={this.filterInputId}>Find contacts by name</label>
            <input
              type="text"
              name="filter"
              value={filter}
              id={this.filterInputId}
              onChange={this.handleChange}
            />
          <ContactList contacts={filterContacts}/>
        </>
      );
    }
  }

