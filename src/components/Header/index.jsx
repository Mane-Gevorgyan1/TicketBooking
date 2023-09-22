import './style.css'
import { CloseSvg, FreeSvg, MenuSvg, Search, Translate, User } from '../svg'
import { useDispatch, useSelector } from 'react-redux'
import { OpenCategoryMenu, SearchAction } from '../../services/action/action'
import { useEffect, useState } from 'react'
import { SearchInput } from '../SearchInput'
import { useNavigate } from 'react-router-dom'

export const Header = ({ open, menu }) => {
    const openMenu = useSelector((st) => st.StaticReducer)
    const dispatch = useDispatch()
    const [serchInput, setSearchInput] = useState(false)
    const [value, setValue] = useState('')
    const navigation = useNavigate()
    const search = useSelector((st) => st.search)
    useEffect(() => {
        dispatch(SearchAction(value))
    }, [value])
    if (serchInput) {
        return <div className='inputWRapper' >
            <div>
                <SearchInput value={value} changeValue={(e) => setValue(e)} close={() => setSearchInput(false)} />
                {search.events.length > 0 && value && < div className='searchDivWrapper'>
                    {search.events?.map((elm, i) => {
                        return <div onClick={() => window.location = (`/Single/${elm._id}`)}>{elm.title}</div>
                    })}
                </div>
                }
            </div>
        </div >
    }
    return (
        <div className='headerContainer'>
            <div className="header">
                <p onClick={() => navigation('/')} className='title'>Logo</p>
                <div className='textWrapper'>
                    <p onClick={() => navigation('/Category/Cinema')} className='text'>Cinema</p>
                    <p className='text'>Концерт</p>
                    <p className='text'>Թատրոն</p>
                    <p className='text'>Classic</p>
                    <p className='text'>Other</p>
                </div>
                {!openMenu.categoryMenu ? <div className='buttonWrapperHeader'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} onClick={() => setSearchInput(true)}>
                        <Search />
                    </div>
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