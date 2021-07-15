import axios from 'axios';
import setAlert from './aleart';

// Ragister user
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    const body = JSON.stringify({ name, email, password });
    try {
        const res = await axios.post('/api/users/signup', body, config);
        console.log("res")
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        console.log(err)
        const errors = err.response.data.err;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

// login user
export const login = (email, password) => async dispatch => {
    console.log("sart login")
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })
    console.log(body)
    try {
        const res = await axios.post('/api/auth/login', body);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    }
    catch (err) {
        const errors = err.response.data.error
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_ERROR
        })
    }
}
