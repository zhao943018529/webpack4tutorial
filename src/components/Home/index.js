import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
	home:state.home,
});

class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
				<div>{this.props.home.description}</div>
			);
	}
}

export default connect(mapStateToProps)(Home);