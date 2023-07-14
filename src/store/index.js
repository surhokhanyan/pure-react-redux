import {applyMiddleware, combineReducers, createStore} from "redux";
import {currentUserReducer, initialCurrentUser} from "../features/currentUser/currentUserSlice";
import {todosReducer, initialTodos} from "../features/todos/todosSlice";
import thunk from "redux-thunk";


const store = createStore(combineReducers({
    todos: todosReducer,
    currentUser: currentUserReducer
}), {
    todos: initialTodos,
    currentUser: initialCurrentUser
}, applyMiddleware(thunk))


export default store;