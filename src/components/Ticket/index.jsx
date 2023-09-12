import { Date } from '../svg'
import './style.css'
export const Ticket = ({ width }) => {
    return <div className='ticket'>
        <div>
            <img className='Ticketimg' src={require('../../assets/Rectangle 19.png')}></img>
        </div>
        <div className='ticketText'>
            <div className='ticketTextWrapper'>
                <p className='ticketTitle'>Beatles</p>
            </div>
            <div className='ticketTextWrapper'>
                <Date />
                <p className='ticketTextp'>31 September 2023</p>
            </div>
            <div className='ticketTextWrapper'>
                <Date />
                <p className='ticketTextp'>31 September 2023</p>
            </div>
            <div className='ticketTextWrapper'>
                <Date />
                <p className='ticketTextp'>31 September 2023</p>
            </div>
        </div>
    </div>
}