import React from 'react';



export default class Header extends React.Component{
	constructor(props){
		super(props);

		this.state={
			value:'',
		};

		this.handleSubmit=this._handleSubmit.bind(this);
		this.onValueChange = this._onValueChange.bind(this);
	}

	_handleSubmit(event){
		this.props.addTask(this.state.value);
		return false;
	}

	_onValueChange(event){
		this.setState({
			value:event.target.task.value,
		});
	}

	render(){

		return (<div className="todo-header">
    			 	<input type="checkbox" className="toggle-all" />
     					<form onSubmit={this.handleSubmit}>
       						<input className="new-todo" name="task" onChange={this.onValueChange} value={this.state.value} type="text" />
    					</form>
  				</div>);
	}
}