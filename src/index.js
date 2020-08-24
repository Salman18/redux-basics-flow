import configureAppStore from './store/configureStore';
import {projectAdded} from './store/project';
import {bugAdded,bugResolved,bugAssignToUser,getUnresolvedBugs,getBugsByUser} from './store/bug';
import {userAdded} from './store/users';



const store = configureAppStore();

store.subscribe(() => {
	console.log('Store changed',store.getState())
});

store.dispatch((dispatch,getState) => {
	dispatch({type: "bugRecieved",bugs: [1,2,3]})
});


store.dispatch({
	type: 'error',
	payload: {message: "An error occured"}
});
