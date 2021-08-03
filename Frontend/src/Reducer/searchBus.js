import {
    BUS_FOUND,
    BUSNOT_FOUND,
} from '../action/type';

const initialState = {
    buses: [],
    loading: true,
    error: {},
};

const searchBus = (state = initialState, action) =>{
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
            return state;
            break;
    }
}
export default searchBus;