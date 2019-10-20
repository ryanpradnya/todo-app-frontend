import React, { Component } from 'react'

import { connect } from 'react-redux'
import { signinAction } from '../actions/authActions'

class signin extends Component {
    handleClick = () => {
        fetch('http://localhost:8088/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log('res', res)
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed to signup.');
                }

                return res.json();
            }).then(resData => {
                console.log('resData', resData)
                this.props.signinAuth(resData.accessToken);
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
                        <h4 className="center pink-text">SIGNIN</h4>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" onChange={this.handleChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" onChange={this.handleChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="center row">
                        <button className="btn waves-effect waves-light green lighten-1" onClick={this.handleClick}>Signin
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signinAuth: (jwt) => dispatch(signinAction(jwt))
    }
}

export default connect(null, mapDispatchToProps)(signin)
