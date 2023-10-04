import { useEffect } from "react"
import { EachTicket } from "../EachTicket"
import './styles.css'
import { useDispatch, useSelector } from "react-redux"
import { GetRandomEvents } from "../../services/action/action"

export const ALLEvents = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetRandomEvents())
    }, [])
    const events = useSelector((st) => st.getRandomEvents)
    return <div>
        <div className='EventTitle'>
            <h2>All Events</h2>
        </div>
        <div className="Allevents">
            {events?.events.length > 0 && events?.events?.map((elm, i) => {
                console.log(elm.sessions[0].priceEnd
                )
                const dateObject = new Date(elm.sessions[0].date);
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
                    key={i}
                    id={elm._id}
                    image={elm.image}
                    date={`${dayOfWeek} ${month} ${year}`}
                    location={elm.location}
                    price={`${elm.sessions[0].priceStart} - ${elm.sessions[0].priceStart} AMD`}
                    title={elm.title}
                />
            })}
        </div>
    </div>

}