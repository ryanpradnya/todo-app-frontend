import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
    const links = props.isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper blue accent-2">
            <div className="container">
                <Link to='/' className="band-logo">Todo App</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Navbar);
