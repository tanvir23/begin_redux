import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';


const rootReducers = combineReducers({
    libraries: LibraryReducer
});
export default rootReducers;
