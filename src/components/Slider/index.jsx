import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css'
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GetGenerealEvents } from '../../services/action/action';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <div className='CaruselItem'>
        <div className='Desckription'>
            <p className='titleCarusel'>Lorem ipsum dolor sit amet</p>
            <div>
                <span>Lorem Ipsum  Place</span>
                <span>14.05.2022  19:00</span>
                <div className='ButtonWrapperCarusel' style={{ marginTop: 10 }}>
                    <Button onClick={() => window.location = '/hall'} title={'Buy Ticket'} />
                </div>
            </div>
        </div>
        <img src={require('../../assets/Rectangle 2.png')} height={400} width={'99%'} style={{ borderRadius: 6 }} onDragStart={handleDragStart} role="presentation" />
    </div>,
    <div className='CaruselItem'>
        <div className='Desckription'>
            <p className='titleCarusel'>Lorem ipsum dolor sit amet</p>
            <div>
                <span>Lorem Ipsum  Place</span>
                <span>14.05.2022  19:00</span>
                <div className='ButtonWrapperCarusel' style={{ marginTop: 10 }}>
                    <Button onClick={() => window.location = '/hall'} title={'Buy Ticket'} />
                </div>
            </div>
        </div>
        <img src={require('../../assets/Rectangle 2.png')} height={400} width={'99%'} style={{ borderRadius: 6 }} onDragStart={handleDragStart} role="presentation" />
    </div>
];

export const Carusel = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetGenerealEvents())
    }, [])
    const general = useSelector((st) => st.general)
    const [data, setData] = useState([])
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    useEffect(() => {
        let item = [...data]
        if (!item.length) {
            general?.events?.map((elm, i) => {
                const dateObject = new Date(elm.date);
                let dayOfWeek = dateObject.getDay();
                const year = dateObject.getFullYear();
                let month = dateObject.getMonth() + 1;
                let hour = dateObject.getHours();
                let minute = dateObject.getMinutes();
                if (dayOfWeek <= 9) {
                    dayOfWeek = `0${dayOfWeek}`
                }
                if (month <= 9) {
                    month = `0${month}`
                }
                if (hour < 9) {
                    hour = `0${hour}`
                }
                if (minute < 9) {
                    minute = `0${minute}`
                }
                item.push(<div key={i} className='CaruselItem'>
                    <div className='Desckription'>
                        <p className='titleCarusel'>{elm.title}</p>
                        <div>
                            <span>{truncateText(elm.description, 30)}</span>
                            <span>{`${dayOfWeek}.${month}.${year}`}  {`${hour}:${minute}`}</span>
                            <div className='ButtonWrapperCarusel' style={{ marginTop: 10 }}>
                                <Button onClick={() => window.location = '/hall'} title={'Buy Ticket'} />
                            </div>
                        </div>
                    </div>
                    <img src={require('../../assets/Rectangle 2.png')} height={400} width={'99%'} style={{ borderRadius: 6 }} onDragStart={handleDragStart} role="presentation" />
                </div>)
            })
        }
        setData(item)
    }, [general.events])
    return (
        <AliceCarousel
            disableButtonsControls={true}
            autoPlay={items.length > 1}
            mouseTracking
            items={data}
            infinite={true}
            autoPlayInterval={100000}
        />
    );
}