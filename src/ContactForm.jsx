import React from 'react';
import { useState } from 'react';


function ContactForm({onAdd}) { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('Tous les champs doivent être remplis');
      return;
    }
    onAdd( {name, email});
    setName('');
    setEmail('');
  };


  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}> 
        <label> Nom :
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </label>

        <label> Email :
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>  
        </label>   

        <button type="submit">
        valider
        </button>
      </form>
    </>
);
}


export default ContactForm;