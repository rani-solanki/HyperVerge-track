import { STATUS_ERROR, FIND_BUSSTATUS } from "../action/type";

const initialState = {
    status: {},
    loading: true,
    error: {},
};

const busStatus =  (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type) {
        case FIND_BUSSTATUS:
            return {
                ...state,
                status: payload,
                loading: false
            };
        case STATUS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
};

export default busStatus;