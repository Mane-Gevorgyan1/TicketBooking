import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css'
import { Button } from '../Button';

const handleDragStart = (e) => e.preventDefault();


const items = [
    <div className='CaruselItem'>
        <div className='Desckription'>
            <p className='title'>Lorem ipsum dolor sit amet</p>
            <div>
                <span>Lorem Ipsum  Place</span>
                <span>14.05.2022  19:00</span>
                <div style={{ marginTop: 10 }}>
                    <Button onClick={() => window.location = '/hall'} title={'Buy Ticket'} />
                </div>
            </div>
        </div>
        <img src={require('../../assets/Rectangle 2.png')} height={400} width={'99%'} style={{ borderRadius: 6 }} onDragStart={handleDragStart} role="presentation" />
    </div>,
    <div className='CaruselItem'>
        <div className='Desckription'>
            <p className='title'>Lorem ipsum dolor sit amet</p>
            <div>
                <span>Lorem Ipsum  Place</span>
                <span>14.05.2022  19:00</span>
                <div style={{ marginTop: 10 }}>
                    <Button onClick={() => window.location = '/hall'} title={'Buy Ticket'} />
                </div>
            </div>
        </div>
        <img src={require('../../assets/Rectangle 2.png')} height={400} width={'99%'} style={{ borderRadius: 6 }} onDragStart={handleDragStart} role="presentation" />
    </div>
];

export const Carusel = () => {
    return (
        <AliceCarousel
            disableButtonsControls={true}
            autoPlay={items.length > 1}
            mouseTracking
            items={items}
            infinite={true}
            autoPlayInterval={100000}
        />
    );
}