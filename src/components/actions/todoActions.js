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

export const deleteTodoAction = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const checkTodoAction = (todo) => {
    return {
        type: 'CHECK_TODO',
        todo
    }
}