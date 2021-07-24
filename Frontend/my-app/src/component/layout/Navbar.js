import React,{Fragment} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../action/auth'

const Navbar = ({isAuthenticated,loading}) => {
    const authLinks = (
        <ul>    <li><Link to="/">
            Search Buses </Link></li>

            <li><Link to="/profile"><i className="fas fa-user" >{'   '}
                Profile</i></Link></li>
            <li><a onClick={logout} href="#!">
                <i className="fas fa-sign-out-alt">{'   '}Logou</i></a></li>
        </ul>
    )
    const guestLinks = (
        <ul>
            <li><Link to="/about">About</Link> </li>
            {/* <li><Link to="/signup">Admin Register </Link></li> */}
            {/* <li><Link to="/adminLogin">Login</Link></li> */}
            <li><Link to="/searchBar">searchBar</Link></li>
            <li><Link to="/bookTickets">BookTickets</Link></li>
            <li><Link to="/">logout</Link></li>
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
