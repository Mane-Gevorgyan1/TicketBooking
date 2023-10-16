import './style.css'
import { useState } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { MenuMobile } from '../MenuMobile'
import { InfoHeader } from '../Header/InfoHeader'

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