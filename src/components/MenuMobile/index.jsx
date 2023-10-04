import { useNavigate } from 'react-router-dom'
import './style.css'
import { useSelector } from 'react-redux'
export const MenuMobile = ({ onClose }) => {
    const getCategory = useSelector((st) => st.getCategory)
    const navigation = useNavigate()
    return <div className='MenuMobile'>
        {getCategory.category.map((elm, i) => {
            return <div onClick={() => {
                onClose()
                navigation(`/Category/${elm.name}/${elm._id}`)
            }}
            >{elm.name}</div>
        })}
    </div>
}