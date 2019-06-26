import React, { Component } from 'react';

class ConteactDetails extends Component {
  static defaultProps = {
    contact : {
      name: '이름',
      phone: '전화번호',
    }
  }

  render() {
    const { contact } = this.props;
    return(
      <div>
        <h1>ConteactDetails</h1>
        <div>{contact.name}</div>
        <div>{contact.phone}</div>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    );
  }
}

export default ConteactDetails;
