import './styles.css'
import { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BuyNow } from '../../components/BuyNow'
import { Button } from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { CartPopup } from '../../components/popup/cart'
import { CardSlider } from '../../components/CardSlider'
import { GetSinglPage } from '../../services/action/action'
import AramKhachatryan from '../../components/photoMap/AramKhachatryanHall'

export const Single = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { t } = useTranslation();
    const getSinglPage = useSelector((st) => st.getSinglPage)
    const { language } = useSelector((st) => st.StaticReducer)
    let { event } = getSinglPage?.events
    let { recomended } = getSinglPage?.events
    const [openPopUp, setOpenPopUp] = useState(false)
    const [openBuy, setOpenBuy] = useState(false)
    const [languageData, setLanguageData] = useState({ title: '', description: '' })

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(GetSinglPage(id))
    }, [])

    useEffect(() => {
        console.log('22')
        let item = { ...languageData }
        if (language === 'am') {
            item.title = event?.title
            item.description = event?.description
        }
        else if (language === 'en') {
            item.title = event?.title_en
            item.description = event?.description_en


        }
        else if (language === 'ru') {
            item.title = event?.title_ru
            item.description = event?.description_ru

        }
        setLanguageData(item)
    }, [language, event])

    if (getSinglPage.loading) {
        return (
            <div className='loading'>
                <PuffLoader color="#FEE827" />
            </div>
        )
    }
    return (
        <div className='single'>
            {openPopUp &&
                <div className='ByTicketWrapper'>
                    <CartPopup
                        open={openPopUp}
                        setOpen={setOpenPopUp}
                        type='hall'
                        openCard={() => {
                            setOpenBuy(true)
                        }}
                    >
                        {/* <Hall buy={() => setOpenBuy(true)} /> */}
                        <AramKhachatryan secion={getSinglPage.events.event?.sessions[0]?.price} />
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
                    <img src={`${process.env.REACT_APP_IMAGE}/${event?.image}`} alt='' />
                </div>
                <div className='singltextWrapper'>
                    <div></div>
                    <p className='singlTitle'>{languageData?.title}</p >
                    <p className='singelText'>{languageData?.description}</p>
                    <div className='buttonWrapperSingl'>
                        <Button title={t('BuyNow')} onClick={() => setOpenPopUp(true)} />
                    </div>
                </div>
            </div>
            {recomended?.length > 0 &&
                <div className='EventTitle' style={{ flexDirection: 'column', marginBottom: 40 }}>
                    <h2 style={{ margin: "50px  0" }}>{t('RecommendTickets')}</h2>
                    <CardSlider data={recomended} />
                </div>
            }
        </div>
    )
}