import './style.css'
import { useSelector } from 'react-redux'
import { EachTicket } from '../EachTicket'
import { SearchInput } from '../SearchInput'

export const AllEvents = () => {
    const events = useSelector(st => st.Event_reducer.events)

    return (
        <div>
            <div className='imgWrapper'>
                <img className='img' src={require('../../assets/Rectangle 2.png')} alt='' />
                <div className='imgtextWrapper'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  he industry's standard dummy text ever since the 1500s,</p>
                    <SearchInput placeholder={'Search your favorite event or singer'}/>
                </div>
            </div>
            <div className='ticketWrapper'>
                {events?.length > 0 && events?.map((e, i) => (
                    <EachTicket
                        key={i}
                        id={e?.id}
                        image={e?.image}
                        title={e?.title}
                        date={e?.date}
                        location={e?.location}
                        price={e?.price}
                    />
                ))}
            </div>
        </div>
    )
}