import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import ConteactDetails from './ConteactDetails';
import ContactCreate from'./ContactCreate';

class Contacts extends Component {
	state = {
		keyword : '',
		selecteKey : -1,
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

	handleChange = (e) => {
		this.setState({
			keyword : e.target.value
		});
	}

	handleClick = (key) => {
		this.setState({
			selecteKey : key
		});
		console.log(key);
	}

  render() {
		const mapToComponents = (data) => {
			data.sort((a,b) => {
				return a.name < b.name ? -1 : 1;
			});
			data = data.filter(
				(contact) => {
					return contact.name.toLowerCase()
					.indexOf(this.state.keyword.toLowerCase()) > -1;
				}
			)
			return data.map((value,index) => (
				<ContactInfo
					key={index}
					value={value}
					onClick={()=>this.handleClick(index)}
				/>
			));
		};

		const { contactData, selecteKey } = this.state;
    return(
      <div className="Contacts">
				<h1>Contacts</h1>
				<input
					name="keyword"
					placeholder="Search"
					onChange={this.handleChange}
				/>
				<div>{mapToComponents(contactData)}</div>

				<ConteactDetails
					contact={contactData[selecteKey]}
				/>

				<ContactCreate />
			</div>
    );
  }
}

export default Contacts;
