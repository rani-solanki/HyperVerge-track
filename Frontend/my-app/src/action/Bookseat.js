import axios from 'axios';
import setAlert from './aleart';
import {
    BOOKING_FAIL,
    BOOKING_SUCCESS
} from './type';

export const bookSeats = (busId, userData) => async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify(userData)
        console.log(body)
        const res = await axios.post(`/api/buses/${busId}/tickets`, body, config)
        console.log(res.data)
        
        dispatch({
            type: BOOKING_SUCCESS,
            payload: res.data
        })

        alert("Tickets booked succesfully", "success")
    }
    catch(err){
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => {
                dispatch(alert(error.msg, 'danger'))
            });
        }
        dispatch(setAlert(err.response.data.msg, "danger"))
        dispatch({
            type: BOOKING_FAIL,
        })
    }
}
