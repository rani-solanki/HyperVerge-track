import axios from 'axios';
import setAlert from './aleart';
import {
    BOOKING_FAIL,
    BOOKING_SUCCESS,
    TICKETS,
    NO_TICKETS,
    CANCEL_TICKET,
    CANNOT_CANCEL
} from './type';

export const bookSeats = (busId, userData) => async dispatch => {
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
    catch (err) {
        const errors = err.response.data.errors;
        console.log(errors)
        if (errors){
            errors.forEach(error => dispatch(alert(error.msg, 'danger')));
        }
        dispatch({
            type: BOOKING_FAIL,
        })
        alert(err)
    }
}

export const getTickets = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.get('/api/auth/tickets/ticket', config);
        console.log(res.data)

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

export const cancelTicket = (
    ticketId) => async dispatch =>{
        console.log(ticketId)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = axios.delete(`/users/user/tickets/ticket/${ticketId}`, config);
            dispatch({
                type: CANCEL_TICKET,
                payload: res.data
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: CANNOT_CANCEL
            });
        }
    };
