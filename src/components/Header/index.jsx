import './style.css'
import { User } from '../svg'
import { Button } from '../Button'

export const Header = () => {
    return (
        <div className='headerContainer'>
            <div className="header">
                <p className='title'>Ticket.com</p>
                <div className='textWrapper'>
                    <p className='text'>Stars</p>
                    <p className='text'>Tickets</p>
                    <p className='text'>Help</p>
                    <p className='text'>Contact Us</p>
                </div>
                <div className='buttonWrapper'>
                    <Button title={'Buy Tickets'} />
                    <div className='user'>
                        <User />
                    </div>
                </div>
            </div>
        </div>
    )
}