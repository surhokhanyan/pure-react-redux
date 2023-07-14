import React from 'react';
import {useSelector} from "react-redux";
import {getTodos} from "../../features/todos/todosSlice";
import ListItem from "../listItem/ListItem";

const TodoLists = () => {

    const todos = useSelector(getTodos)

    return (
        <ul>
            {
                todos.map(({id, title, isComplete})=>{
                    return (
                        <ListItem
                            key={id}
                            id={id}
                            title={title}
                            isComplete={isComplete}
                        />
                    )
                })
            }
        </ul>
    );
};

export default TodoLists;