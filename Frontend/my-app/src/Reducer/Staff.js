import {
    ADD_STAFF,
    ADD_STAFF_FAIL
} from '../action/type'

const initialState = {
    details: {},
    loading: true
};

const Staff = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_STAFF:
            return {
                ...state,
                details: payload,
                loading: false
            };
        case ADD_STAFF_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
export default Staff