import axios from "axios"
import { StartGetGeneralEvents, StartGetGetTopEvents, StartGetSinglPage } from "./StartAction"
import { ErrorGetGeneralEvents, ErrorGetTopEvents, ErrorSinglPage } from "./ErrorAction"
import { SuccessGetGeneralEvents, SuccessGetTopEvents, SuccessSinglPage } from "./SuccessAction"

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
                console.log(r.data)
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