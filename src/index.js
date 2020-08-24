import configureAppStore from './store/configureStore';
import {projectAdded} from './store/project';
import {bugAdded,bugResolved,bugAssignToUser,getUnresolvedBugs,getBugsByUser} from './store/bug';
import {userAdded} from './store/users';



const store = configureAppStore();

store.subscribe(() => {
	console.log('Store changed',store.getState())
});

store.dispatch((dispatch, getState) => {
	dispatch({type: "bugRecieved",bugs: [1,2,3]})
});


// store.dispatch(userAdded({id: 1,name: 'Salman'}));
// store.dispatch(userAdded({id: 1,name: 'Taj'}));


// store.dispatch(bugAdded({description: 'Bug1'}));
// store.dispatch(bugAdded({description: 'Bug2'}));
// store.dispatch(bugAdded({description: 'Bug3'}));
// store.dispatch(bugResolved({id: 1}));

// store.dispatch(bugAssignToUser({bugId: 1,userId: 1}));


// store.dispatch(projectAdded({name: 'Project 1'}));


// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);

