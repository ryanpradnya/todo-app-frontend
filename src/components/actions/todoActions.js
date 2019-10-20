export const editTodoAction = (id) => {
    return {
        type: 'EDIT_TODO',
        id
    }
}

export const fetchTodoAction = (todoList) => {
    return {
        type: 'FETCH_TODO',
        todoList
    }
}