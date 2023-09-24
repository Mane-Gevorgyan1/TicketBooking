import './style.css'
import { MainAbout } from '../../components/MainAbout'
import { SearchEvent } from '../../components/SearchEvent'
import { Carusel } from '../../components/Slider'
import { CardSlider } from '../../components/CardSlider'
import { ALLEvents } from '../../components/AllEvents'
import { useSelector } from 'react-redux'

export const Main = () => {
    const topEvents = useSelector((st) => st.topEvents)
    return (
        <div className='mainPage'>
            <Carusel />
            <div className='EventTitle' style={{ flexDirection: 'column' }}>
                <h2 style={{ marginBottom: 50 }}>Top Events</h2>
                <CardSlider data={topEvents?.events} />
            </div>
            <ALLEvents />
            <SearchEvent />
            <MainAbout />
        </div>
    )
}