import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from '../actions/todoActions'

class addTodo extends Component {
    handleClick = () => {
        fetch('http://localhost:8088/api/todo/add', {
            method: 'POST',
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
                    throw new Error('Failed to add todo.');
                }

                return res.json();
            }).then(resData => {
                this.props.addTodo(resData.todo);
                this.props.history.push('/');

            })

            .catch(this.catchError);
    }


    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row">
                        <h4 className="pink-text">Add Todo</h4>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" onChange={this.handleChange} />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="description" type="text" className="validate" onChange={this.handleChange} />
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="center row">
                        <button className="btn waves-effect waves-light green lighten-1" onClick={this.handleClick}>ADD TODO
                        <i className="material-icons right ">save</i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jwt: state.jwt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodoAction(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addTodo)
