import './style.css'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { InfoHeader } from '../Header/InfoHeader'
import { MenuMobile } from '../MenuMobile'
import { useState } from 'react'

export const Layout = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
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
    )
}