import './style.css'
import { useSelector } from 'react-redux'
import { EachTopEvent } from '../EachTopEvent'

export const TopEvents = () => {
    const events = useSelector(st => st.Event_reducer.topEvents)
    console.log(events)
    return (
        <div className='topEvents'>
            <div className='EventTitle'>
                <h2>Top Events</h2>
            </div>
            <div className='topEventsWrapper'>
                {events?.length > 0 && events?.map((e, i) => (
                    <EachTopEvent
                        key={i}
                        id={e?.id}
                        image={e?.image}
                        title={e?.title}
                        location={e?.location}
                        date={e?.date}
                        price={e?.price}
                    />
                ))}
            </div>
        </div>
    )
}