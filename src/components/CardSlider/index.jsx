import './styles.css'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { EachTopEvent } from '../EachTopEvent'
import 'react-alice-carousel/lib/alice-carousel.css'
import { GetTopEvents } from '../../services/action/action'

export const CardSlider = ({ data }) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(3)
    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        dispatch(GetTopEvents())
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    useEffect(() => {
        if (windowSize.innerWidth <= 632) {
            setCount(1)
        } if (windowSize.innerWidth >= 633 && windowSize.innerWidth <= 1200) {
            setCount(2)
        } else if (windowSize.innerWidth > 1200) {
            setCount(3)
        }
    }, [windowSize])

    function getWindowSize() {
        const { innerWidth, innerHeight } = window
        return { innerWidth, innerHeight }
    }

    return <Carousel itemsToShow={count}>
        {data?.length > 0 && data?.map((elm, i) => {
            console.log(elm.sessions.length, '2')
            const dateObject = new Date(elm.sessions[0]?.date);
            let day = dateObject.getDate();
            let month = dateObject.getMonth() + 1;
            if (day <= 9) {
                day = `0${day}`
            }
            if (month <= 9) {
                month = `0${month}`
            }
            if (elm.sessions.length) {
                return <EachTopEvent
                    id={elm?._id}
                    key={i}
                    image={`http://localhost:8080/images/${elm.image}`}
                    title={elm.title}
                    location={elm.location}
                    date={`${day}-${month}-${dateObject.getFullYear()}, ${elm.sessions[0]?.time}`}
                    data={elm}
                    price={`${elm.sessions[0]?.priceStart} - ${elm.sessions[0]?.priceEnd} AMD`}
                />
            }
        })}
    </Carousel>

}