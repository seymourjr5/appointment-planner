import React, { useState } from "react";
import PropTypes from 'prop-types';

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.addToAppointments(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('')
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
                    title={title}
                    setTitle={setTitle}
                    contact={contact}
                    setContact={setContact}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    contacts={props.contacts}
                    onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
               tiles={props.appointments} 
        />
      </section>
    </div>
  );
};

AppointmentsPage.prototypes = {
  contacts: PropTypes.array.isRequired,
  appointments: PropTypes.array.isRequired,
  addToAppointments: PropTypes.func.isRequired
}