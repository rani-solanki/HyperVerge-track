import axios from 'axios';
import setAlert from './aleart';
import setAuthToken from '../utils/isAuthantication';
import {
    USER_LOADED,
    AUTH_ERROR,
    SET_ALERT,
    REMOVE_ALERT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_ERROR

} from '../action/type';

// // LOAD USER
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('http://localhost:1900/api/auth/isAuth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Ragister user
export const register = ({ name, email, password }) => async dispatch => {
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
        dispatch(loadUser());
    }catch(err){
        const errors = err.response.data.err;
        if (errors) {
            alert("user is Aleardy exit")
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}
// login user
export const login = (email, password) => async dispatch=>{
    console.log("sart login")
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })
    console.log(body)
    try {
        const res = await axios.post('http://localhost:1900/api/auth/login', body);
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(); 
    }
    catch (err) {
        const errors = err.response.data.error
        if (errors) {
            errors.forEach(error => dispatch(alert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_ERROR
        })
    }
}

