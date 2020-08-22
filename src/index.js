import configureAppStore from './store/configureStore';
import * as actions from './store/project';

const store = configureAppStore();

store.subscribe(() => {
	console.log('Store changed',store.getState())
});

// store.dispatch(actions.bugAdded({description: 'Bug1'}));
// store.dispatch(actions.bugAdded({description: 'Bug2'}));
// store.dispatch(actions.bugAdded({description: 'Bug3'}));
// store.dispatch(actions.bugResolved({id: 1}));

store.dispatch(actions.projectAdded({name: 'Project 1'}));

