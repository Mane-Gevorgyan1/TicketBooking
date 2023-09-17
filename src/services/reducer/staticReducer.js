import store from "../store/staticStore"

export const StaticReducer = (state = store, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'OpenCategoryMenu':
            temp.categoryMenu = action.data
            break;
        default:
            return temp;
    }
    return temp;
}