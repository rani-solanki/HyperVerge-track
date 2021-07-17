import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {adminlogin} from '../../action/auth';
import PropTypes from 'prop-types';

const Login = ({
    adminlogin,
    isAuthenticated
}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log(formData)
        adminlogin(email, password);
    }
    return (
        <Fragment>
            <div style={{
                width: "40%",
                background: "white",
                padding: "2%",
                borderRadius: "3%"
            }}>
                <form onSubmit={e => onSubmit(e)}>
                    <center> Log In </center>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" name='email' value={email}
                            onChange={e => onChange(e)} />
                    </div>
                    <navbar />
                    <landing />
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name='password' value={password}
                            onChange={e => onChange(e)} />
                    </div>

                    <div className="form-group" >
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block ">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <Link to="#">password?</Link>
                    </p>
                    <p className='my-1'>
                        Don't have an account? <Link to='/signup'>Sign up</Link>
                    </p>

                </form>
            </div>
        </Fragment>
    );
    Login.propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
}
export default connect(null, { adminlogin })(Login);
