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
                    <Link to ="register" className ="btn btn-primary">sing up</Link>
                    <Link to="login" className="btn btn-light">Login</Link>
                    <Link to="admin signup" className="btn btn-primary">Admin Signup</Link>
                        <Link to="login" className="btn btn-light"> Admin Login</Link>
                        
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Landing; 