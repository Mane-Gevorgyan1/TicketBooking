import './style.css'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../svg'

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <div className='separator' />
            <div className='footerWrapper'>
                <div className='copyright'>
                    <span>Copyright ©</span>
                    <div className='findUs'>
                        <div className='cursor'><FacebookIcon /></div>
                        <div className='cursor'><InstagramIcon /></div>
                        <div className='cursor'><TwitterIcon /></div>
                    </div>
                </div>
            </div>
        </>
    )
}