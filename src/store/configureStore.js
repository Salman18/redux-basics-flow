import {configureStore} from '@reduxjs/toolkit'
// import reducer from './bug';
import reducer from './project';


export default function() {
	// const store = createStore(redcuer,devToolsEnhancer({trace: true}));
	// return store;
	return configureStore({
		reducer
	});
}