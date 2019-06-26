import React, { Component } from 'react';
import update from 'react-addons-update';

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

	/* react-addons-update 사용 : $push, $splice */
	handleCreate = (contact) =>{
		this.setState({
			contactData  : update(this.state.contactData, { $push : [contact] }),
		});
	}

	handleRemove = () => {
		this.setState({
			contactData : update(this.state.contactData,
				{
					$splice : [[ this.state.selecteKey, 1 ]]
				}
			),
			selecteKey : -1,
		});
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
					isSelected={selecteKey !== -1}
					contact={contactData[selecteKey]}
					onRemove={this.handleRemove}
				/>

				<ContactCreate
					onCreate={this.handleCreate}
				/>
			</div>
    );
  }
}

export default Contacts;
