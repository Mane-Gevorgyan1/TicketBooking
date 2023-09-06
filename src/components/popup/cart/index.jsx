import './style.css'
import { CloseIcon, MinusSign } from '../../svg'

export const CartPopup = ({ open, setOpen }) => {
    return (
        <div className={open ? 'activePopup' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => setOpen(false)}>
                    <CloseIcon />
                </div>
                <h1>Ձեր տոմսերը (10)</h1>
                <div className='separator' />
                <div className='currentTickets'>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                    <div className='eachTicket'>
                        <span>Շարք - 1</span>
                        <span>Տեղ - 2</span>
                        <span>2000 դրամ</span>
                        <div className='minusSign'>
                            <MinusSign />
                        </div>
                    </div>
                </div>
                <button className='ticketBtn'>Շարունակել</button>
            </div>
        </div>
    )
}