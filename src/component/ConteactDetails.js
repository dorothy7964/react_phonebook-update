import React, { Component } from 'react';

class ConteactDetails extends Component {
  static defaultProps = {
    isSelected : false,
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
    const { isSelected, contact, onRemove } = this.props;
    const blank = '클릭하세요.';
    const details = (
      <div>
        <div>{contact.name}</div>
        <div>{contact.phone}</div>
      </div>
    );
    const view = isSelected? details : blank;
    return(
      <div>
        <h1>ConteactDetails</h1>
        <div>{view}</div>
        <button onClick={this.handleToggle}>{isEdit? 'OK':'Edit'}</button>
        <button onClick={onRemove}>Remove</button>
      </div>
    );
  }
}

export default ConteactDetails;
