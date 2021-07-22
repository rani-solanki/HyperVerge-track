import axios from 'axios';
import setAlert from './aleart';
import setAuthToken from '../utils/isAuthantication';
import Aleart from '../component/layout/Aleart';
import { BUSNOT_FOUND, BUS_FOUND } from './type';

// Search bus
export const searchbus = ({ from,to, date}) => async dispatch=>{
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    const start = from.trim().split(',')
    const End = to.trim().split(',')

    from = { "city": start[0], "state": start[1] }
    to = { "city": End[0], "state": End[1] }

    const data = {
        "from": {
            "city": start[0],
            "state": start[1]
        },
        "to": {
            "city": End[0],
            "state": End[1]
        },
        date
    }
    const body = JSON.stringify(data)
    try {
        const res = await axios.post('http://localhost:1900/api/users/',body, config);
        console.log(res)
        dispatch({
            type: BUS_FOUND,
            payload: res.data
        });
        alert("Bus Found")
    } catch (err) {
        const errors = err.response.data.err;
        if (errors) {
            alert("Not Found")
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: BUSNOT_FOUND
        })
    }
}
