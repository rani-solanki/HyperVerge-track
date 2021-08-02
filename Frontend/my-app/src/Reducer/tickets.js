const { CANNOT_CANCEL, CANCEL_TICKET, TICKET, NO_TICKET } = '../../action/type';
const initialState = {
    Tickets: {},
    loading: true
};

const Ticket = (state = initialState, action)=>{
    const { type, payload } = action;
    switch (type) {
        case TICKET:
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
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default Ticket;