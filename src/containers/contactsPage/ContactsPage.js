import React, { useEffect, useState } from "react";
import Proptypes from 'prop-types';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicate){
      props.addToContacts(name, number, email);
      setName('');
      setNumber('');
      setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=>{
    if((props.contacts.find(contact => contact.name === name)) !== undefined){
      setDuplicate(true)
    }else{
      setDuplicate(false);
    }
  }, [name, props.contacts, duplicate])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
                  name={name}
                  setName={setName}
                  number={number}
                  setNumber={setNumber}
                  email={email}
                  setEmail={setEmail}
                  onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
                tiles={props.contacts}
        />
      </section>
    </div>
  );
};

ContactsPage.prototypes ={
  addToContacts: Proptypes.func.isRequired,
  contacts: Proptypes.array.isRequired
}