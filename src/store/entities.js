import {combineReducers} from 'redux';
import bugReducer from './bug';
import projectReducer from './project';

export default combineReducers({
	bugs: bugReducer,
	projects: projectReducer
})