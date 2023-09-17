import { combineReducers } from 'redux'
import { Ticket_reducer } from './ticket_reducer'
import { Event_reducer } from './event_reducer'
import { StaticReducer } from './staticReducer'

export default combineReducers({
    Ticket_reducer,
    Event_reducer,
    StaticReducer,
})
