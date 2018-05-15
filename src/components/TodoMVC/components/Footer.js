import React from 'react';



export default class Footer extends React.Component{
	constructor(props){
		super(props);
	}

	static getDerivedStateFromProps(nextProps,prevState){
		return {
			status:nextProps.status,
		};
	}

	handleClearCompleted(event){
		this.props.clearCompleted();
		event.stopPropagation();
	}

	handleRoute(path,event){
		this.props.handleSwitch(path);
		event.stopPropagation();
		event.preventDefault();
	}


	render(){

		return (
			<div className="todo-footer">
			    <button onClick={this.handleClearCompleted.bind(this)} className="clear-completed">Clear completed</button>
			    <ul className="links">
			      <li className="todo-link"><a onClick={this.handleRoute.bind(this,'All')} className={this.state.status==='All'?"selected":""} href="#">All</a></li>
			      <li className="todo-link"><a onClick={this.handleRoute.bind(this,'Active')} className={this.state.status==='Active'?"selected":""} href="#">Active</a></li>
			      <li className="todo-link"><a onClick={this.handleRoute.bind(this,'Completed')} className={this.state.status==='Completed'?"selected":""} href="#">Completed</a></li>
			    </ul>
			  </div>
			);
	}
}