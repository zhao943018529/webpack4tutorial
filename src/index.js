import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import "./index.css";



class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			status:'All',
			tasks:[],
		};

		this.addTask = this._addTask.bind(this);
	}

	_addTask(value){
		let task={
			id:Date.now,
			state:'Active',
			value:value,
		};

		let tasks= this.state.tasks;
		tasks.push(task);
		this.setState({
			tasks:tasks,
		});
	}

	render(){
		return (<div className="todo-app">
				<Header addTask={this.addTask}/>

			</div>);
	}
}

render(<App />,document.getElementById('root'));