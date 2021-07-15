import { SET_ALERT, REMOVE_ALERT } from '../action/type'
const initailState = []

const a = (state = initailState, action) => {
    const { type, payload } = action;
    // console.log(...state)
    switch (type) {
        case SET_ALERT:
            return [payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}

export default a;
