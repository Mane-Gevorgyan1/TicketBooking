import './style.css'
import { Button } from '../Button'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const EachTopEvent = ({ id, image, title, location, location_en, location_ru, date, price, data }) => {
    console.log(location, location_en, location_ru)
    const { t } = useTranslation()
    const { language } = useSelector((st) => st.StaticReducer)
    const [languageData, setLanguageData] = useState({ title: '', location: '' })

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

    return (
        <div className='eachTopEvent' onClick={() => window.location = (`/Single/${id}`)}>
            <div className='topEventImage'>
                <img alt='' src={image} />
            </div>
            <div className='topEventDetails'>
                <h3>{languageData?.title}</h3>
                <span>{languageData?.location}</span>
                <span>{date}</span>
                <span>{price}</span>
                <Button onClick={() => window.location = (`/Single/${id}`)} title={t('BuyTicket')} />
            </div>
        </div>
    )
}