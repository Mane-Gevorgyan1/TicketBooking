import './style.css'
import { MainAbout } from '../../components/MainAbout'
import { SearchEvent } from '../../components/SearchEvent'
import { Carusel } from '../../components/Slider'
import { CardSlider } from '../../components/CardSlider'
import { ALLEvents } from '../../components/AllEvents'
import { useDispatch, useSelector } from 'react-redux'
import { PuffLoader } from 'react-spinners'
import { GetGenerealEvents } from '../../services/action/action'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Main = () => {
    const { t } = useTranslation();
    const topEvents = useSelector((st) => st.topEvents)
    const general = useSelector((st) => st.general)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetGenerealEvents())
    }, [])
    if (general.loading) {
        return <div className='loading'>
            <PuffLoader color="#FEE827" />
        </div>
    }
    return (
        <div className='mainPage'>
            <Carusel />
            <div className='EventTitle' style={{ flexDirection: 'column' }}>
                <h2 style={{ marginBottom: 50 }}>{t('TopEvents')}</h2>
                <div className='topEventsMain'>
                    <CardSlider data={topEvents?.events} />
                </div>
            </div>
            <ALLEvents />
            <SearchEvent />
            <MainAbout />
        </div>
    )
}