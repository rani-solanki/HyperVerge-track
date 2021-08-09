import React from 'react'
import { Link, Redirect } from 'react-router-dom';

export const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <p className ="lead">
                        Bus Ticket Booking Website
                    </p>
                    <div className="buttons">
                    <Link to ="register" className ="btn btn-primary">User</Link>
                        {/* <Link to="login" className="btn btn-primary">user</Link> */}
                    <Link to="signup" className="btn btn-primary">Admin</Link>
                        {/* <Link to="adminLogin" className="btn btn-primary"> Admin </Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Landing; 