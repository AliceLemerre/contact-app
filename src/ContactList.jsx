import React from 'react';
import Contact from './Contact';



const ContactList = ({contacts}) => {

  return (
    <ul className="contact-list">
      {contacts.map((contact, email) => (
        <li key={email} className="contact-line">
          <Contact
          name={contact.name} 
          email={contact.email}
          />
        </li>
      ))}
    </ul>
    );
};
  
export default ContactList;

