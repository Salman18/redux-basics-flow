import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
/**
 * A function that accepts an initial state, an object full of reducer
 * functions, and a "slice name", and automatically generates
 * action creators and action types that correspond to the
 * reducers and state.
 *
 * The `reducer` argument is passed to `createReducer()`.
 *
 */
let lastId = 0;

const slice = createSlice({
	name: "bugs",
	initialState: [],
	reducers: {
		bugAdded: (state,action) => {
			state.push({
				id: ++lastId,
				description: action.payload.description,
				resolved: false
			})
		},
		bugAssignToUser: (state,action) => {
			const {bugId,userId} = action.payload;
			const index = state.findIndex(bug => bug.id === bugId);
			state[index].userId = userId;

		},
		bugResolved: (state,action) => {
			const index = state.findIndex(bug => bug.id === action.payload.id);
			state[index].resolved = true;
		}
	}
})

//Selector
// export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved)

//Memoization
export const getUnresolvedBugs = createSelector(
	state => state.entities.bugs,
	state => state.entities.projects,
	(bugs,projects) => bugs.filter(bug => !bug.resolved)
)

//Currying
export const getBugsByUser = userId => createSelector(
	state => state.entities.bugs,
	bugs => bugs.filter(bug => bug.userId === userId)
)

export const {bugAdded,bugResolved,bugAssignToUser} = slice.actions;
export default slice.reducer;