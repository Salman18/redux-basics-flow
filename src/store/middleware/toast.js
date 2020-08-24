const toast = store => next => action => {
	if(action.type === 'error')
		console.log('error',action.payload.message)
	else
		next(action)
}

export default toast;