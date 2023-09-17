import './style.css'
import { TopEvents } from '../../components/TopEvents'
import { MainAbout } from '../../components/MainAbout'
import { SearchEvent } from '../../components/SearchEvent'
import { Carusel } from '../../components/Slider'
import { CardSlider } from '../../components/CardSlider'
import { ALLEvents } from '../../components/AllEvents'
import { EachTicket } from '../../components/EachTicket'

export const Main = () => {
    return (
        <div className='mainPage'>
            <Carusel />
            {/* <TopEvents /> */}
            {/* <CardSlider /> */}
            <ALLEvents />
            <SearchEvent />
            <MainAbout />
        </div>
    )
}