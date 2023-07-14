import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodo} from "../../features/todos/todosSlice";

const ListItem = ({id, title, isComplete}) => {

    const dispatch = useDispatch()

    return (
        <li>
            <input type="checkbox" checked={isComplete} onChange={()=> dispatch(toggleTodo(id))}/>
            <span>{title}</span>
            <button onClick={()=> dispatch(deleteTodo(id))}>X</button>
        </li>
    );
};

export default ListItem;