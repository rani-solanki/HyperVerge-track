import {
    BUS_FOUND,
    BUSNOT_FOUND,
} from '../action/type';

const initialState = {
    buses: [],
    loading: true,
    error: {},
};

const searchBuses = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case BUS_FOUND:
            return {
                ...state,
                buses: payload,
                loading: false,
            };
        case BUSNOT_FOUND:
            return {
                ...state,
                buses: [],
                loading: false
            }
        default:
            console.log("state from the bus reduser",state)
            return state;
            break;
    }
}

export default searchBuses;