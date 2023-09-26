import './style.css'
import { Cart, CloseIcon } from '../../svg'
import { useSelector } from 'react-redux'

export const CartPopup = ({ open, setOpen, children, openCard }) => {
    const tickets = useSelector((st) => st.tiketsForBuy)
    return (
        <div className={open ? 'activePopup' : 'inactive'}>
            <div className='pop' >
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                {children}
                <div className='cartLine' onClick={() => openCard()}><div ><Cart />{tickets.tickets.length}</div></div>
            </div>
        </div>
    )
}