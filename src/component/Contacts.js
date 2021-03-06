import React, { Component } from 'react';
import update from 'react-addons-update';

import ContactInfo from './ContactInfo';
import ConteactDetails from './ConteactDetails';
import ContactCreate from'./ContactCreate';

class Contacts extends Component {
	state = {
		nextId: 4,
		keyword : '',
		selecteKey : -1,
		buttonMessage : '',
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

	/* react-addons-update 사용 : $push, $splice, $set */
	handleCreate = (contact) =>{
		this.setState({
			contactData  : update(this.state.contactData, { $push : [contact] }),
			nextId : this.state.nextId + 1
		});
	}

	handleRemove = () => {
		if(this.state.selecteKey < 0){
			return (
				this.setState({
					buttonMessage : '(Remove button)'
				})
			);
		}
		this.setState({
			contactData : update(this.state.contactData,
				{
					$splice : [[ this.state.selecteKey, 1 ]]
				}
			),
			selecteKey : -1,
			nextId : this.state.nextId - 1
		});
	}

	handleEdit = (name, phone) => {
		this.setState({
			contactData : update(this.state.contactData,
				{
					[this.state.selecteKey] : {
						name : { $set : name },
						phone : { $set : phone },
					}
				}
			)
		});
	}

	editMessage = (text) => {
		this.setState({
			buttonMessage : text
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

		const { nextId, contactData, selecteKey, buttonMessage } = this.state;
    return(
      <div className="Contacts">
				<h1>Contacts</h1>
				<input
					name="keyword"
					placeholder="Search"
					onChange={this.handleChange}
				/>
				<div>총 갯수 : {nextId}</div>
				<div>{mapToComponents(contactData)}</div>

				<ConteactDetails
					selecteKey={selecteKey}
					isSelected={selecteKey !== -1}
					contact={contactData[selecteKey]}
					buttonMessage={buttonMessage}
					onRemove={this.handleRemove}
					onEdit={this.handleEdit}
					editMessage={this.editMessage}
				/>

				<ContactCreate
					onCreate={this.handleCreate}
				/>
			</div>
    );
  }
}

export default Contacts;
