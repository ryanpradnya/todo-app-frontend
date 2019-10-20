import React, { Component } from 'react'

class signup extends Component {
    handleClick = () => {
        fetch('http://localhost:8088/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                name: this.state.name,
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
                        <h4 className="center pink-text">SIGNUP</h4>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate" onChange={this.handleChange} />
                            <label htmlFor="name">Name</label>
                        </div>
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
                        <button className="btn waves-effect waves-light green lighten-1" onClick={this.handleClick}>Signup
                        <i className="material-icons right ">send</i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default signup
