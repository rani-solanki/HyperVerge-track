import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const userRegister = () => {
    return (
        <div style={{
            width: "40%",
            background: "gray",
            padding: "2%",
            borderRadius: "3%"
        }}>
            <form>
                <center> Sign Up </center>
                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="User name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-left">
                    Already registered <Link to="#">sign in?</Link>
                </p>
            </form>
        </div>
    );
}

export default userRegister;