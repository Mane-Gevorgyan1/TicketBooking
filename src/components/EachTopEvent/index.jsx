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
                <button onClick={() => window.location = '/hall'}>Buy Ticket</button>
            </div>
        </div>
    )
}