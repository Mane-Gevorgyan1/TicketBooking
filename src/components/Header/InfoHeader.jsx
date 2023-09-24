
import './style.css'
import { FbSvg, InstagramSvg, MobilFb, MobileI, MobileT, TwitterSvg } from '../../components/svg'
export const InfoHeader = () => {
    return <div className="infoHeaderContainer">
        <div className='infoHeader'>
            <div className='social'>
                <FbSvg />
                <InstagramSvg />
                <TwitterSvg />
            </div>
            <div className='socialm'>
                <MobilFb />
                <MobileI />
                <MobileT />
            </div>
            <div>
                <a href='tel:+37477584898' className='phonNumber'>+374 77 58 48 98</a>
            </div>
        </div>
    </div>
}
