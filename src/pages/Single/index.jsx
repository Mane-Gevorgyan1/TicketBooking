import './styles.css'
import { Button } from '../../components/Button'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSinglPage } from '../../services/action/action'
import { CardSlider } from '../../components/CardSlider'
import { PuffLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'
export const Single = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(GetSinglPage(id))
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
            <h2 style={{ margin: " 50px  0" }}>All Events</h2>
            <CardSlider data={recomended} />
        </div>
    </div >
}