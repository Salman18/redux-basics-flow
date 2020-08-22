import {createSlice} from '@reduxjs/toolkit';

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
		bugResolved: (state,action) => {
			const index = state.findIndex(bug => bug.id === action.payload.id);
			state[index].resolved = true;
		}
	}
})

// console.log(slice)
export const {bugAdded,bugResolved} = slice.actions;
export default slice.reducer;

// Action Creators

/*
export const bugAdded = createAction('bugUpdated')
export const bugRemoved = createAction('bugRemoved');
export const bugResolved = createAction('bugResolved')
const bugUpdated = createAction('bugUpdated');
*/

//Reducers

/*
export default createReducer([],{
	[bugAdded.type]: (state,action) => {
		state.push({
			id: ++lastId,
			description: action.payload.description,
			resolved: false
		})
	},
	[bugResolved.type]: (state,action) => {
		const index = state.findIndex(bug => bug.id === action.payload.id);
		state[index].resolved = true;
	}
})
*/