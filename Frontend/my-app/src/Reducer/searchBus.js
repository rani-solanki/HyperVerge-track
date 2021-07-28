import {
    BUS_FOUND,
    BUSNOT_FOUND,
} from '../action/type';

// console.log("lkdshfkjsg",payload)
const initialState = {
    buses: [],
    loading: true,
    error: {},
};

const searchBus = (state = initialState, action) =>{
    console.log("state from the bus reduser", state)
    const { type, payload } = action;

    switch (type) {
        case BUS_FOUND:
            console.log({buses: payload})
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