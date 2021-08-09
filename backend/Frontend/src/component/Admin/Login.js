import React, { Fragment, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
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
        adminlogin(email, password);
    }
    if (isAuthenticated) {
        return <Redirect to="/dashboardAction"/>
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
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name='password' value={password}
                            onChange={e => onChange(e)} />
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
    )
}

Login.propTypes = {
    adminlogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { adminlogin })(Login);
