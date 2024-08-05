import { useState } from 'react'
import './App.css'
import ContactList from './ContactList'
import ContactForm from './ContactForm'
import Contact from './Contact'


const App = () => {

  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
      <>
      <div>
        <h3>Ajouter un contact</h3>
        <ContactForm onAdd={addContact} />
      </div>

      <div>
        <h3>Liste des contacts</h3>
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </div>
    </>
  )
}

export default App;
