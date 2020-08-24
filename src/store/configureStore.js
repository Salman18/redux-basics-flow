import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from './reducer';
import logg from './middleware/logger';
import toast from './middleware/toast';

export default function() {
	return configureStore({
		reducer,
		middleware: [...getDefaultMiddleware(),logg,toast]
	});
}