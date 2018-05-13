import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/main';
import Header from './Layout/Header';

const App =()=>(
	<div>
		<Header/>
		<Main />
	</div>
	);

render(<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'));


