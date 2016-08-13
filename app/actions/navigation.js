import * as types from './types'

export function toggleSearch(category, tags, limit, sessionId) {
	return (dispatch, getState) => {
		dispatch(Object.assign(
			{ type: types.TOGGLE_SEARCH }, 
			{ category, tags, limit, sessionId, }
		));
	}
}
