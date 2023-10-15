import { useState } from 'react'
import { MultysElectSvg, OpenMulTyselect } from '../svg'
import './styles.css'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
export const MultySelect = ({ title, onClick, item = [] }) => {
    const { language } = useSelector((st) => st.StaticReducer)
    const [open, setOpen] = useState(false)
    const { t } = useTranslation();

    document.body.addEventListener('click', function () {
        setOpen(false)
    });
    return <div onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setOpen(!open)
    }}>
        <div className='Multyselect'>
            <p>{title}</p>
            {open ?
                <div onClick={() => setOpen(false)}>
                    <OpenMulTyselect />
                </div>
                :
                <div onClick={() => setOpen(true)}>
                    <MultysElectSvg />
                </div>}
        </div>
        {open && <div className='MultyselectItem'>
            <div onClick={() => onClick('')}>{t('Showall')}</div>
            {item.map((elm, i) => {
                return <div onClick={() => onClick(elm)}>{
                    language === 'am' ? elm?.hall :
                        language === 'ru' ? elm?.hall_ru :
                            elm?.hall_en

                }</div>
            })}
        </div>}
    </div>
}