const initState = {
    todoList: [],
    isLoggedIn: false,
    jwt: ''
}

const rootReducer = (state = initState, action) => {
    console.log('action rootReducer', action)
    if (action.type === 'EDIT_TODO') {
        const updateTodoList = [...state.todoList]
        const updateTodoIndex = updateTodoList.findIndex(todo => todo.id.toString() === action.todo.id.toString());
        updateTodoList[updateTodoIndex] = action.todo;

        return {
            ...state,
            todoList: updateTodoList
        }
    } else if (action.type === 'FETCH_TODO') {
        return {
            ...state,
            todoList: action.todoList
        }
    } else if (action.type === 'ADD_TODO') {
        const addTodoList = [...state.todoList, action.todo]
        return {
            ...state,
            todoList: addTodoList
        }
    } else if (action.type === 'DELETE_TODO') {
        return {
            ...state,
            todoList: action.todoList
        }
    } else if (action.type === 'SIGNIN') {
        return {
            ...state,
            jwt: action.jwt,
            isLoggedIn: true

        }
    } else if (action.type === 'SIGNOUT') {
        return {
            ...state,
            jwt: '',
            isLoggedIn: false,
            todoList: []

        }
    }
    return state
}

export default rootReducer;