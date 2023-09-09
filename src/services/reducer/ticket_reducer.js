import store from "../store/ticket_store"

export const Ticket_reducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'getSeat':
            console.log(action.payload);
            break;
        case 'getSeatError':
            console.log(action.payload);
            break;
        case 'checkoutSuccess':
            console.log(action.payload);
            break;
        case 'checkoutError':
            console.log(action.payload);
            break;
        default:
            return temp;
    }
    return temp;
}