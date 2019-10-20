import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTodoAction } from '../actions/todoActions'

// import SignedOutDashboard from './SignedOutDashboard'
// import SignedInDashboard from './SignedInDashboard'
// import HikingBackgournd from '../../img/hiking.jpg'

class Dashboard extends Component {
    componentDidMount = () => {
        fetch('http://localhost:8088/api/todo/list', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNTcxNTcyNjQ5LCJleHAiOjE1NzE2NTkwNDl9._pFJLy7qHJChWfm_tkopwoG-qOltQ5UUGsumIi6nz5A'
            }
        })
            .then(res => {
                console.log('res', res)
                if (res.status !== 200) {
                    throw new Error('Failed to fetch posts.');
                }

                return res.json();
            }).then(resData => {
                console.log('resData', resData)
                this.props.todoList = resData.todoList
                this.props.fetchTodo(resData.todoList);
            })

            .catch(this.catchError);
    }

    render() {
        console.log(this.props)
        let { todoList } = this.props
        let mytodo = todoList.length ? (
            todoList.map(todo => {
                return (
                    <div className="row" key={todo.id}>
                        <div className="col s12">
                            <div className="card">

                                <div className="card-content blue lighten-3 ">
                                    <span className="card-title">{todo.title}</span>
                                    <p>{todo.description}</p>

                                </div>
                                <div className="card-action blue lighten-5">
                                    <div className="col s1">
                                        <Link to={'/edit/' + todo.id} className="btn-floating waves-effect waves-dark green lighten-1">
                                            <i className="material-icons left">edit</i>
                                        </Link>
                                    </div>
                                    <div className="btn-floating waves-effect waves-light btn red lighten-1">
                                        <i className="material-icons left">delete</i>
                                    </div>
                                    <div className="btn-floating halfway waves-effect waves-light red">
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
                    <span className="text-orange">
                        <h1 className="center ">TODO'S LIST</h1>
                    </span>
                </div>
                {mytodo}

            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodo: (todoList) => dispatch(fetchTodoAction(todoList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
