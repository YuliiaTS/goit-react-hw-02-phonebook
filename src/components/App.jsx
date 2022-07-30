import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from '../components/App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  onChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={style.main}>
        <h1>Phonebook</h1>
        <form onSubmit={this.onSubmit}>
          <label className={style.label}>
            Name
            <input
              onChange={this.onChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={style.label}>
            Number
            <input
              onChange={this.onChange}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        

        {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
      </div>
    );
  }
}

export default App;
