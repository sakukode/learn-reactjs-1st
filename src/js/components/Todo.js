import React from 'react';

export default class Todo extends React.Component {
	constructor() {
		super();			
	}
	
	handleDelete() {
		const {id} = this.props;
		this.props.deleteTodo(id);
	}

	render() {					
		const { id, text, complete } = this.props;
		const completedStyle = complete ? {backgroundColor: "#4caf50"} : {backgroundColor: "#666666"};
		const completeText = complete ? "Complete" : "Uncomplete";
		const btnDeleteStyle = {
			marginLeft: "10px"
		};
		return (
			 <li class="list-group-item">
				<button onClick={this.handleDelete.bind(this)}	class="btn btn-danger pull-right btn-xs" style={btnDeleteStyle}> <i class="glyphicon glyphicon-remove"></i> delete</button>				
				<span class="badge" style={completedStyle}>{completeText}</span>				
				{text}
			 </li>			
		);
	}
}
