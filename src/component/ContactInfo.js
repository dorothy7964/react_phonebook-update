import React from 'react';

const ContactInfo = ({ value, onClick }) => {
  return (
    <div onClick={onClick}>{value.name}</div>
  )
}

export default ContactInfo;
