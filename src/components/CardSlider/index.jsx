import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css'
import { EachTopEvent } from '../EachTopEvent';

const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 2
    },
    1024: {
        items: 3,
        itemsFit: 'contain'
    },
};

const items = [
    <div className='.topEvents'>
        <EachTopEvent
            id={1}
            image={'Rectangle 20.png'}
            title={"Madonna"}
            location={"Yerevan"}
            date={"31 September 2023"}
            price={"10.000 - 30.000 AMD"}
        />
    </div>,
    <EachTopEvent
        id={1}
        image={'Rectangle 20.png'}
        title={"Madonna"}
        location={"Yerevan"}
        date={"31 September 2023"}
        price={"10.000 - 30.000 AMD"}
    />,
    <EachTopEvent
        id={1}
        image={'Rectangle 20.png'}
        title={"Madonna"}
        location={"Yerevan"}
        date={"31 September 2023"}
        price={"10.000 - 30.000 AMD"}
    />,
    <EachTopEvent
        id={1}
        image={'Rectangle 20.png'}
        title={"Madonna"}
        location={"Yerevan"}
        date={"31 September 2023"}
        price={"10.000 - 30.000 AMD"}
    />,
];

export const CardSlider = () => {
    return (
        <AliceCarousel
            // autoPlay={items.length > 1}
            mouseTracking
            items={items}
            infinite={true}
            disableDotsControls={true}
            // autoPlayInterval={100000}
            responsive={responsive}
        />
    );
}