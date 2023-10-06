import './style.css'
import { useNavigate } from 'react-router-dom';
import { Date, Location, TicketIcon } from '../svg'

export const EachTicket = ({ id, image, title, date, location, price }) => {
    const navigation = useNavigate()
    return <div className='ticket' onClick={() => navigation(`/Single/${id}`)}>
        <div>
            <img alt='' className='Ticketimg' src={` http://localhost:8080/images/${image}`} />
        </div>
        <div className='ticketText'>
            <div className='ticketTextWrapper'>
                <p className='ticketTitle'>{title}</p>
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