import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './type';

const setAlert = (msg, alertType) => (dispatch) => {
    // genrate is from here using the uuid
    const id = uuid();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    })

    // should be remove after six mintes  from the screen
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 6000)
};

export default setAlert;
