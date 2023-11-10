import { combineReducers } from 'redux'
import { Ticket_reducer } from './ticket_reducer'
import { Event_reducer } from './event_reducer'
import { StaticReducer } from './staticReducer'
import { GetTopEventsReducer } from './getTopEventsReducer'
import { GetGeneralEventsReducer } from './getGeneralEventsReducer'
import { GetSinglPageReducer } from './getSinglPageReducer'
import { SearchReducer } from './searchReducer'
import { GetAllEventsReducer } from './getAllEventsReducer'
import { TicketsForBuyReducer } from './TicketsForBuyReducer'
import { GetCategoryReducer } from './getCategoryReducer'
import { GetSubCategoryReducer } from './getSubCategoryReducer'
import { GetRadnomEventsReducer } from './getRadnomEventsReducer'
import { GetAdsReducer } from './getAllAdsReducer'

export default combineReducers({
    Ticket_reducer,
    Event_reducer,
    StaticReducer,
    topEvents: GetTopEventsReducer,
    general: GetGeneralEventsReducer,
    getSinglPage: GetSinglPageReducer,
    search: SearchReducer,
    getAllEventes: GetAllEventsReducer,
    tiketsForBuy: TicketsForBuyReducer,
    getCategory: GetCategoryReducer,
    getSubCAtegory: GetSubCategoryReducer,
    getRandomEvents: GetRadnomEventsReducer,
    getAds: GetAdsReducer
})