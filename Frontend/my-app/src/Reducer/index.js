import { combineReducers } from 'redux';
import alert from './aleart'
import auth from './auth';

export default combineReducers({
    alert,
    auth
});