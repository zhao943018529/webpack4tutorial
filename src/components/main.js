import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Bundle from 'utilities/Bundle';


const Main=()=>(
		<main>
			<Switch>
				<Route exact path="/" component={props=>(<Bundle {...props} load={()=>import('./Home')}/>)} />
				<Route path="/todos" component={props=>(<Bundle {...props} load={()=>import('./TodoMVC')}/>)} />
				<Route path="/editor" component={props=>(<Bundle {...props} load={()=>import('./Editor')}/>)} />				
			</Switch>
		</main>
		);

export default Main;