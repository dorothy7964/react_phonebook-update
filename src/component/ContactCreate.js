import React, { Component } from 'react';

class ContactCreate extends Component {
  render() {
    return(
      <div>
        <h1>ContactCreate</h1>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
          />
        </p>
        <button>Create</button>
      </div>
    );
  }
}

export default ContactCreate;
