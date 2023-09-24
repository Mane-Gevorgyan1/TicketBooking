import './style.css'
import { Date, Location, TicketIcon } from '../svg'

export const CategoryTicket = ({ image, title, date, location, price, genre, onClick }) => {
    return <div className='Categoryticket' onClick={() => onClick()}>
        <div>
            <img alt='' className='CategoryImg' src={require(`../../assets/${image}`)} />
        </div>
        <div className='CategoryText'>
            <div className='ticketTextWrapper'>
                <p className='ticketTitle'>{title}</p>
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