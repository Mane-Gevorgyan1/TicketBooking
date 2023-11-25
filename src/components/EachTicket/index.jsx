import './style.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Date, Location, TicketIcon } from '../svg'

export const EachTicket = ({ id, date, price, data }) => {
    const navigation = useNavigate()
    const [languageData, setLanguageData] = useState({ title: '', location: '' })
    const { language } = useSelector((st) => st.StaticReducer)

    useEffect(() => {
        let item = { ...languageData }
        if (language === 'am') {
            item.title = data?.title
            item.location = data?.sessions[0]?.hallId?.location
        }
        else if (language === 'en') {
            item.title = data?.title_en
            item.location = data?.sessions[0]?.hallId?.location_en

        }
        else if (language === 'ru') {
            item.title = data?.title_ru
            item.location = data?.sessions[0]?.hallId?.location_ru
        }
        setLanguageData(item)
    }, [language, data])

    return (
        <div className='ticket' onClick={() => navigation(`/Single/${id}`)}>
            <div>
                <img alt='' className='Ticketimg' src={`${process.env.REACT_APP_IMAGE}/${data.image}`} />
            </div>
            <div className='ticketText'>
                <div className='ticketTextWrapper'>
                    <p className='ticketTitle'>{languageData?.title}</p>
                </div>

                <div className='ticketTextWrapper'>
                    <Date />
                    <p className='ticketTextp'>{date}</p>
                </div>
                <div className='ticketTextWrapper'>
                    <Location />
                    <p className='ticketTextp'>{languageData?.location}</p>
                </div>
                <div className='ticketTextWrapper'>
                    <TicketIcon />
                    <p className='ticketTextp'>{price}</p>
                </div>
            </div>
        </div>
    )
}