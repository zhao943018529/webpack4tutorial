import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router} from 'react-router-dom';
import Main from './components/main';
import Header from './Layout/Header';
import createStore from './store/createStore';
import createHistory from './common/history';
import createRoutes from './components/createRoutes';

const store = createStore();
const history = createHistory(store);
const routes = createRoutes(store);

const App =()=>(
	<div>
		<Header/>
		<Main routes={routes}/>
	</div>
	);

render(<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
		</Provider>,
	document.getElementById('root'));


