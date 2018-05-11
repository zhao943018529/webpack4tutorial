import React  from 'react';



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

		};
  	}

  	createTodoList(){

  	}

  	createTodoItem(todo){
  		let isEdit = todo.id==this.state.editId;
  		return (
  				<li className={isEdit?"todo-item editing":"todo-item"}>
			        <div className="view">
			          <input type="checkbox" className="toggle" />
			          <label >aaaaaaaa</label>
			          <button className="destroy"></button>
			        </div>
			        <input type="text" className="edit" />
			      </li>
  			)
  	}

	render(){

		return (
			<div className="todo-content">
			    <ul className="todo-list">

			    </ul>
			  </div>
			);
	}
}