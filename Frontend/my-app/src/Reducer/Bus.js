import {
    ADD_BUS,
    ADD_BUS_FAILED
} from '../action/type'

const initialState = {
    buses: [],
    loading: true
};

const Buses = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_BUS:
            return {
                ...state,
                details: payload,
                loading: false
            };
        case ADD_BUS_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default Buses;