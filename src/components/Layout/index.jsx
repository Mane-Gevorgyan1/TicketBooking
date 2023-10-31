import './style.css'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { MenuMobile } from '../MenuMobile'
import { useState, useEffect } from 'react'
import { InfoHeader } from '../Header/InfoHeader'
import { useDispatch, useSelector } from 'react-redux'
import { EventValidity } from '../../services/action/action.js'

export const Layout = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const dispatch = useDispatch()
    const validity = useSelector(st => st.Event_reducer.valid)

    useEffect(() => {
        dispatch(EventValidity())
    }, [dispatch])

    return (<>
        {validity
            ? <div style={{ background: '#000', width: '100%', height: '100vh' }}></div>
            : <>
                <InfoHeader />
                <Header open={(e) => setOpenMenu(e)} menu={openMenu} />
                {!openMenu ? <div className='outlet'>
                    <Outlet />
                </div> :
                    <div className='outletMenu'>
                        <MenuMobile onClose={() => setOpenMenu(false)} />
                    </div>}
                <Footer menu={openMenu} />
            </>
        }
    </>
    )
}