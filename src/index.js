import configureAppStore from './store/configureStore';
import {projectAdded} from './store/project';
import {bugAdded,bugResolved,getUnresolvedBugs} from './store/bug';


const store = configureAppStore();

store.subscribe(() => {
	console.log('Store changed',store.getState())
});

store.dispatch(bugAdded({description: 'Bug1'}));
store.dispatch(bugAdded({description: 'Bug2'}));
store.dispatch(bugAdded({description: 'Bug3'}));
store.dispatch(bugResolved({id: 1}));

store.dispatch(projectAdded({name: 'Project 1'}));

// const unresolved = store.getState().entities.bugs.filter(bug => !bug.resloved)
const unresolved = getUnresolvedBugs(store.getState());
console.log(unresolved)

