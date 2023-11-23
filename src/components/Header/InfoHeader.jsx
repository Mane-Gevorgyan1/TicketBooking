
import './style.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetFeedback } from '../../services/action/action'
import { FbSvg, InstagramSvg, MobilFb, MobileI, MobileT, TwitterSvg } from '../../components/svg'

export const InfoHeader = () => {
    const dispatch = useDispatch()
    const feedback = useSelector(st => st.Event_reducer.feedback)

    useEffect(() => {
        dispatch(GetFeedback())
    }, [dispatch])

    return <div className="infoHeaderContainer">
        <div className='infoHeader'>
            <div className='social'>
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
            <div className='socialm'>
                <MobilFb onClick={() => window.open(`${feedback?.facebook}`, '_blank')} />
                <MobileI onClick={() => window.open(`${feedback?.instagram}`, '_blank')} />
                <MobileT onClick={() => window.open(`${feedback?.twitter}`, '_blank')} />
            </div>
            <div>
                <a href={`tel:${feedback?.phone}`} className='phonNumber'>{feedback?.phone}</a>
            </div>
        </div>
    </div>
}
