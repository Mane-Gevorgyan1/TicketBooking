import { useNavigate } from 'react-router-dom'
import './style.css'
import { useSelector } from 'react-redux'
export const MenuMobile = ({ onClose }) => {
    const getCategory = useSelector((st) => st.getCategory)
    const navigation = useNavigate()
    const { language } = useSelector((st) => st.StaticReducer)

    return <div className='MenuMobile'>
        {getCategory.category.map((elm, i) => {
            let title = ''
            if (language === 'am') {
                title = elm.name
            }
            else if (language === 'en') {
                title = elm.name_en
            }
            else if (language === 'ru') {
                title = elm.name_ru
            }
            return <div onClick={() => {
                onClose()
                navigation(`/Category/${elm.name}/${elm._id}`)
            }}
            >{title}</div>
        })}
    </div>
}