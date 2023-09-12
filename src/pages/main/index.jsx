import './style.css'
import { AllEvents } from '../../components/AllEvents'
import { TopEvents } from '../../components/TopEvents'
import { MainAbout } from '../../components/MainAbout'
import { SearchEvent } from '../../components/SearchEvent'

export const Main = () => {
    return (
        <div className='mainPage'>
            <AllEvents />
            <TopEvents />
            <SearchEvent />
            <MainAbout />
        </div>
    )
}