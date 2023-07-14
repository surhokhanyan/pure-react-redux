const ACTIONS = {
    add: "add-todo",
    toggle: "toggle-todo",
    del: "delete-todo"
}

//reducer function ն է։
export function todosReducer(state = [], action){
    switch (action.type){
        case ACTIONS.add:
            return [
                ...state,
                {
                    id: Math.random(),
                    title: action.payload.title,
                    isComplete: false
                }
            ]
        case ACTIONS.del:
            return (
                state.filter(item => item.id !== action.payload.id)
            )
        case ACTIONS.toggle:
            state = state.map(item => {
                if (item.id !== action.payload.id){
                    return item
                }
                return {
                    ...item,
                    isComplete: !item.isComplete
                }
            })
            return state
    }
    return state
}
// initialState ն է
export const initialTodos = [
    {
        id: Math.random(),
        title: "Learn JS",
        isComplete: false
    },
    {
        id: Math.random(),
        title: "Learn React",
        isComplete: false
    },
    {
        id: Math.random(),
        title: "Learn Redux",
        isComplete: false
    }
]

// useSelector ին փոխանցվող ֆունկցիան է
export function getTodos(state){
    return state.todos
}

export function addTodo(title){
    return {
        type: ACTIONS.add,
        payload: {
            title
        }
    }
}

export function deleteTodo(id){
    return {
        type: ACTIONS.del,
        payload: {
            id
        }
    }
}

//action creator function է
export function toggleTodo(id){
    return {
        type: ACTIONS.toggle,
        payload: {
            id
        }
    }
}
