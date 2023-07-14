import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../features/todos/todosSlice";

const Input = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState("")

    function addNewTodo(){
        if (title.trim()){
            dispatch(addTodo(title))
        }
        setTitle("")
    }

    return (
        <div>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
            <button onClick={addNewTodo}>Add Todo</button>
        </div>
    );
};

export default Input;