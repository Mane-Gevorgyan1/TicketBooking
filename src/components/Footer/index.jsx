import { useSelector } from 'react-redux'
import { FbSvg, InstagramSvg, MobilFb, MobileI, MobileT, TwitterSvg } from '../svg'
import './style.css'
import { useNavigate } from 'react-router-dom'

export const Footer = ({ menu }) => {

    const getCategory = useSelector((st) => st.getCategory)
    const navigation = useNavigate()
    const { language } = useSelector((st) => st.StaticReducer)

    return (
        <div className='footerWrapper'>
            <div className='footerColumns'>
                <div className='eachFooterColumn'>
                    <p>Copyrigh© 2023 shineticket.am | ALL RIGHTS RESERVED</p>
                </div>
                {!menu && <div className='eachFooterColumnn'>
                    {getCategory.category.map((elm, i) => {
                        let title = ''
                        if (language === 'am') {
                            title = elm.name
                        }
                        else if (language === 'en') {
                            title = elm.name_en
                        }
                        else if (language === 'ru') {
                            title = elm.name_ru
                        }
                        return <p onClick={() => navigation(`/Category/${elm.name}/${elm._id}`)} className='Headertext'>{title}</p>
                    })}
                </div>}
                <div className='eachFooterColumn'>
                    <FbSvg />
                    <InstagramSvg />
                    <TwitterSvg />
                </div>
                <div className='FotterMobile'>
                    <div className='eachFooterColumnn'>
                        <p>Copyrigh© 2023 shineticket.am | ALL RIGHTS RESERVED</p>
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