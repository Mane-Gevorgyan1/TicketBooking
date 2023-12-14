import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FbSvg, InstagramSvg, MobilFb, MobileI, MobileT, TwitterSvg } from '../svg'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { GetFeedback } from '../../services/action/action'

export const Footer = ({ menu }) => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const feedback = useSelector(st => st.Event_reducer.feedback)
    const getCategory = useSelector((st) => st.getCategory)
    const { language } = useSelector((st) => st.StaticReducer)
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(GetFeedback())
    }, [dispatch])

    return (
        <div className='footerWrapper'>
            <div className='footerColumns'>
                <div className='eachFooterColumn'>
                    <p>{t('Copyright')} © 2023 shinetickets.com | {t('ALLRIGHTSRESERVED')}</p>
                </div>
                {!menu
                    && <div className='eachFooterColumnn'>
                        {/* {getCategory?.category?.map(elm => {
                            let title = ''
                            if (language === 'am') {
                                title = elm?.name
                            }
                            else if (language === 'en') {
                                title = elm?.name_en
                            }
                            else if (language === 'ru') {
                                title = elm?.name_ru
                            }
                            return <p onClick={() => navigation(`/Category/${elm?.name}/${elm?._id}`)} className='Headertext'>{title}</p>
                        })} */}
                        <p className='Headertext'></p>
                        <p onClick={() => navigation(`/PrivacyPolicy`)} className='Headertext'>{t('PrivacyPolicy')}</p>
                    </div>
                }
                <div className='eachFooterColumn'>
                    <div onClick={() => window.open(`${feedback?.facebook}`, '_blank')} style={{ cursor: 'pointer' }}>
                        <FbSvg />
                    </div>
                    <div onClick={() => window.open(`${feedback?.instagram}`, '_blank')} style={{ cursor: 'pointer' }}>
                        <InstagramSvg />
                    </div>
                    <div onClick={() => window.open(`${feedback?.twitter}`, '_blank')} style={{ cursor: 'pointer' }}>
                        <TwitterSvg />
                    </div>
                </div>
                <div className='FotterMobile'>
                    <div className='eachFooterColumnn'>
                        <p>{t('Copyright')} © 2023 shinetickets.com | {t('ALLRIGHTSRESERVED')}</p>
                    </div>
                    <div className='eachFooterColumnn'>
                        <MobilFb onClick={() => window.open(`${feedback?.facebook}`, '_blank')} />
                        <MobileI onClick={() => window.open(`${feedback?.instagram}`, '_blank')} />
                        <MobileT onClick={() => window.open(`${feedback?.twitter}`, '_blank')} />
                    </div>
                </div>
            </div>
        </div>
    )
}