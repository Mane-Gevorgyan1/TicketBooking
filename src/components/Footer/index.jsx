import { FbSvg, InstagramSvg, MobilFb, MobileI, MobileT, TwitterSvg } from '../svg'
import './style.css'

export const Footer = () => {
    return (
        <div className='footerWrapper'>
            <div className='footerColumns'>
                <div className='eachFooterColumn'>
                    <p>Copyrigh© 2023 shineticket.am | ALL RIGHTS RESERVED</p>
                </div>
                <div className='eachFooterColumnn'>
                    <p>Theater</p>
                    <p>Theater</p>
                    <p>Theater</p>
                    <p>Theater</p>
                </div>
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