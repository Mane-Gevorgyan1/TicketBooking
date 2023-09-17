
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
                <p className='phonNumber'>+374 77 58 48 98</p>
            </div>
        </div>
    </div>
}
