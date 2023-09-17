import './style.css'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../svg'
import { InfoHeader } from '../Header/InfoHeader'

export const Layout = () => {
    return (
        <>
            <InfoHeader />
            <Header />
            <div className='outlet'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}