import './style.css'
import { useNavigate } from 'react-router-dom';
import { Date, Location, TicketIcon } from '../svg'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const EachTicket = ({ id, date, price, data }) => {
    const [languageData, setLanguageData] = useState({ title: '' })
    const { language } = useSelector((st) => st.StaticReducer)

    useEffect(() => {
        let item = { ...languageData }
        if (language === 'am') {
            item.title = data.title
        }
        else if (language === 'en') {
            item.title = data.title_en
        }
        else if (language === 'ru') {
            item.title = data.title_ru
        }
        setLanguageData(item)
    }, [language])

    const navigation = useNavigate()
    return <div className='ticket' onClick={() => navigation(`/Single/${id}`)}>
        <div>
            <img alt='' className='Ticketimg' src={`http://localhost:8080/images/${data.image}`} />
        </div>
        <div className='ticketText'>
            <div className='ticketTextWrapper'>
                <p className='ticketTitle'>{languageData.title}</p>
            </div>

            <div className='ticketTextWrapper'>
                <Date />
                <p className='ticketTextp'>{date}</p>
            </div>
            <div className='ticketTextWrapper'>
                <Location />
                <p className='ticketTextp'>{data.sessions[0]?.hallId.location}</p>
            </div>
            <div className='ticketTextWrapper'>
                <TicketIcon />
                <p className='ticketTextp'>{price}</p>
            </div>
        </div>
    </div>
}