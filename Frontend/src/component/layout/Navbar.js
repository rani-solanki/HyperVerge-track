import React,{Fragment} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../action/auth'

const Navbar = ({isAuthenticated,loading}) => {
    const authLinks = (
        <ul>    <li><Link to="/">
            Search Buses </Link></li>
            <li><a onClick={logout} href="#!">
                <i className="fas fa-sign-out-alt">{'   '}Logout</i></a></li>
        </ul>
    )
    const guestLinks=(
        <ul>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/">logout</Link></li>
            <li><Link to="/tickets">My Booking</Link></li>
        </ul>
    )
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"> safePlus </Link>
            </h1>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

export default Navbar;
