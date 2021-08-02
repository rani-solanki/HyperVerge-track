import {CANCEL_TICKET,CANNOT_CANCEL,TICKETS,NO_TICKETS } from './type';
import axios from 'axios';
import setAlert from './aleart';

const getTickets = () => async dispatch=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const res = await axios.get('/api/auth/tickets', config);
        console.log(res)
        dispatch({
            type: TICKETS,
            payload: res.data
        });
    }catch(err) {
        console.log(err);
        dispatch({
            type: NO_TICKETS
        });
    }
};

const cancelTicket=(
    ticketId) => async dispatch =>{
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

export default { cancelTicket,getTickets }; 