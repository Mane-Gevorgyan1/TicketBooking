import './style.css'
import { Button } from '../Button'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const EachTopEvent = ({ id, image, location, location_en, location_ru, date, price, data }) => {
    const { t } = useTranslation()
    const { language } = useSelector((st) => st.StaticReducer)
    const [languageData, setLanguageData] = useState({ title: '', location: '' })
    const [hover, setHover] = useState(false)
    const [hover1, setHover1] = useState(false)

    useEffect(() => {
        let item = { ...languageData }
        if (language === 'am') {
            item.title = data?.title
            item.location = location
        }
        else if (language === 'en') {
            item.title = data?.title_en
            item.location = location_en

        }
        else if (language === 'ru') {
            item.title = data?.title_ru
            item.location = location_ru

        }
        setLanguageData(item)
    }, [language])

    useEffect(() => {
        if (hover) {
            setTimeout(() => {
                setHover1(true)
            }, [300])
        }
        else {
            setHover1(false)
        }
    }, [hover])

    return (
        <div className='eachTopEvent' onClick={() => window.location = (`/Single/${id}`)}>
            <div className='topEventImage'>
                <img alt='' src={image} />
            </div>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} id={hover ? 'hovertopEventDetails' : ''} className='topEventDetails'>
                {hover && <h3>{languageData?.title}</h3>}
                {hover && <div className='topEventDetailsInfo'>
                    <span>{languageData?.location}</span>
                    <span>{date}</span>
                    <span>{price}</span>
                </div>}
                {/* <Button onClick={() => window.location = (`/Single/${id}`)} title={t('BuyTicket')} /> */}
            </div>
            <div onMouseLeave={() => {
                setHover(false)
                setHover1(false)
            }

            } className='buttonEachEventDiv'>
                <button onMouseEnter={() => setHover(true)} className='buttonEachEvent' onClick={() => window.location = (`/Single/${id}`)}>{t('BuyTicket')}</button>
            </div>
        </div>
    )
}