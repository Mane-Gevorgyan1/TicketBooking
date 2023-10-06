import './styles.css'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSinglPage } from '../../services/action/action'
import { CardSlider } from '../../components/CardSlider'
import { PuffLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'
import PhotoCoordinatesByColor from '../../components/photoMap'
import { CartPopup } from '../../components/popup/cart'
import { BuyNow } from '../../components/BuyNow'
export const Single = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(GetSinglPage(id))
    }, [])

    const getSinglPage = useSelector((st) => st.getSinglPage)
    let { event } = getSinglPage.events
    let { recomended } = getSinglPage.events
    const [openPopUp, setOpenPopUp] = useState(false)
    const [openBuy, setOpenBuy] = useState(false)
    if (getSinglPage.loading) {
        return <div className='loading'>
            <PuffLoader color="#FEE827" />
        </div>
    }
    return <div className='single'>
        {openPopUp &&
            <div className='ByTicketWrapper'>
                <CartPopup
                    open={openPopUp}
                    setOpen={setOpenPopUp}
                    openCard={() => {
                        setOpenBuy(true)
                    }}
                >
                    <PhotoCoordinatesByColor secion={getSinglPage.events.event?.sessions[0].price} />
                </CartPopup>
            </div>
        }
        {openBuy &&
            <CartPopup
                open={openBuy}
                setOpen={setOpenBuy}
            >
                <BuyNow />
            </CartPopup>

        }
        <div className='SinglDescription'>
            <div className='singlImg'>
                <img src={`http://localhost:8080/images/${event?.image}`} />
            </div>
            <div className='singltextWrapper'>
                <div></div>
                <p className='singlTitle'>{event?.title}</p >
                <p className='singelText'>{event?.description}</p>
                <div className='buttonWrapperSingl'>
                    <Button title={'Buy Now'} onClick={() => setOpenPopUp(true)} />
                </div>
            </div>
        </div>
        {recomended?.length > 0 && <div className='EventTitle' style={{ flexDirection: 'column', marginBottom: 40 }}>
            <h2 style={{ margin: " 50px  0" }}>All Events</h2>
            <CardSlider data={recomended} />
        </div>}
    </div >
}