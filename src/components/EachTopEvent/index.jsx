import './style.css'
import { Button } from '../Button'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const EachTopEvent = ({ id, image, title, location, date, price, data }) => {
    const { t } = useTranslation()
    const { language } = useSelector((st) => st.StaticReducer)
    const [languageData, setLanguageData] = useState({ title: '' })

    useEffect(() => {
        let item = { ...languageData }
        if (language === 'am') {
            item.title = data?.title
        }
        else if (language === 'en') {
            item.title = data?.title_en
        }
        else if (language === 'ru') {
            item.title = data?.title_ru
        }
        setLanguageData(item)
    }, [language])

    return (
        <div className='eachTopEvent' onClick={() => window.location = (`/Single/${id}`)}>
            <div className='topEventImage'>
                <img alt='' src={image} />
            </div>
            <div className='topEventDetails'>
                <h3>{languageData.title}</h3>
                <span>{location}</span>
                <span>{date}</span>
                <span>{price}</span>
                <Button title={t('BuyTicket')} />
            </div>
        </div>
    )
}