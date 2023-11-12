import './style.css'
import { useEffect } from 'react'
import { PuffLoader } from 'react-spinners'
import { useTranslation } from 'react-i18next'
import { Carusel } from '../../components/Slider'
import { MainAbout } from '../../components/MainAbout'
import { ALLEvents } from '../../components/AllEvents'
import { useDispatch, useSelector } from 'react-redux'
import { CardSlider } from '../../components/CardSlider'
import { SearchEvent } from '../../components/SearchEvent'
import { GetAllAds, GetGenerealEvents, StatusSuccessAction } from '../../services/action/action'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const topEvents = useSelector((st) => st.topEvents)
    const general = useSelector((st) => st.general)
    const { getAds } = useSelector((st) => st)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(GetGenerealEvents())
        dispatch(GetAllAds())
    }, [])

    if (general?.loading) {
        return (
            <div className='loading'>
                <PuffLoader color="#FEE827" />
            </div>
        )
    }

    return (
        <div className='mainPage'>
            <Carusel />
            {/* <button onClick={() => {
                dispatch(StatusSuccessAction())
                navigate('/StatusPage')
            }}>sss</button> */}
            <div className='EventTitleMain'>
                <h2 style={{ marginBottom: 50 }}>{t('TopEvents')}</h2>
                <div className='topEventsMain'>
                    <CardSlider data={topEvents?.events} />
                </div>
            </div>
            <ALLEvents />
            <SearchEvent data={getAds.ads} />
            {/* <MainAbout /> */}
        </div>
    )
}