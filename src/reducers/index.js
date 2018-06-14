import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
// import LibraryReducer from './dummy';


const rootReducers = combineReducers({
    libraries: LibraryReducer
});
export default rootReducers;
