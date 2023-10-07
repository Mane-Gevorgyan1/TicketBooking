import { useDispatch } from 'react-redux'
import './style.css'
import { OpenCategoryMenu } from '../../services/action/action'
export const CategoryMenu = ({ close, item, onClick }) => {
    const dispatch = useDispatch()
    return <div className="categoryMenu">
        {item.map((elm, i) => {

            return <div onClick={() => {
                close()
                dispatch(OpenCategoryMenu(false))
                onClick(elm)
            }
            }>{elm?.hall}</div>
        })}
    </div>
}