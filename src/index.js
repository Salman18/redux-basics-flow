import configureStore from './store/configureStore';
import * as actions from './store/bug';

const store = configureStore();

store.subscribe(() => {
	console.log('Store changed',store.getState())
});

store.dispatch(actions.bugAdded('Bug1'));
store.dispatch(actions.bugAdded('Bug2'));
store.dispatch(actions.bugAdded('Bug3'));
store.dispatch(actions.bugResolved(1));

