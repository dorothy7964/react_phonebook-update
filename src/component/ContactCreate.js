import React, { Component } from 'react';

class ContactCreate extends Component {
  static defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
  }

  state = {
    name : '',
    phone : '',
  }

  handleChange = (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick = () => {
    const contact = {
      name : this.state.name,
      phone : this.state.phone
    };
    this.props.onCreate(contact);
    this.setState({
      name : '',
      phone : ''
    });
    this.nameInput.focus();
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
            ref={(ref) => {this.nameInput = ref}}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={phone}
            onChange={this.handleChange}
          />
        </p>
        <button onClick={this.handleClick}>Create</button>
      </div>
    );
  }
}

export default ContactCreate;
