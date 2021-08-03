import axios from 'axios';
import setAlert from './aleart';
import {
    BOOKING_FAIL,
    BOOKING_SUCCESS,
    TICKETS,
    NO_TICKETS
} from './type';

export const bookSeats = (busId, userData) => async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify(userData)
        const res = await axios.post(`/api/buses/${busId}/tickets`, body, config)
        dispatch({
            type: BOOKING_SUCCESS,
            payload: res.data
        })
        
        alert("Tickets booked succesfully", "success")
    }
    catch(err){
        const errors = err.response.data.errors;
        if (errors) {
            alert("")
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

       dispatch(alert("This Seat Not Found"))
        dispatch({
            type: BOOKING_FAIL,
        })
    }
}

export const getTickets = () => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        console.log("action getstate")
        const res = await axios.get('/api/auth/tickets/ticket', config);
        console.log(res)
        dispatch({
            type: TICKETS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: NO_TICKETS
        });
    }
};
