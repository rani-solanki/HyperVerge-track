import {
    ADD_AGENCY,
    ADD_AGENCY_FAIL
} from '../action/type'

const initialState = {
    details: {},
    loading: true
};

const tickets = (state = initialState, action)=>{
    const { type, payload } = action;
    switch (type) {
        case ADD_AGENCY:
            return {
                ...state,
                details: payload,
                loading: false
            };
        case ADD_AGENCY_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default tickets;