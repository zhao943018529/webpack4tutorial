import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Bundle from 'utilities/Bundle';
import injectReducers from '../store/injectReducers';
import HomeReducer from '../reducers/HomeReducer';


const Main=({routes})=>(
		<main>
			<Switch>
				{routes.map((route,i)=>(<Route key={i} exact={!!route.exact} path={route.path} component={route.component} />))}				
			</Switch>
		</main>
		);

export default Main;