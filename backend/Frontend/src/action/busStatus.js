import axios from "axios";
import setAlert from './aleart';
import { STATUS_ERROR, FIND_BUSSTATUS } from "./type";

// Get the bus current bus status
export const getBusStatus = (busId) => async(dispatch) =>{
    try {
        const res = await axios.get(`http://localhost:1900/api/buses/status/${busId}`);
        if (res) {
            return dispatch({
                type: FIND_BUSSTATUS,
                payload: res.data,
            });
        }else {
            return dispatch({
                type: STATUS_ERROR,
                payload: res.data,
            });
        }
        
    } catch (err) {
        console.log(err)
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                dispatch(setAlert(error.msg, "danger"));
            });
        }
        dispatch({
            type: STATUS_ERROR,
        });
    }
};
