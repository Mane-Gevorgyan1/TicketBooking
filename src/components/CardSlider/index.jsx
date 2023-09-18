import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css'
import { EachTopEvent } from '../EachTopEvent';
import Carousel from 'react-elastic-carousel'
import { useEffect, useState } from 'react';





export const CardSlider = () => {
    const [count, setCount] = useState(3)
    const [windowSize, setWindowSize] = useState(getWindowSize())

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
        console.log(windowSize.innerWidth)
        if (windowSize.innerWidth < 425) {
            console.log('[]]]')
            setCount(1)
        }
        if (windowSize.innerWidth > 425 && windowSize.innerWidth < 1100) {
            setCount(2)
        }
        else {
            setCount(3)
        }
    }, [windowSize])
    console.log(count)
    return <Carousel itemsToShow={count}>

        <EachTopEvent
            id={1}
            image={'Rectangle 20.png'}
            title={"Madonna"}
            location={"Yerevan"}
            date={"31 September 2023"}
            price={"10.000 - 30.000 AMD"}
        />
        <EachTopEvent
            id={1}
            image={'Rectangle 20.png'}
            title={"Madonna"}
            location={"Yerevan"}
            date={"31 September 2023"}
            price={"10.000 - 30.000 AMD"}
        />
        <EachTopEvent
            id={1}
            image={'Rectangle 20.png'}
            title={"Madonna"}
            location={"Yerevan"}
            date={"31 September 2023"}
            price={"10.000 - 30.000 AMD"}
        />
        <EachTopEvent
            id={1}
            image={'Rectangle 20.png'}
            title={"Madonna"}
            location={"Yerevan"}
            date={"31 September 2023"}
            price={"10.000 - 30.000 AMD"}
        />
    </Carousel>

}