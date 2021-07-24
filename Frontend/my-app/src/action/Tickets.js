import axios from 'axios';
import setAlert from './aleart';
import {
    BOOKING_FAIL,
    BOOKING_SUCCESS
} from './type';

export const bookSeats = id => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.put('http://localhost:1900/api/user/buses/60ec20988caf65a27d0d5711/tickets')
        dispatch({
            type: BOOKING_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'))

            });
        }

        dispatch({
            type: BOOKING_FAIL,
        })
    }
}
