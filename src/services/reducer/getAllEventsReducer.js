const store = {
    events: [],
    loading: false,
    error: ''
}
export const GetAllEventsReducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetCategoris':
            temp.loading = true
            temp.error = ''
            temp.events = []
            break;
        case 'SuccessSearch':
            temp.loading = false
            temp.error = ''
            temp.events = action.data
            break
        case 'ErrorGetCategoris':
            temp.loading = false
            temp.error = ''
            temp.events = ''
            break
        default:
            return temp;
    }
    return temp;
}