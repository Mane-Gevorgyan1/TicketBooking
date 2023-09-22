import axios from "axios"
import { StartGetCategoris, StartGetGeneralEvents, StartGetGetTopEvents, StartGetSinglPage, StartSearch } from "./StartAction"
import { ErrorGetCategoris, ErrorGetGeneralEvents, ErrorGetTopEvents, ErrorSearch, ErrorSinglPage } from "./ErrorAction"
import { SuccessGetCategoris, SuccessGetGeneralEvents, SuccessGetTopEvents, SuccessSearch, SuccessSinglPage } from "./SuccessAction"

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
        axios.post(`${api}/getAllEvents?currentPage=${page}`, { data }).then((r) => {
            if (r.data.success) {
                dispatch(SuccessGetCategoris(r.data.events))
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