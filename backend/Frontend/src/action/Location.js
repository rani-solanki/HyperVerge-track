import { ADD_LOCATION, ADD_LOCATION_FAIL } from './type';
import axios from 'axios';
import setAlert from './aleart';

const addLocation = ({ city, state }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({ city, state });

    try {
        const res = await axios.post('/api/admins/admin/location', body, config);
        dispatch({
            type: ADD_LOCATION,
            payload: res.data
        });
        dispatch(alert('Location has been added', 'success'));
    } catch (err) {
        dispatch(setAlert('Location is already exists', 'danger'));
        console.log(err);
        dispatch({ type: ADD_LOCATION_FAIL });
    }
};
export default addLocation;