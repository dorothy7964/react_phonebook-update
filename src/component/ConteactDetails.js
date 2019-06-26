import React, { Component } from 'react';

class ConteactDetails extends Component {
  static defaultProps = {
    contact : {
      name: '이름',
      phone: '전화번호',
    },
    onRemove: () => console.warn('onRemove not defined'),
  }

  state = {
    isEdit : false,
  }

  handleToggle = () => {
    this.setState({
      isEdit : !this.state.isEdit
    });
  }

  render() {
    const { isEdit } = this.state;
    const { contact, onRemove } = this.props;
    return(
      <div>
        <h1>ConteactDetails</h1>
        <div>{contact.name}</div>
        <div>{contact.phone}</div>
        <button onClick={this.handleToggle}>{isEdit? 'OK':'Edit'}</button>
        <button onClick={onRemove}>Remove</button>
      </div>
    );
  }
}

export default ConteactDetails;
