import {CANCEL_TICKET,CANNOT_CANCEL } from './type';
import axios from 'axios';
import setAlert from './aleart';

const cancelTicket=(
    ticketId) => async dispatch => {
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

export default { cancelTicket}; 