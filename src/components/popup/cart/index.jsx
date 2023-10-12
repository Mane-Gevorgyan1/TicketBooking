import './style.css'
import { Cart, CloseIcon } from '../../svg'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveAllTickets } from '../../../services/action/action'
import { useEffect } from 'react'

export const CartPopup = ({ open, setOpen, children, openCard, show = true, type }) => {
    const tickets = useSelector((st) => st.tiketsForBuy)
    const bodyElement = document.body;
    const dispatch = useDispatch()

    useEffect(() => {
        if (open) {
            bodyElement.style.overflow = 'hidden';
        }
    }, [open])
    const Close = () => {
        bodyElement.style.overflow = 'auto';
        setOpen(false)
        if (type == 'hall') {
            dispatch(RemoveAllTickets())
        }
    }
    return (
        <div className={open ? 'activePopup' : 'inactive'}>
            <div className='pop' >
                <div className='close' onClick={() => Close()}>
                    <CloseIcon />
                </div>
                {children}
                {
                    show && <div className='cartLine' onClick={() => openCard()}><div ><Cart />{tickets.tickets.length}</div></div>
                }
            </div>
        </div>
    )
}