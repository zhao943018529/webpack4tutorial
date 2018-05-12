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

	render(){

		return (
			<div className="todo-footer">
			    <button onClick={this.handleClearCompleted.bind(this)} className="clear-completed">Clear completed</button>
			    <ul className="links">
			      <li className="todo-link"><a className={this.state.status==='All'?"selected":""} href="#All">All</a></li>
			      <li className="todo-link"><a href="#Active" className={this.state.status==='Active'?"selected":""}>Active</a></li>
			      <li className="todo-link"><a href="#Completed" className={this.state.status==='Completed'?"selected":""}>Completed</a></li>
			    </ul>
			  </div>
			);
	}
}