import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import redcuer from './redcuer';

const store = createStore(redcuer,devToolsEnhancer({trace: true}));

export default store;