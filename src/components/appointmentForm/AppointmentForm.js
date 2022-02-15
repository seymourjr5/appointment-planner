import React from "react";
import PropTypes from 'prop-types';

import { ContactPicker } from '../contactPicker/ContactPicker'; 

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  onSubmit
}) => {
  const handleTitleChange = (e) =>{
    setTitle(e.target.value)
  }

  const handleDateChange = (e) =>{
    setDate(e.target.value)
  }

  const handleTimeChange = (e) =>{
    setTime(e.target.value)
  }

  const handleContactPickerChange = (e) =>{
    setContact(e.target.value);
  }

  const getContactNames = () => contacts.map(contact => contact.name)

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>

        <label for="name">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />

        <label for='contact-picker'>Select a contact to book an appointment with: </label>
          <ContactPicker
            id='contact-picker'
            name="contact"
            value={contact}
            contacts={getContactNames()}
            onChange={handleContactPickerChange}
            placeholder="Appointment With"
          />

        <label for="date">Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} required min={getTodayString()}/>

        <label for="time">Time:</label>
        <input type="time" id="time" value={time} onChange={handleTimeChange} required />
        
        <br/>
        <br/>

        <button type="submit">Add Appointment</button>

      </form>
    </div>
  );
};

AppointmentForm.prototypes = {
  contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  contact: PropTypes.string.isRequired,
  setContact: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
