import React  from 'react';

	const ESCAPE_KEY = 27;
	const ENTER_KEY = 13;

export default class Content extends React.Component{
	constructor(props){
		super(props);
	}

	state ={
		todos:[],
		editId:null
	};

	static getDerivedStateFromProps(nextProps, prevState) {

		return {
			todos:nextProps.todos,
			editId:nextProps.editId,
		};
  	}

  	deleteTodo(id,event){
  		this.props.delete(id);
  		event.stopPropagation();
  	}

  	handleDbClick(id,event){
  		this.setState({
  			editId:id,
  		});
  		event.stopPropagation();
  	}

  	handleBlur(event){
  		this.setState({
  			editId:null,
  		});
  	}

  	toggleTodo(id,event){
  		this.props.toggle(id);
  		event.stopPropagation();
  	}

  	handleKeyDown(id,event){
  		if(event.which==ESCAPE_KEY){
  			this.setState({
  				editId:null,
  			});
  		}else if(event.which==ENTER_KEY){
  			this.props.update({
  				id:id,
  				value:event.target.value,
  			});
  		}
  	}

  	createTodoList(){
  		let items = this.state.todos.map(todo=>this.createTodoItem(todo));

  		return (<ul className="todo-list">
  				{items}
  			</ul>);
  	}

  	createTodoItem(todo){
  		let isEdit = todo.id==this.state.editId;
  		return (
  				<li key={todo.id} className={isEdit?"todo-item editing":"todo-item"} onDoubleClick={this.handleDbClick.bind(this,todo.id)}>
			        <div className="view">
			          <input type="checkbox" onChange= {this.toggleTodo.bind(this,todo.id)} className="toggle"  checked={todo.completed} />
			          <label >{todo.value}</label>
			          <button className="destroy" onClick={this.deleteTodo.bind(this,todo.id)}></button>
			        </div>
			        <input type="text" className="edit" defaultValue={todo.value} onKeyDown={this.handleKeyDown.bind(this,todo.id)} onBlur={this.handleBlur.bind(this)} />
			      </li>
  			)
  	}

	render(){

		return (
			<div className="todo-content">
				{this.createTodoList()}
			  </div>
			);
	}
}