import ReactNative from 'react-native';
import { handleActions } from 'redux-actions'
import * as types from 'VeganFriendly/app/actions/types'
import createReducer from 'VeganFriendly/app/lib/createReducer'

const initialState = {
	searching: false,
	tags: [],
	category: null,
	sessionId: null,
	limit: 20,
}

export const search = createReducer(initialState, {
	[types.TOGGLE_SEARCH](state, action) {
		return Object.assign({}, state, 
		{
			searching: action.searching,
			tags: action.tags,
			category: action.category,
			limit: action.limit,
			sessionId: action.sessionId,
			searching: !state.searching,
		});
	}
});