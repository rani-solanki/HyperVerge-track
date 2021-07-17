import React from 'react'
import { Link, Redirect } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar-bg-light">
            <h1>
                <a href='index.html'> </a>
            </h1>
            <ul>
                <li>
                    <Link to="/signup">Register</Link>
                </li>
                <li>
                    <Link to="/adminLogin">Login</Link>
                </li>
            </ul>
        </nav >
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