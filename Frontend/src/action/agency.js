import {ADD_AGENCY,ADD_AGENCY_FAIL } from './type'; 
import axios from 'axios';
import setAlert from './aleart';

const Agency = ({ phone,agencyName,headOfficeLocation })=> async dispatch=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ phone, agencyName, headOfficeLocation });
    console.log(body)
    try {
        const res = await axios.post('/api/admins/admin/agency', body, config);
        dispatch({
            type: ADD_AGENCY,
            payload: res.data
        });

        alert('Agency has been added', 'success');        
    } catch (err) {
        alert('Agency is already exists');
        dispatch({ type: ADD_AGENCY_FAIL });
    }
};

export default Agency;