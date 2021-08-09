import React, { Fragment } from "react";
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../action/auth'

const Navbar = ({ auth: { isAuthenticated }, logout }) =>{
    const authLinks = (
        <ul>
            <li>
                <Link onClick={logout} to='/'>Logout</Link>
            </li>
        </ul>
    );
    const guestLinks = (
        <ul>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/">logout</Link></li>
            <li><Link to="/tickets">My Booking</Link></li>
        </ul>
    )
    return (
        <nav className="navbar bg-primary">
            <h1>
                <Link to="/">
                    SafePlus
                </Link>
            </h1>
            {<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar);