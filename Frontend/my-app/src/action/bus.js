import { ADD_BUS, ADD_BUS_FAILED } from './type';
import axios from 'axios';
import setAlert from './aleart';

const addBus = ({
    busName,
    agency,
    vehicleNo,
    seats,
    busType,
    seatCategory,
    busStaff,
    policy,
    secdule,
    image,
    from,
    to,
    arrivalTime,
    departureTime
}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let day = 0; day < secdule.length; day++) {
        secdule[day] = days.indexOf(secdule[day]);
    }
    const start = from.trim().split(',')
    const End = to.trim().split(',')

    from = { "city": start[0], "state": start[1] }
    to = { "city": End[0], "state": End[1] }
    from = { "city": start[0], "state": start[1] }
    to = { "city": End[0], "state": End[1] }

    const body = JSON.stringify({
        busName,
        agency,
        vehicleNo,
        seats,
        busType,
        seatCategory,
        busStaff,
        policy,
        secdule,
        image,
        from,
        to,
        arrivalTime,
        departureTime
    });

    try {
        const res = await axios.post('/api/admins/admin/Addbus', body, config);
        dispatch({
            type: ADD_BUS,
            payload: res.data
        });
        alert('bus has added succefully', 'success');
    } catch (err) {
        console.log(err);
        alert('there was an error while adding the bus', 'danger');
        dispatch({
            type: ADD_BUS_FAILED
        });
    }
    };

export default addBus