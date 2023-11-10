import axios from "axios"
import { StartGetCategoris, StartGetCategory, StartGetGeneralEvents, StartGetGetTopEvents, StartGetRadnomEvents, StartGetSinglPage, StartSearch, StartSubCategory } from "./StartAction"
import { ErrorGetCategoris, ErrorGetCategory, ErrorGetGeneralEvents, ErrorGetRandomEvetns, ErrorGetSubCategory, ErrorGetTopEvents, ErrorSearch, ErrorSinglPage } from "./ErrorAction"
import { SuccessGetAllAds, SuccessGetCategoris, SuccessGetCategory, SuccessGetEventValidity, SuccessGetGeneralEvents, SuccessGetHall, SuccessGetRandomEvents, SuccessGetSubCategory, SuccessGetTopEvents, SuccessSearch, SuccessSinglPage, eventValidity } from "./SuccessAction"

const api = 'https://api.shinetickets.com'
// const api = 'http://localhost:8080'

// 'http://localhost:8080/'
export const OpenCategoryMenu = (data) => {
    return {
        type: 'OpenCategoryMenu',
        data
    }
}

export const GetTopEvents = () => {
    return (dispatch) => {
        dispatch(StartGetGetTopEvents())
        axios.get(`${process.env.REACT_APP_HOSTNAME}/getTopEvents`).then((r) => {
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
        axios.get(`${process.env.REACT_APP_HOSTNAME}/getGeneralEvents`).then((r) => {
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
        axios.get(`${process.env.REACT_APP_HOSTNAME}/singleEvent/${id}`).then((r) => {
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
        axios.post(`${process.env.REACT_APP_HOSTNAME}/search`, { search: search }).then((r) => {
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

export const EventValidity = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_HOSTNAME}/eventValidity`)
            .then((r) => {
                dispatch(eventValidity(r.data.valid))
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const GetAllEvents = (page, data) => {
    return (dispatch) => {
        dispatch(StartGetCategoris())
        axios.post(`${process.env.REACT_APP_HOSTNAME}/filterEvents?currentPage=${page}`, data).then((r) => {
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
        axios.get(`${process.env.REACT_APP_HOSTNAME}/randomEvents`).then((r) => {
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
        axios.get(`${process.env.REACT_APP_HOSTNAME}/getCategories`).then((r) => {
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
        axios.post(`${process.env.REACT_APP_HOSTNAME}/getSubcategories`, data).then((r) => {
            dispatch(SuccessGetSubCategory(r.data.category))
        })
            .catch((error) => {
                dispatch(ErrorGetSubCategory())
            })
    }
}

export const GetHall = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_HOSTNAME}/getAllHalls`).then((r) => {
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


export const GetAllAds = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_HOSTNAME}/getAllAds`).then((r) => {
            dispatch(SuccessGetAllAds(r.data))
        })
    }
}