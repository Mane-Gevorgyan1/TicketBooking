import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css'
import { EachTopEvent } from '../EachTopEvent';
import Carousel from 'react-elastic-carousel'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetTopEvents } from '../../services/action/action';

export const CardSlider = ({ data }) => {
    const [count, setCount] = useState(3)
    const [windowSize, setWindowSize] = useState(getWindowSize())
    const dispatch = useDispatch()
    function getWindowSize() {
        const { innerWidth, innerHeight } = window
        return { innerWidth, innerHeight }
    }
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }

    }, [])
    useEffect(() => {
        if (windowSize.innerWidth <= 375) {
            setCount(1)
        }
        if (windowSize.innerWidth >= 425 && windowSize.innerWidth <= 1100) {
            setCount(2)
        }
        else if (windowSize.innerWidth > 1100) {
            setCount(3)
        }
    }, [windowSize])
    useEffect(() => {
        dispatch(GetTopEvents())
    }, [])
    return <Carousel itemsToShow={count}>
        {data.length > 0 && data?.map((elm, i) => {
            const dateObject = new Date(elm.date);
            let dayOfWeek = dateObject.getDay();
            const year = dateObject.getFullYear();
            let month = dateObject.getMonth() + 1;
            if (dayOfWeek <= 9) {
                dayOfWeek = `0${dayOfWeek}`
            }
            if (month <= 9) {
                month = `0${month}`
            }
            return <EachTopEvent
                id={elm._id}
                key={i}
                image={`http://localhost:8080/images/${elm.image}`}
                title={elm.title}
                location={elm.location}
                date={`${dayOfWeek} ${month} ${year}`}
                price={`${elm.priceStart} - ${elm.priceEnd}`}
            />
        })}
    </Carousel>

}