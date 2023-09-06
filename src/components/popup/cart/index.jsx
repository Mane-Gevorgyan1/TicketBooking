import './style.css'
import { CloseIcon, MinusSign } from '../../svg'

export const CartPopup = ({ open, setOpen, data, removeTicket }) => {
    return (
        <div className={open ? 'activePopup' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                <h1>Ձեր տոմսերը ({data.length})</h1>
                <div className='separator' />
                <div className='currentTickets'>
                    {data.map((elm, i) => {
                        return <div key={i} className='eachTicket'>
                            <span>Շարք - {elm.row}</span>
                            <span>Տեղ - {elm.bench}</span>
                            <span>{elm.price} դրամ</span>
                            <div onClick={() => removeTicket(i)} className='minusSign'>
                                <MinusSign />
                            </div>
                        </div>
                    })}
                </div>
                <button className='ticketBtn'>Շարունակել</button>
            </div>
        </div>
    )
}