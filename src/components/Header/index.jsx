import './style.css'
import { CloseSvg, FreeSvg, MenuSvg, Search, Translate, User } from '../svg'
import { useDispatch, useSelector } from 'react-redux'
import { OpenCategoryMenu } from '../../services/action/action'

export const Header = ({ open, menu }) => {
    const openMenu = useSelector((st) => st.StaticReducer)
    console.log(openMenu)
    const dispatch = useDispatch()
    return (
        <div className='headerContainer'>
            <div className="header">
                <p className='title'>Logo</p>
                <div className='textWrapper'>
                    <p className='text'>Cinema</p>
                    <p className='text'>Концерт</p>
                    <p className='text'>Թատրոն</p>
                    <p className='text'>Classic</p>
                    <p className='text'>Other</p>
                </div>
                {!openMenu.categoryMenu ? <div className='buttonWrapperHeader'>
                    <Search />
                    <div className='Translate'>
                        <Translate />
                    </div>
                    <div className='menuSvg' onClick={() => open(!menu)}>
                        {!menu ? <MenuSvg /> : <div>
                            <CloseSvg />
                        </div>}
                    </div>
                </div> :
                    <div onClick={() => dispatch(OpenCategoryMenu(false))}>
                        <CloseSvg />
                    </div>
                }
            </div>
            <div className='FreeSvg'>
                <img src={require('../../assets/free.png')} />
            </div>
            <div className='FreeSvg1'>
                <img src={require('../../assets/free1.png')} />
            </div>
        </div>
    )
}