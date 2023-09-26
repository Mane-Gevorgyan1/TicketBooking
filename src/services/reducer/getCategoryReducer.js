const store = {
    category: [],
    loading: false,
    error: ''
}
export const GetCategoryReducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetCategory':
            temp.loading = true
            temp.error = ''
            temp.category = []
            break;
        case 'SuccessGetCategory':
            temp.loading = false
            temp.error = ''
            temp.category = action.data
            break
        case 'ErrorGetCategory':
            temp.loading = false
            temp.error = ''
            temp.category = []
            break
        default:
            return temp;
    }
    return temp;
}