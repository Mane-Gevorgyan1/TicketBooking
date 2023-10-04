import { useDispatch } from 'react-redux'
import './style.css'
import { OpenCategoryMenu } from '../../services/action/action'
export const CategoryMenu = ({ close }) => {
    const dispatch = useDispatch()
    return <div className="categoryMenu">
        <div onClick={() => {
            close()
            dispatch(OpenCategoryMenu(false))
        }
        }>Small Hall</div>
    </div>
}