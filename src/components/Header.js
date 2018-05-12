import React from 'react';



export default class Header extends React.Component{
	constructor(props){
		super(props);

		this.state={
			value:'',
			isToggleAll:false,
		};

		this.handleSubmit=this._handleSubmit.bind(this);
		this.onValueChange = this._onValueChange.bind(this);
	}

	_handleSubmit(event){
		this.props.addTodo(this.state.value);
		this.setState({
			value:'',
		});
		event.preventDefault();
		return false;
	}

	toggleAll(flag){
		this.setState({isToggleAll:flag},()=>this.props.toggleAll(flag));
	}

	_onValueChange(event){
		this.setState({
			value:event.target.value,
		});
	}

	render(){

		return (<div className="todo-header">
    			 	<input type="checkbox" checked={this.state.toggleAll} onChange={this.toggleAll.bind(this,!this.state.isToggleAll)} className="toggle-all" />
     					<form onSubmit={this.handleSubmit}>
       						<input className="new-todo" name="todo" onChange={this.onValueChange} value={this.state.value} type="text" />
    					</form>
  				</div>);
	}
}