import { Button } from '../Button'
import './style.css'

export const EachTopEvent = ({ id, image, title, location, date, price }) => {
    return (
        <div className='eachTopEvent'>
            <div className='topEventImage'>
                <img alt='' src={require(`../../assets/${image}`)} />
            </div>
            <div className='topEventDetails'>
                <h3>{title}</h3>
                <span>{location}</span>
                <span>{date}</span>
                <span>{price}</span>
                <Button title={'Buy Ticket'} />
            </div>
        </div>
    )
}