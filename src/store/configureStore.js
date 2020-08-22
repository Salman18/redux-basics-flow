import {configureStore} from '@reduxjs/toolkit'
import reducer from './bug';

export default function() {
	// const store = createStore(redcuer,devToolsEnhancer({trace: true}));
	// return store;
	return configureStore({
		reducer
	});
}