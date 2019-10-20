const initState = {
    todoList: []
    // todoList: [{
    //     id: 1,
    //     title: "Play football 1",
    //     description: "Play football with my friend",
    //     checked: false,
    //     createdAt: "2019-10-18T03:29:20.000Z",
    //     updatedAt: "2019-10-18T03:29:20.000Z",
    //     userId: 1
    // },
    // {
    //     id: 2,
    //     title: "Play football 2",
    //     description: "Play football with my friend",
    //     checked: false,
    //     createdAt: "2019-10-18T03:29:20.000Z",
    //     updatedAt: "2019-10-18T03:29:20.000Z",
    //     userId: 1
    // },
    // {
    //     id: 3,
    //     title: "Play football 3",
    //     description: "Play football with my friend",
    //     checked: true,
    //     createdAt: "2019-10-18T03:29:20.000Z",
    //     updatedAt: "2019-10-18T03:29:20.000Z",
    //     userId: 1
    // }
    // ]
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
    }
    return state
}

export default rootReducer;