import createHistory from 'history/createBrowserHistory';

const ROUTERCHANGE="@#ROUTERCHANGE";

const initialState={
	location:null,
};

export function locationReducer(state = initialState, action) {
	return action.type === ROUTERCHANGE ? action.payload : state;
};

const createHistoryByStore = store => {
	const history = createHistory();
	store.unsubscribeHistory = history.listen(location => {
		store.dispatch({
			type:ROUTERCHANGE,
			payload:location,
		});
	});

	return history;
}

export default createHistoryByStore;


