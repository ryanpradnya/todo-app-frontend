export const addTodoAction = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

export const editTodoAction = (todo) => {
    return {
        type: 'EDIT_TODO',
        todo
    }
}

export const fetchTodoAction = (todoList) => {
    return {
        type: 'FETCH_TODO',
        todoList
    }
}

export const deleteTodoAction = (todo) => {
    return {
        type: 'DELETE_TODO',
        todo
    }
}