import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signoutAction } from '../actions/authActions'

const SignedInLinks = (props) => {

    return (
        <ul className="right">
            <li><NavLink to='/addtodo'>Add Todo</NavLink></li>
            <li><a href="/" onClick={props.signoutAuth}>Sign Out</a></li>
            <li><NavLink to='/' className="btn btn-floating orange accent-2 z-depth-0">
                RR
            </NavLink></li>
        </ul >
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signoutAuth: () => dispatch(signoutAction())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
