import { FetchGet, FetchPost } from "./fetchHelper"

export const GetSeat = ({ row, seat }) => { return FetchGet(`/getSeats?row=${row}&seat=${seat}`, 'getSeat') }
