const store = {
    events: [],
    loading: false,
    error: ''
}
export const GetRadnomEventsReducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetRadnomEvents':
            temp.loading = true
            temp.error = ''
            temp.events = []
            break;
        case 'SuccessGetRandomEvents':
            temp.loading = false
            temp.error = ''
            temp.events = action.data
            break
        case 'ErrorGetRandomEvetns':
            temp.loading = false
            temp.error = ''
            temp.events = ''
            break
        default:
            return temp;
    }
    return temp;
}