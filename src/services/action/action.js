import axios from "axios"
import { StartCreatTicket, StartGetCategoris, StartGetCategory, StartGetGeneralEvents, StartGetGetTopEvents, StartGetRadnomEvents, StartGetSinglPage, StartGetTelStatus, StartSearch, StartSubCategory } from "./StartAction"
import { ErrorCreatTicket, ErrorGetCategoris, ErrorGetCategory, ErrorGetGeneralEvents, ErrorGetRandomEvetns, ErrorGetSubCategory, ErrorGetTelStatus, ErrorGetTopEvents, ErrorSearch, ErrorSinglPage } from "./ErrorAction"
import { SuccessCreatTicket, SuccessGetAllAds, SuccessGetCategoris, SuccessGetCategory, SuccessGetEventValidity, SuccessGetFeedback, SuccessGetGeneralEvents, SuccessGetHall, SuccessGetRandomEvents, SuccessGetSubCategory, SuccessGetTellStatus, SuccessGetTopEvents, SuccessSearch, SuccessSinglPage, eventValidity } from "./SuccessAction"

export const OpenCategoryMenu = (data) => {
    return {
        type: 'OpenCategoryMenu',
        data
    }
}

export const OpenCaldendar = (data) => {
    return {
        type: "OpenCaldendar",
        data
    }
}

export const GetFeedback = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_HOSTNAME}/getFeedback`).then((r) => {
            if (r.data.success) {
                dispatch(SuccessGetFeedback(r.data.feedback))
            }
        })
            .catch((error) => {
            })
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
                dispatch(eventValidity(r.data?.valid))
            })
            .catch((error) => {
            })
    }
}

export const GetAllEvents = (page, data) => {
    return (dispatch) => {
        dispatch(StartGetCategoris())
        axios.post(`${process.env.REACT_APP_HOSTNAME}/filterEvents?currentPage=${page}`, data).then((r) => {
            if (r.data.success) {
                console.log(r, 'data')
                dispatch(SuccessGetCategoris(r.data))
            }
            else {
                dispatch(ErrorGetCategoris())
            }
        })
            .catch((error) => {
                console.log(error, 'error')
                dispatch(ErrorGetCategoris())
            })
    }
}

export const GetRandomEvents = (page) => {
    return (dispatch) => {
        dispatch(StartGetRadnomEvents())
        axios.get(`${process.env.REACT_APP_HOSTNAME}/randomEvents?currentPage=${page}`).then((r) => {
            if (r.data.success) {
                dispatch(SuccessGetRandomEvents(r.data.allEvents, r.data.totalPages))
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

export const CreateCurrentTicket = (data) => {

    return (dispatch) => {
        dispatch(StartCreatTicket())
        axios.post(`${process.env.REACT_APP_HOSTNAME}/createCurrentTicket`, data).then((r) => {
            if (r.data.success) {
                dispatch(SuccessCreatTicket(r))
            }
            else {
                dispatch(ErrorCreatTicket())
            }
        })
            .catch((error) => {
                dispatch(ErrorCreatTicket())
            })
    }
}

export const GetCurrentTicket = () => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_HOSTNAME}/getCurrentTicket`, { orderId: localStorage.getItem('orderId') })
            .then(res => {
                if (res.data.success) {
                    dispatch(ButTickets(res.data.ticket))
                }
            })
            .catch((error) => {
            })
    }
}

export const StatusSuccessAction = () => {
    window.location.reload()
    return {
        type: "StatusSuccessAction",
    }
}

export const StatusErrorAction = () => {
    return {
        type: "StatusErrorAction",
    }
}

export const ClearStatusAction = () => {
    return {
        type: 'ClearStatusAction'
    }
}

export const AddDate = (data) => {
    return {
        type: 'AddDate',
        data
    }
}

export const ClearDataBuy = () => {
    return {
        type: 'ClearDataBuy'
    }
}

export const ButTickets = (data) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_HOSTNAME}/buyTicket`, data)
            .then(r => {
                if (r.data.success) {
                    localStorage.clear()
                    window.location = '/'
                }
            })
            .catch((error) => {
            })
    }
}

export const GetTicketStatus = (data) => {
    return (dispatch) => {
        dispatch(StartGetTelStatus())
        axios.post(`${process.env.REACT_APP_HOSTNAME}/getTicketStatus`, data).then((r) => {
            if (r.data.success) {
                dispatch(SuccessGetTellStatus(r.data))
            }
            else {
                dispatch(ErrorGetTelStatus())
            }
        })
            .catch((error) => {
                dispatch(ErrorGetTelStatus())
            })
    }
}