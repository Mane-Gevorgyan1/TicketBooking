import { useEffect } from "react"
import { EachTicket } from "../EachTicket"
import './styles.css'
import { useDispatch, useSelector } from "react-redux"
import { GetAllEvents } from "../../services/action/action"

export const ALLEvents = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllEvents())
    }, [])
    const events = useSelector((st) => st.getAllEventes)
    console.log(events.events)
    return <div>
        <div className='EventTitle'>
            <h2>All Events</h2>
        </div>
        <div className="Allevents">
            {events?.events?.map((elm, i) => {
                console.log(elm)
                const dateObject = new Date(elm.date);
                let dayOfWeek = dateObject.getDay();
                const year = dateObject.getFullYear();
                let month = dateObject.getMonth() + 1;
                if (dayOfWeek <= 9) {
                    dayOfWeek = `0${dayOfWeek}`
                }
                if (month <= 9) {
                    month = `0${month}`
                }
                return <EachTicket
                    image='Rectangle 19.png'
                    date={`${dayOfWeek} ${month} ${year}`}
                    location={elm.location}
                    price={`${elm.priceStart} - ${elm.priceEnd} AMD`}
                    title={elm.title}
                />
            })}
        </div>
    </div>

}