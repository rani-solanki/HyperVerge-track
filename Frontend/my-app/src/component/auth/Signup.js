import React, { Fragment, useState } from "react";
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import setAlert from '../../action/aleart';
import { register } from '../../action/auth';
import PropTypes from 'prop-types'
const Register = ({ setAlert, register }) =>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            alert('Passwords do not match', 'danger')
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };   
    return (
        <Fragment>
            <div style={{
                width: "40%",
                background: "white",
                padding: "2%",
                borderRadius: "3%"
            }}>
                <form onSubmit={e => onSubmit(e)}>
                    <center> Sign Up </center>
                    <div className="form-group">
                        <label>User name</label>
                        <input type="text" className="form-control" placeholder="User name" name='name' value={name}
                            onChange={e => onChange(e)}/>
                    </div>
                    
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
                    <div className="form-group">
                        <label>confirm password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name='password2' value={password2}
                            onChange={e => onChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-left">
                        Already registered <Link to="/login">sign in?</Link>
                    </p>
                </form>
            </div>
        </Fragment>
    );
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
}

export default connect(null, { setAlert, register })(Register);