import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
	home:state.home,
});

const Home = (props)=>(
		<div>{props.home.description}</div>
);

export default connect(mapStateToProps)(Home);