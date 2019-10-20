import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTodoAction, deleteTodoAction, checkTodoAction } from '../actions/todoActions'


class Dashboard extends Component {
    componentDidMount = () => {
        fetch('http://localhost:8088/api/todo/list', {
            headers: {
                Authorization: 'Bearer ' + this.props.jwt
            }
        })
            .then(res => {
                console.log('res', res)
                if (res.status !== 200) {
                    throw new Error('Failed to fetch todo list.');
                }

                return res.json();
            }).then(resData => {
                this.props.fetchTodo(resData.TodoList);
            })

            .catch(this.catchError);
    }

    handleDeleteTodo = (e) => {
        const id = e.target.id
        console.log('e', e)
        console.log('id', id)
        fetch('http://localhost:8088/api/todo/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNTcxNTcyNjQ5LCJleHAiOjE1NzE2NTkwNDl9._pFJLy7qHJChWfm_tkopwoG-qOltQ5UUGsumIi6nz5A'
            }
        })
            .then(res => {
                console.log('res', res)
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed to delete todo.');
                }

                return res.json();
            }).then(resData => {
                this.props.deleteTodo(id);
                this.props.history.push('/');

            })

            .catch(this.catchError);
    }

    handleCheckUncheck = () => {
        const id = this.props.todo.id
        fetch('http://localhost:8088/api/check/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.props.jwt
            }
        })
            .then(res => {
                console.log('res', res)
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed to edit todo.');
                }

                return res.json();
            }).then(resData => {
                this.props.checkTodo(resData.todo);
                this.props.history.push('/');

            })

            .catch(this.catchError);
    }

    render() {
        console.log('this.props', this.props)
        const { todoList } = this.props
        const mytodo = todoList.length ? (
            todoList.map(todo => {
                // const checkButton = todo.checked ? (asdf) :(asdf);
                console.log('todo.checked', todo.checked)
                const checkSpan = todo.checked ? (
                    <span className="right new bedge green white-text"> CHECKED </span>
                ) : (
                        <span className="right new bedge red white-text"> UNCHECKED </span>
                    );
                return (
                    <div className="row" key={todo.id}>
                        <div className="col s12">
                            <div className="card">

                                <div className="card-content blue lighten-3 ">
                                    <span className="card-title">{todo.title}</span>
                                    <p>{todo.description}</p>
                                    {checkSpan}
                                </div>
                                <div className="card-action blue lighten-5">
                                    <div className="col s1">
                                        <Link to={'/edit/' + todo.id} className="btn-floating waves-effect waves-dark green lighten-1">
                                            <i className="material-icons left">edit</i>
                                        </Link>
                                    </div>
                                    <div id={todo.id} className="btn-floating waves-effect waves-light btn red lighten-1" onClick={this.handleDeleteTodo}>
                                        <i className="material-icons left">delete</i>
                                    </div>
                                    <div className="right btn-floating halfway waves-effect waves-light red">
                                        <i className="material-icons left">check</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No todo list to show</div>
            );

        return (
            <div className="dashboard container" >
                <div className="row">
                    <h1 className="center orange-text text-accent-2">TODO'S LIST</h1>
                </div>
                {mytodo}

            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
        jwt: state.jwt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodo: (todoList) => dispatch(fetchTodoAction(todoList)),
        deleteTodo: (id) => dispatch(deleteTodoAction(id)),
        checkTodo: (todo) => dispatch(checkTodoAction(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
