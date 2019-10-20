import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodoAction } from '../actions/todoActions'

class editTodo extends Component {
    handleClick = () => {
        const id = this.props.todo.id
        fetch('http://localhost:8088/api/todo/edit/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description
            }),
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
                this.props.editTodo(resData.todo);
                this.props.history.push('/');

            })

            .catch(this.catchError);
    }


    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    render() {
        const todo = this.props.todo ? (
            <div className="row">
                <div className="row">
                    <h4 className="pink-text">Edit Todo</h4>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="title" type="text" className="validate" defaultValue={this.props.todo.title} onChange={this.handleChange} />
                        <label className="active" htmlFor="title">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="description" type="text" className="validate" defaultValue={this.props.todo.description} onChange={this.handleChange} />
                        <label className="active" htmlFor="description">Description</label>
                    </div>
                </div>
                <div className="center row">
                    <button className="btn waves-effect waves-light green lighten-1" onClick={this.handleClick}>Save
                        <i className="material-icons right ">save</i>
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
        todo: state.todoList.find(todo => todo.id.toString() === id.toString()),
        jwt: state.jwt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editTodo: (todo) => dispatch(editTodoAction(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(editTodo)
