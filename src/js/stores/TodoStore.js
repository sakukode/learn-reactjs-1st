import { EventEmitter } from 'events';
import _ from 'underscore';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super()
		this.todos = [
			{
					id: 1,
					text: "Go Shopping",
					complete: false
				},
				{
					id: 2,
					text: "Play Football",
					complete: false
				},
		];
	}
	
	getAll() {
		return this.todos;
	}
	
	createTodo(text) {
		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete: false
		});
		
		this.emit("change");
	}
	
	deleteTodo(id) {
		let todos = this.todos;
		let newTodos = _.without(todos, _.findWhere(todos, {
		  id: id
		}));
		
		this.todos = newTodos;
		this.emit("change");
	}
	
	handleActions(action) {
		//console.log("TodoStore received an action", action);
		switch(action.type) {
			case 'CREATE_TODO': {
				this.createTodo(action.text);
				break;
			}
			case 'DELETE_TODO': {
				this.deleteTodo(action.id);
				break;
			}
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
