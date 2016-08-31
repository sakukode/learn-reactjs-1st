import React from 'react';
import ReactDOM from 'react-dom';

import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
	constructor() {
		super();	
		this.getTodos = this.getTodos.bind(this);
		this.state = {
			todos: TodoStore.getAll(),
		};
	}
	
	createTodo() {
		const text = ReactDOM.findDOMNode(this.refs.textTodo).value;
		
		if(text.trim() !== '') {
			TodoActions.createTodo(text);
			ReactDOM.findDOMNode(this.refs.textTodo).value = "";
		}
	}
	
	componentWillMount() {
		TodoStore.on("change", this.getTodos);
		
		console.log("count ", TodoStore.listenerCount("change"));
	}
	
	componentWillUnmount() {
		TodoStore.removeListener("change", this.getTodos);
	}
	
	deleteTodo(id){
		TodoActions.deleteTodo(id);
	}
	
	getTodos() {
		this.setState({
				todos: TodoStore.getAll(),
		});
	}

	render() {					
		const { todos } = this.state;
		
		const TodoComponents = todos.map((todo)=> {
			return <Todo deleteTodo={this.deleteTodo.bind(this)} key={todo.id} {...todo} />;
		});
		
		return (
			<div>				
				<h1>Todos List</h1>
				<div class="row">
					<div class="col-lg-12">
						<div class="form-horizontal">
							<div class="form-group">
								<div class="col-lg-10">
									<input 
										type="text" 
										ref="textTodo" 
										class="form-control"
										placeholder="Type a Todo" />
								</div>
								<div class="col-lg-2">
									<button class="btn btn-primary btn-block" onClick={this.createTodo.bind(this)}>Add</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<ul class="list-group">
						  {TodoComponents}
						</ul>	
					</div>
				</div>		
			</div>
		);
	}
}
