import {compose,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import {makeRootReducer} from './injectReducers';
import HomeReducer from '../reducers/HomeReducer';

const @RESET = "@RESET";

const resetReducer = (reducer, resetState) => (state, action) => {
	if (action.type === @RESET) {
		return preState;
	} else {
		return reducer(state, action);
	}
}

const resetEnhancer = createStore => (reducer, preloadedState) => {
	let store = createStore(reducer, preloadedState);
	let reset = (reducers, preState) => {
		preState = preState || store.getState();
		const newReducer = resetReducer(reducers, preState);
		store.replaceReducer(reducers);
		store.dispatch({
			type: @RESET
		});
	}

	return { 
		...store,
		reset,
	};
}

export default function createFinalStore() {
	let finalCreateStore = compose(applyMiddleware(thunk), resetEnhancer)(createStore);
	let store = finalCreateStore(makeRootReducer());
	store.asyncReducers = {};
	return store;
}





