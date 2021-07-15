import React, { Component } from "react";
import { Link } from 'react-router-dom';

const userLogin = () => {
    return (
        <div style={{
            width: "40%",
            background: "gray",
            padding: "2%",
            borderRadius: "3%"
        }}>
            <form>
                <center> Log In </center>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <navbar />
                <landing />
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group" >
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block ">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <Link to ="#">password?</Link>
                </p>
            </form>
        </div>
    );
}

export default userLogin;