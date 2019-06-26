import React, { Component } from 'react';

class ContactCreate extends Component {
  state = {
    name : '',
    phone : '',
  }

  handleChange = (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const { name, phone } = this.state;
    return(
      <div>
        <h1>ContactCreate</h1>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={phone}
            onChange={this.handleChange}
          />
        </p>
        <button>Create</button>
      </div>
    );
  }
}

export default ContactCreate;
