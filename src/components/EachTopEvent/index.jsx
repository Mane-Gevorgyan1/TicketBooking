import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import './style.css'

export const EachTopEvent = ({ id, image, title, location, date, price }) => {
    const navigation = useNavigate()
    return (
        <div className='eachTopEvent' onClick={() => navigation(`Single/${id}`)}>
            <div className='topEventImage'>
                <img alt='' src={require('../../assets/Rectangle 19.png')} />
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