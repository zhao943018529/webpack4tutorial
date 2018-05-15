


import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Bundle from 'utilities/Bundle';
import injectReducers from '../store/injectReducers';
import HomeReducer from '../reducers/HomeReducer';


export default function createRoutes(store){
	let routes =[{
		exact:true,
		path:"/",
		component:props=>(<Bundle {...props}  load={()=>{
				store.reset(injectReducers(store,{home:HomeReducer}));
				return import('./Home');
			}
		}/>),
	},{
		path:"/todos",
		component:props=>(<Bundle {...props} load={()=>{
				return import('./TodoMVC');
			}
		}/>),
	},{
		path:"/editor",
		component:props=>(<Bundle {...props} load={()=>{
			return import('./Editor');
		}
		}/>),
	}];

	return routes;
}