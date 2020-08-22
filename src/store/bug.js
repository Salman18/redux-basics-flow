import {createAction,createReducer} from '@reduxjs/toolkit';

// const BUG_ADDED = 'bugAdded';
// const BUG_REMOVED = 'bugRemoved';
// const BUG_RESOLVED = 'bugResolved';


// Action Creators
export const bugAdded = createAction('bugUpdated')
// export const bugAdded = description => ({
// 	type: BUG_ADDED,
// 	payload: {
// 		description
// 	}
// })

export const bugRemoved = createAction('bugRemoved');
// export const bugRemoved = id => ({
// 	type: BUG_REMOVED,
// 	payload: {
// 		id
// 	}
// })

export const bugResolved = createAction('bugResolved')
// export const bugResolved = id => ({
// 	type: BUG_RESOLVED,
// 	payload: {
// 		id
// 	}
// })

// const bugUpdated = createAction('bugUpdated');

//Reducers

//Mutable Way because it has immer in it

let lastId = 0;
export default createReducer([],{
	//key: value
	//action: function(even => eventHandler)
	[bugAdded.type]: (state,action) => {
		state.push({
			id: ++lastId,
			description: action.payload.description,
			resolved: false
		})
	},
	[bugResolved.type]: (state,actions) => {
		const index = state.findIndex(bug => bug.id === actions.payload.id);
		state[index].resolved = true;
	}
})

//ImMutable Way because reducers are pure functions

// export default function redcuer(state = [],action) {
// 	switch(action.type) {
// 		case bugAdded.type:
// 			return [
// 				...state,
// 				{
// 					id: ++lastId,
// 					description: action.payload.description,
// 					resolved: false
// 				}
// 			];
// 		case bugRemoved.type:
// 			return state.filter(bug => bug.id != action.payload.id);
// 		case bugResolved.type:
// 			return state.map(bug => bug.id !== action.payload.id ? bug : {...bug,resolved: true})
// 		default:
// 			return state;
// 	}
// }