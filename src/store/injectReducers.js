import {locationReducer} from '../common/history';
import {combineReducers} from 'redux';

export function makeRootReducer(asyncReducers) {
	return combineReducers({
		routing: locationReducer,
		...asyncReducers,
	});
}

export default function injectReducers(store, reducers) {
	for (let key in reducers) {
		store.asyncReducers[key] = reducers[key];
	}

	return makeRootReducer(store.asyncReducers);
}
