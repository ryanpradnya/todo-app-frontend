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

    if (action.type === 'EDIT_TODO') {
        const updateTodoList = [...state.todoList]
        const updateTodoIndex = updateTodoList.findIndex(todo => todo.id.toString() === action.id.toString());
        const currentTodo = updateTodoList[updateTodoIndex]
        const updateTodo = {
            id: currentTodo['id'],
            title: currentTodo['title'] + 'edit',
            checked: currentTodo['checked'],
            userId: 1
        }
        updateTodoList[updateTodoIndex] = updateTodo;

        return {
            ...state,
            todoList: updateTodoList
        }
    } else if (action.type === 'FETCH_TODO') {
        console.log('action.todoList', action.todoList)
        return {
            ...state,
            todoList: action.todoList
        }
    }
    return state
}

export default rootReducer;