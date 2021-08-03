import Tickets from "../action/Tickets";

const { CANNOT_CANCEL, CANCEL_TICKET, TICKET, NO_TICKET,
    BOOKING_FAIL,
    BOOKING_SUCCESS,
} = '../../action/type';

const initialState = {
    Tickets: [],
    loading: true
};

const Ticket = (state = initialState, action)=>{
    const { type, payload } = action;
    switch (type) {
        case TICKET:
        case BOOKING_SUCCESS:
            console.log(Tickets)
            return {
                ...state,
                Tickets: payload,
                loading: false
            };
        case CANCEL_TICKET:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case NO_TICKET :
        case CANNOT_CANCEL:
        case BOOKING_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default Ticket;