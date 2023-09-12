import store from "../store/event_store"

export const Event_reducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case '':
            console.log(action.payload)
            break;
        default:
            return temp;
    }
    return temp;
}