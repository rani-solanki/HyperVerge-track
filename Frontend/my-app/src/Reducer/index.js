import { combineReducers } from 'redux';
import alert from './aleart'
import auth from './auth';
import searchBus from './searchBus';
import busStatus from './busStatus'; 

export default combineReducers({
    alert,
    auth,
    searchBus,
    busStatus
});
