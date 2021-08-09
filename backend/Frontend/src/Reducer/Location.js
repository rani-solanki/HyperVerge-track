import {
    ADD_LOCATION,
    ADD_LOCATION_FAIL
} from '../action/type'

const initialState = {
    details: {},
    loading: true
};

const Location = (state = initialState, action)=>{
    const { type, payload } = action;
    switch (type) {
        case ADD_LOCATION:
            return {
                ...state,
                details: payload,
                loading: false
            };
        case ADD_LOCATION_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default Location;