import './style.css'
import { Date, Location, TicketIcon } from '../svg'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const CategoryTicket = ({ image, title, date, location, price, genre, onClick, data }) => {
    const [languageData, setLanguageData] = useState({ title: '' })
    const { language } = useSelector((st) => st.StaticReducer)
    useEffect(() => {
        let item = { ...languageData }
        if (language === 'am') {
            item.title = data?.title
        }
        else if (language === 'en') {
            item.title = data?.title_en
        }
        else if (language === 'ru') {
            item.title = data?.title_ru
        }
        setLanguageData(item)
    }, [language])
    return <div className='Categoryticket' onClick={() => onClick()}>
        <div>
            <img alt='' className='CategoryImg' src={`${process.env.REACT_APP_IMAGE}/${image}`} />
        </div>
        <div className='CategoryText'>
            <div className='ticketTextWrapper'>
                <p className='ticketTitle'>{languageData.title}</p>
            </div>
            <div>
                <p className='ticketGenre'>{genre}</p>
            </div>
            <div className='ticketTextWrapper'>
                <Date />
                <p className='ticketTextp'>{date}</p>
            </div>
            <div className='ticketTextWrapper'>
                <Location />
                <p className='ticketTextp'>{location}</p>
            </div>
            <div className='ticketTextWrapper'>
                <TicketIcon />
                <p className='ticketTextp'>{price}</p>
            </div>
        </div>
    </div>
}