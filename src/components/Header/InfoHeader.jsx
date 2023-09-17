
import './style.css'
import { FbSvg, InstagramSvg, TwitterSvg } from '../../components/svg'
export const InfoHeader = () => {
    return <div className="infoHeaderContainer">
        <div className='infoHeader'>
            <div className='social'>
                <FbSvg />
                <InstagramSvg />
                <TwitterSvg />
            </div>
            <div>
                <p className='phonNumber'>+374 77 58 48 98</p>
            </div>
        </div>
    </div>
}
