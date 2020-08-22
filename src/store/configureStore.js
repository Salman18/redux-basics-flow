import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import redcuer from './bug';

export default function configureStore() {
	const store = createStore(redcuer,devToolsEnhancer({trace: true}));
	return store;
}