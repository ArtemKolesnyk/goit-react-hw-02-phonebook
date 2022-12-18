import { nanoid } from "nanoid";
import { Component } from "react";
// import GlobalStyle from "./GlobalStyle";
import ConatctForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from "./components/Filter";



class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = contacts => {
    const newContact = {
      ...contacts,
      id: nanoid(),
    };
    
    if (contacts && contacts) {
      alert(`${newContact.name} is already in contacts.`);
    } else {debugger;
        this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }));
    }
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFiltredContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
    

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        {/* <GlobalStyle/> */}
        <h1>--PHONEBOOK--</h1>
        <ConatctForm addContact={this.addContact} />
        
        <h2>--CONTACTS--</h2>
        {contacts.length > 1 &&
          (<Filter value={filter} onChangefilter={this.changeFilter} />)}
        
        <ContactList contacts={this.getFiltredContact()}
          onRemoveContact={this.removeContact} 
        />
      </>
    )
  }
};

export default App;