import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/addtodo'>Add Todo</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating orange accent-2 z-depth-0">
                RR
            </NavLink></li>
        </ul >
    )
}

export default SignedInLinks
