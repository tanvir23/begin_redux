import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

const rootReducers = combineReducers({
    libraries: LibraryReducer,
    selectedID: SelectionReducer
});
export default rootReducers;
