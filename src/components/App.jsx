import React, { Component } from 'react';
import style from '../components/App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  onSubmit = newContact => {
    console.log(newContact);
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onChange = e => (
    // console.log(e.target.value)
    this.setState({ filter: e.target.value })
  );

  render() {
    const { contacts, filter } = this.state;
    const phoneContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase()
    );

    return (
      <div className={style.main}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onChange}/>
        <ContactList phoneContacts={phoneContacts} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
