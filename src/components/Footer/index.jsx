import './style.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FbSvg, InstagramSvg, MobilFb, MobileI, MobileT, TwitterSvg } from '../svg'
import { useTranslation } from 'react-i18next'

export const Footer = ({ menu }) => {
    const navigation = useNavigate()
    const getCategory = useSelector((st) => st.getCategory)
    const { language } = useSelector((st) => st.StaticReducer)
    const { t } = useTranslation()

    return (
        <div className='footerWrapper'>
            <div className='footerColumns'>
                <div className='eachFooterColumn'>
                    <p>{t('Copyright')} © 2023 shinetickets.com | {t('ALLRIGHTSRESERVED')}</p>
                </div>
                {!menu
                    && <div className='eachFooterColumnn'>
                        {getCategory?.category?.map(elm => {
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
                        })}
                        <p onClick={() => navigation(`/PrivacyPolicy`)} className='Headertext'>{t('PrivacyPolicy')}</p>
                    </div>
                }
                <div className='eachFooterColumn'>
                    <FbSvg />
                    <InstagramSvg />
                    <TwitterSvg />
                </div>
                <div className='FotterMobile'>
                    <div className='eachFooterColumnn'>
                        <p>{t('Copyright')} © 2023 shinetickets.com | {t('ALLRIGHTSRESERVED')}</p>
                    </div>
                    <div className='eachFooterColumnn'>
                        <MobilFb />
                        <MobileI />
                        <MobileT />
                    </div>
                </div>
            </div>
        </div>
    )
}