import { Button } from '../Button'
import { User } from '../svg'
import './style.css'
export const Header = () => {
    return <div className="header">
        <div>
            <p className='title'>Ticket.com</p>
        </div>
        <div className='textWrapper'>
            <p className='text'>Star</p>
            <p className='text'>Tickats</p>
            <p className='text'>Help</p>
            <p className='text'>Contact</p>
        </div>
        <div className='buttonWrapper'>
            <Button title={'Buy Ticket'} />
            <div style={{ marginLeft: 20 }}>
                <User />
            </div>
        </div>
    </div>
}