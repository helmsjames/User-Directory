import {combineReducers, createStore} from 'redux';
import axios from 'axios';


function toDoReducer(state = [], action) {
    switch (action.type) {
        case 'GET_USERS':
            return [action.payload]
        default:
            return state;
    }
}

function requestUsers() {
    return new Promise((resolve, reject) => {
        axios.get("https://randomuser.me/api/?results=200&nat=us").then((response) => {
            resolve();
            store.dispatch({type: 'GET_USERS', payload: response.data})
        }).catch((err) => {
            console.log(err);
            reject(err);
        })
    })
}

const reducer = combineReducers({toDoReducer});
export const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()))
export {toDoReducer, requestUsers};