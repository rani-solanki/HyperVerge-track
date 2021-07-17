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
            <li><Link to="/signup">Admin Register </Link></li>
            <li><Link to="/adminLogin">Login</Link></li>
        </ul>
    )

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/">Home</Link>
            </h1>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

export default Navbar;
// return (
//     <nav className="navbar bg-dark">
//         <h1>
//             <Link to="/"><i className="fas fa-code"></i> Home</Link >
//         </h1>
//         <li>
//             <Link to="/register">Register</Link>
//         </li>
//         <li>
//             <Link to="/login">Login</Link>
//         </li>
//         <li>
//             <a onClick={logout} href="#!">
//                 <i className="fas fa-sign-out-alt"></i>{' '}
//                 <span className='hide-sm'>Logout</span>
//             </a>
//         </li>
//     </nav>
// )