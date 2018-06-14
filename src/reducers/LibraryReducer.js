import data from './LibraryList.json';

const initialState = {
    libraries: data
};

export default function LibraryReducer(state = initialState) {
    return state;
}
