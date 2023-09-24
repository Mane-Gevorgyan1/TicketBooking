import { useNavigate } from 'react-router-dom'
import './style.css'
export const MenuMobile = ({ onClose }) => {
    const navigation = useNavigate()
    return <div className='MenuMobile'>
        <div onClick={() => {
            navigation('/Category/Cinema')
            onClose()
        }} >Cinema</div>
        <div>Concert</div>
        <div>Theater</div>
        <div>Classic</div>
        <div>Other</div>
    </div>
}