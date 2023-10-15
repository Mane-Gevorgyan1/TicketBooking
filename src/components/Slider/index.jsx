import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css'
import { Button } from '../Button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const handleDragStart = (e) => e.preventDefault();

export const Carusel = () => {
    const { t } = useTranslation();

    const general = useSelector((st) => st.general)
    const [data, setData] = useState([])
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }
    const navigation = useNavigate()
    const { language } = useSelector((st) => st.StaticReducer)


    useEffect(() => {
        setData([])
    }, [language])

    useEffect(() => {
        let item = [...data]
        item = []
        if (!item.length) {
            let title = ''
            let description = ''
            general?.events?.length > 0 && general?.events?.map((elm, i) => {
                if (language === 'am') {
                    title = elm.title
                    description = elm.description
                }
                else if (language === 'en') {
                    title = elm.title_en
                    description = elm.description_en
                }
                else if (language === 'ru') {
                    title = elm.title_ru
                    description = elm.description_ru
                }
                const dateObject = new Date(elm?.sessions[0]?.date);
                let dayOfWeek = dateObject.getDay();
                const year = dateObject.getFullYear();
                let month = dateObject.getMonth() + 1;
                // let hour = dateObject.getHours();
                let minute = dateObject.getMinutes();
                if (dayOfWeek <= 9) {
                    dayOfWeek = `0${dayOfWeek}`
                }
                if (month <= 9) {
                    month = `0${month}`
                }
                // if (hour < 9) {
                //     hour = `0${hour}`
                // }
                if (minute < 9) {
                    minute = `0${minute}`
                }
                item.push(
                    <div key={i} className='CaruselItem'>
                        <div className='Desckription'>
                            <p className='titleCarusel'>{title}</p>
                            <div>
                                <span>{truncateText(description, 30)}</span>
                                <span>{`${dayOfWeek}.${month}.${year}`}  {elm?.sessions?.time}</span>
                                <div className='ButtonWrapperCarusel' style={{ marginTop: 10 }}>
                                    {language === 'am' &&
                                        <Button onClick={() => navigation(`Single/${elm._id}`)} title={'Գնել տոմս'} />
                                    }
                                    {language === 'en' &&
                                        <Button onClick={() => navigation(`Single/${elm._id}`)} title={'Buy Ticket'} />
                                    }
                                    {language === 'ru' &&
                                        <Button onClick={() => navigation(`Single/${elm._id}`)} title={'Купить билет'} />
                                    }
                                </div>
                            </div>
                        </div>
                        <img src={`http://localhost:8080/images/${elm.image}`} alt='' height={400} width={'99%'} style={{ borderRadius: 6 }} onDragStart={handleDragStart} role="presentation" />
                    </div>)
            })
        }
        setData(item)
    }, [general.events, language])





    return (
        <AliceCarousel
            disableButtonsControls={true}
            autoPlay={data.length > 1}
            mouseTracking
            items={data}
            infinite={data.length > 1}
            autoPlayInterval={100000}
        />
    );
}