import './styles.css'
import { Button } from '../../components/Button'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSinglPage } from '../../services/action/action'
import { CardSlider } from '../../components/CardSlider'
import { PuffLoader } from 'react-spinners'
export const Single = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetSinglPage("65061546e6b8d726f0b3f426"))
    }, [])
    const getSinglPage = useSelector((st) => st.getSinglPage)
    let { event } = getSinglPage.events
    let { recomended } = getSinglPage.events
    if (getSinglPage.loading) {
        return <div className='loading'>
            <PuffLoader color="#36d7b7" />
        </div>
    }
    return <div className='single'>
        <div className='SinglDescription'>
            <div className='singlImg'>
                <img src={require('../../assets/Vector.png')} />
            </div>
            <div className='singltextWrapper'>
                <div></div>
                <p className='singlTitle'>{event?.title}</p >
                <p className='singelText'>{event?.description}</p>
                <div className='buttonWrapperSingl'>
                    <Button title={'Buy Now'} />
                </div>
            </div>
        </div>
        <div className='EventTitle' style={{ flexDirection: 'column', marginBottom: 40 }}>
            <h2 style={{ marginBottom: 50 }}>All Events</h2>
            <CardSlider data={recomended} />
        </div>
    </div >
}