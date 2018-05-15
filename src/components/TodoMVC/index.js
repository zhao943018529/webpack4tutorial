import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import "./index.scss";



export default class TodoMVC extends React.Component{
	constructor(props){
		super(props);
		this.state={
			status:'All',
			todos:[],
		};

		this.addTodo = this._addTodo.bind(this);
		this.updateTodo = this._updateTodo.bind(this);
		this.deleteTodo = this._deleteTodo.bind(this);
		this.toggleTodo = this._toggleTodo.bind(this);
		this.toggleAll = this._toggleAll.bind(this);
		this.handleSwitch = this._handleSwitch.bind(this);
	}

	_toggleTodo(id){
		let todos = this.state.todos;
		let todo = todos.find(todo=>todo.id==id);
		todo.completed=!todo.completed;
		this.setState({
			todos:todos,
		});
	}

	_updateTodo(data){
		let todos = this.state.todos;
		let todo = todos.find(todo=>todo.id==data.id);
		todo.value= data.value;
		this.setState({
			todos:todos,
		});
	}

	_deleteTodo(id){
		let todos = this.state.todos;
		let index = todos.findIndex(todo=>todo.id==id);
		todos.splice(index,1);
		this.setState({
			todos:todos,
		});
	}

	_addTodo(value){
		let todo={
			id:Date.now(),
			completed:false,
			value:value,
		};

		let todos= this.state.todos;
		todos.push(todo);
		this.setState({
			todos:todos,
		});
	}

	_toggleAll(flag){
		let updateTodos = this.state.todos;

		updateTodos.forEach(todo=>{
			if(todo.completed!==flag){
				todo.completed=flag;
			}
		});

		this.setState({
			todos:updateTodos,
		});
	}

	clearCompleted(){
		let todos = this.state.todos;
		let newTodos = todos.filter(todo=>!todo.completed);
		this.setState({
			todos:newTodos,
		});
	}

	_handleSwitch(path){
		this.setState({
			status:path,
		});
	}

	render(){
		let isCompleted = this.state.status==='Completed';
		let cprops ={
			todos:this.state.status==='All'?this.state.todos:this.state.todos.filter(todo=>todo.completed===isCompleted),
			update:this.updateTodo,
			delete:this.deleteTodo,
			toggle:this.toggleTodo,
		};

		return (<div className="todo-app">
				<Header addTodo={this.addTodo} toggleAll={this.toggleAll} />
				<Content {...cprops} />
				<Footer status={this.state.status} handleSwitch={this.handleSwitch} clearCompleted={this.clearCompleted.bind(this)}/>
			</div>);
	}
}