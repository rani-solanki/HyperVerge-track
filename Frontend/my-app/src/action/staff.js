import { ADD_STAFF, ADD_STAFF_FAIL } from './type';
import axios from 'axios';
import setAlert from './aleart';

const Staff = ({ name, phone, address, agencyName, isDriver }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, phone, address, agencyName, isDriver});
    try {
        const res = await axios.post('/api/admins/admin/addStaff', body, config);
        console.log(res)
        dispatch({
            type: ADD_STAFF,
            payload: res.data
        });

        alert('Staff has been added', 'success');
    } catch (err) {
        alert('staff is already exists', 'success');
        dispatch({ type: ADD_STAFF_FAIL });
    }
};

export default Staff;