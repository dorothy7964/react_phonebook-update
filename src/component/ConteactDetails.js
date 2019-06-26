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
    name : '',
    phone : '',
  }

  handleToggle = () => {
    this.setState({
      isEdit : !this.state.isEdit
    });
  }

  handleChange = (e) => {
    const nextState ={};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
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
    const inputEdit = (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
    const edit = isEdit? inputEdit : details;
    const view = isSelected? edit : blank;
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
