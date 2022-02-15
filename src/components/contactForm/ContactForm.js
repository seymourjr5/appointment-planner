import React from "react";
import PropTypes from 'prop-types';

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  onSubmit
}) => {

  const handleNameChange = (e) => {
    return setName(e.target.value);
  }

  const handleNumberChange = (e) =>{
    return setNumber(e.target.value);
  }

  const handleEmailChange = (e) =>{
    return setEmail(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>

        <label for="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />

        <label for="number">Phone Number:</label>
        <input type="text" id="number" value={number} onChange={handleNumberChange} required pattern='^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$'/>

        <label for="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  setNumber: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}