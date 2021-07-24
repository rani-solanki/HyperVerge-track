import axios from 'axios';
import setAlert from './aleart';
import setAuthToken from '../utils/isAuthantication';

import {
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT

} from '../action/type';

// // LOAD USER
export const loadUser = () => async dispatch => {
    // console.log(localStorage.token)
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('http://localhost:1900/api/auth/Auth');
        console.log(res)
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        console.log("louduser err",err)
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Ragister user
export const register = ({ name, email, password }) => async dispatch =>{
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    const body = JSON.stringify({ name, email, password });
    try {
        const res = await axios.post('http://localhost:1900/api/users/signup', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        alert('user Ragister SuccesFully', 'danger')
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.err;
        alert("user is Aleardy exit")
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

// Ragister user
export const adminregister = ({ name, email, password, isAdmin }) => async dispatch => {
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    const body = JSON.stringify({ name, email, password, isAdmin });
    try {
        const res = await axios.post('http://localhost:1900/api/admins/signup', body, config);
        console.log(res)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        alert("Admin Ragister succesfully")
    } catch (err) {
        const errors = err.response.data.err;
        alert("user is Aleardy exit")
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

// Login User//
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post('http://localhost:1900/api/auth/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        console.log("discpatch from action",dispatch)
        alert("User is Login Succesfully")
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            alert("Invalid credentials")
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Admin Login//
export const adminlogin = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        console.log(email,password)
        const res = await axios.post('http://localhost:1900/api/adminauth/login', body, config);
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        alert("Admin is Login Succesfully")
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            alert("Invalid credentials")
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}



