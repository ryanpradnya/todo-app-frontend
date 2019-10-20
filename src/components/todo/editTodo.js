import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodoAction } from '../actions/todoActions'

class editTodo extends Component {
    handleClick = () => {
        this.props.editTodo(this.props.todo.id);
        this.props.history.push('/');
    }
    render() {
        const todo = this.props.todo ? (
            <div className="post">
                <h4 className="center">{this.props.todo.title}</h4>
                <p>{this.props.todo.description}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Save Todo
                </button>
                </div>
            </div>
        ) : (
                <div className="center">Loading todo...</div>
            );
        return (
            <div className="container">
                {todo}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.todoId;
    return {
        todo: state.todoList.find(todo => todo.id.toString() === id.toString())
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editTodo: (id) => dispatch(editTodoAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(editTodo)
