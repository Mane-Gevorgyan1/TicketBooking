import axios from "axios"
import { StartGetCategoris, StartGetCategory, StartGetGeneralEvents, StartGetGetTopEvents, StartGetRadnomEvents, StartGetSinglPage, StartSearch, StartSubCategory } from "./StartAction"
import { ErrorGetCategoris, ErrorGetCategory, ErrorGetGeneralEvents, ErrorGetRandomEvetns, ErrorGetSubCategory, ErrorGetTopEvents, ErrorSearch, ErrorSinglPage } from "./ErrorAction"
import { SuccessGetCategoris, SuccessGetCategory, SuccessGetGeneralEvents, SuccessGetHall, SuccessGetRandomEvents, SuccessGetSubCategory, SuccessGetTopEvents, SuccessSearch, SuccessSinglPage } from "./SuccessAction"

const api = 'http://localhost:8080'
export const OpenCategoryMenu = (data) => {
    return {
        type: 'OpenCategoryMenu',
        data
    }
}

export const GetTopEvents = () => {
    return (dispatch) => {
        dispatch(StartGetGetTopEvents())
        axios.get(`${api}/getTopEvents`).then((r) => {
            if (r.data.success) {
                dispatch(SuccessGetTopEvents(r.data.events))
            }
            else {
                dispatch(ErrorGetTopEvents())
            }
        })
            .catch((error) => {
                dispatch(ErrorGetTopEvents())
            })
    }
}

export const GetGenerealEvents = () => {
    return (dispatch) => {
        dispatch(StartGetGeneralEvents())
        axios.get(`${api}/getGeneralEvents`).then((r) => {
            if (r.data.success) {
                dispatch(SuccessGetGeneralEvents(r.data.events))
            }
            else {
                dispatch(ErrorGetGeneralEvents())
            }
        })
            .catch((error) => {
                dispatch(ErrorGetGeneralEvents())
            })
    }
}

export const GetSinglPage = (id) => {
    return (dispatch) => {
        dispatch(StartGetSinglPage())
        axios.get(`${api}/singleEvent/${id}`).then((r) => {
            if (r.data.success) {
                dispatch(SuccessSinglPage(r.data))
            } else {
                dispatch(ErrorSinglPage())
            }
        })
            .catch((error) => {
                dispatch(ErrorSinglPage())
            })
    }
}

export const SearchAction = (search) => {
    return (dispatch) => {
        dispatch(StartSearch())
        axios.post(`${api}/search`, { search: search }).then((r) => {
            if (r.data.success) {
                dispatch(SuccessSearch(r.data.events))
            }
            else {
                dispatch(ErrorSearch())
            }
        })
            .catch((error) => {
                dispatch(ErrorSearch())
            })
    }
}

export const GetAllEvents = (page, data) => {
    return (dispatch) => {
        dispatch(StartGetCategoris())
        axios.post(`${api}/filterEvents?currentPage=${page}`, data).then((r) => {
            if (r.data.success) {
                dispatch(SuccessGetCategoris(r.data))
            }
            else {
                dispatch(ErrorGetCategoris())
            }
        })
            .catch((error) => {
                dispatch(ErrorGetCategoris())
            })
    }
}

export const GetRandomEvents = () => {
    return (dispatch) => {
        dispatch(StartGetRadnomEvents())
        axios.get(`${api}/randomEvents`).then((r) => {
            if (r.data.success) {
                dispatch(SuccessGetRandomEvents(r.data.randomEvents))
            }
            else {
                dispatch(ErrorGetRandomEvetns())
            }
        })
            .catch((error) => {
                dispatch(ErrorGetRandomEvetns())
            })
    }
}

export const SetTicketsAction = (data) => {
    return {
        type: 'SetTicketsAction',
        data
    }
}

export const RemoveTicketsAction = (data) => {
    return {
        type: 'RemoveTicketsAction',
        data
    }
}

export const GetCategory = () => {
    return (dispatch) => {
        dispatch(StartGetCategory())
        axios.get(`${api}/getCategories`).then((r) => {
            if (r.data.success) {
                dispatch(SuccessGetCategory(r.data.categories))
            }
            else {
                dispatch(ErrorGetCategory())
            }
        })
            .catch((error) => {
                dispatch(ErrorGetCategory())
            })
    }
}

export const SubCategory = (data) => {
    return (dispatch) => {
        dispatch(StartSubCategory())
        axios.post(`${api}/getSubcategories`, data).then((r) => {
            dispatch(SuccessGetSubCategory(r.data.category))
        })
            .catch((error) => {
                dispatch(ErrorGetSubCategory())
            })
    }
}

export const GetHall = () => {
    return (dispatch) => {
        axios.get(`${api}/getAllHalls`).then((r) => {
            dispatch(SuccessGetHall(r.data.halls))
        })
    }
}

export const RemoveAllTickets = () => {
    return {
        type: 'RemoveAllTickets'
    }
}

export const ChangeLanguageAction = (data) => {
    localStorage.setItem('lang', data)
    return {
        type: 'ChangeLanguageAction',
        data
    }
}