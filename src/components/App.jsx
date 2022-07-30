import React, { Component } from 'react';
import style from '../components/App.module.css';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
  };
  onSubmit = data => {
    console.log(data);

  }
  render() {
    return (
      <div className={style.main}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit}/>
      {/* <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
      </div>
    );
  }
}

export default App;
