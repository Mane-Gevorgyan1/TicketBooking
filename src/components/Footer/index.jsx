import { useSelector } from 'react-redux'
import { FbSvg, InstagramSvg, MobilFb, MobileI, MobileT, TwitterSvg } from '../svg'
import './style.css'
import { useNavigate } from 'react-router-dom'

export const Footer = ({ menu }) => {

    const getCategory = useSelector((st) => st.getCategory)
    const navigation = useNavigate()

    return (
        <div className='footerWrapper'>
            <div className='footerColumns'>
                <div className='eachFooterColumn'>
                    <p>Copyrigh© 2023 shineticket.am | ALL RIGHTS RESERVED</p>
                </div>
                {!menu && <div className='eachFooterColumnn'>
                    {getCategory.category.map((elm, i) => {
                        return <p onClick={() => navigation(`/Category/${elm.name}/${elm._id}`)} className='Headertext'>{elm.name}</p>
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