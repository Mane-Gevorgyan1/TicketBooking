import { useEffect } from "react"
import { EachTicket } from "../EachTicket"
import './styles.css'
import { useDispatch, useSelector } from "react-redux"
import { GetRandomEvents } from "../../services/action/action"
import { useTranslation } from "react-i18next"


export const ALLEvents = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetRandomEvents())
    }, [])
    const { t } = useTranslation();

    const events = useSelector((st) => st.getRandomEvents)
    return <div>
        <div className='EventTitle'>
            <h2>{t('AllEvents')}</h2>
        </div>
        <div className="Allevents">
            {events?.events.length > 0 && events?.events?.map((elm, i) => {
                const dateObject = new Date(elm?.sessions[0]?.date);
                let day = dateObject.getDate();
                let month = dateObject.getMonth() + 1;
                if (day <= 9) {
                    day = `0${day}`
                }
                if (month <= 9) {
                    month = `0${month}`
                }
                return <EachTicket
                    key={i}
                    id={elm._id}
                    data={elm}
                    date={`${day}-${month}-${dateObject.getFullYear()}`}
                    price={`${elm?.sessions[0]?.priceStart} - ${elm?.sessions[0]?.priceStart} AMD`}
                />
            })}
        </div>
    </div>

}