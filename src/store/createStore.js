import {combineReducers, createStore} from 'redux';

function searchTerm(state = '', action) {
    switch (action.type) {
        case 'GET_SEARCH_TERM':
            return action.payload
        default:
            return state;
    }
}

const reducer = combineReducers({searchTerm});
export const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()))
export {searchTerm};