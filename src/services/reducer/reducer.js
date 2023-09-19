import { combineReducers } from 'redux'
import { Ticket_reducer } from './ticket_reducer'
import { Event_reducer } from './event_reducer'
import { StaticReducer } from './staticReducer'
import { GetTopEventsReducer } from './getTopEventsReducer'
import { GetGeneralEventsReducer } from './getGeneralEventsReducer'
import { GetSinglPageReducer } from './getSinglPageReducer'
import { SearchReducer } from './searchReducer'
import { GetAllEventsReducer } from './getAllEventsReducer'

export default combineReducers({
    Ticket_reducer,
    Event_reducer,
    StaticReducer,
    topEvents: GetTopEventsReducer,
    general: GetGeneralEventsReducer,
    getSinglPage: GetSinglPageReducer,
    search: SearchReducer,
    getAllEventes: GetAllEventsReducer
})
