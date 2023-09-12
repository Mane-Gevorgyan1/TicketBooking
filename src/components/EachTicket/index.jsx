import './style.css'
import { Date, Location, TicketIcon } from '../svg'

export const EachTicket = ({ width, id, image, title, date, location, price }) => {
    return <div className='ticket'>
        <div>
            <img alt='' className='Ticketimg' src={require(`../../assets/${image}`)} />
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