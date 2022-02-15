import React from "react";
import PropTypes from 'prop-types';

export const ContactPicker = (props) => {
  return (
    <div>
      <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
      <select onChange={props.onChange}>
        {props.contacts.map(contact => <option key={contact} value={contact} >{contact}</option>)}
      </select>
    </div>
  );
};

ContactPicker.prototypes = {
  onChange: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
}
