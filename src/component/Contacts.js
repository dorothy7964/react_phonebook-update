import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import ConteactDetails from './ConteactDetails';
import ContactCreate from'./ContactCreate';

class Contacts extends Component {
	state = {
		keyword : '',
		contactData : [{
			name : 'Abet',
			phone : '010-0000-0001'
		}, {
			name : 'Charlie',
			phone : '010-0000-0002'
		}, {
			name : 'Betty',
			phone : '010-0000-0003'
		}, {
			name : 'David',
			phone : '010-0000-0004'
		}]
	}

  render() {
		const mapToComponents = (data) => {
			return data.map((value,index) => (
				<ContactInfo
					key={index}
					value={value}
				/>
			));
		};

		const { contactData } = this.state;
    return(
      <div className="Contacts">
				<h1>Contacts</h1>
				<input
					name="keyword"
					placeholder="Search"
				/>
				<div>{mapToComponents(contactData)}</div>

				<ConteactDetails />

				<ContactCreate />
			</div>
    );
  }
}

export default Contacts;
