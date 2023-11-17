import './style.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateCurrentTicket, RemoveTicketsAction, StatusSuccessAction } from '../../services/action/action'
import { CheckSvg, CheckedSvg, SelectSvg, SelectedSvg } from '../svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'

export const BuyNow = () => {
    const dispatch = useDispatch()
    const tickets = useSelector((st) => st.tiketsForBuy)
    const Select = (i) => { setSelectPay(i) }
    const [total, setTotal] = useState(0)
    const [chedked, setChedker] = useState(false)
    const [selectPay, setSelectPay] = useState(1)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [additional, setAdditional] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState({
        name: '',
        email: '',
        phonNumber: '',
        checked: '',
        address: ''
    })

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let price = 0
        tickets.tickets?.map((elm, i) => {
            price += +elm.price
        })
        setTotal(price)
    }, [tickets])

    function handlePurchase() {
        setLoading(true)
        axios.post(`${process.env.REACT_APP_HOSTNAME}/registerPayment`, { amount: 100 })
            .then(res => {
                if (res?.data?.success) {
                    setLoading(false)
                    localStorage.setItem('orderId', res?.data?.orderId)
                    window.open(`${res?.data?.formUrl}`, { target: '_blank' })
                    dispatch(CreateCurrentTicket({
                        tickets: tickets.tickets,
                        buyerName: name,
                        buyerEmail: email,
                        buyerPhone: number,
                        deliveryLocation: address,
                        sessionId: tickets.tickets[0].sessionId,
                        paymentMethod: selectPay === 1 ? 'online' : 'cash',
                        buyerNotes: additional,
                        orderId: res?.data?.orderId,
                    }))
                    setTimeout(() => {
                        dispatch(StatusSuccessAction())
                    }, 5000)
                } else {
                    window.open(`/`)
                }
            })
            .catch((error) => {
            })
    }

    const validation = () => {
        let send = false
        let item = { ...error }
        if (!name) {
            item.name = 'error'
            send = false
        }
        else {
            send = true
            item.name = ''
        }
        if (!number) {
            item.phonNumber = 'error'
            send = false
        }
        else {
            send = true
            item.phonNumber = ''
        }
        if (!ValidateEmail(email)) {
            item.email = 'error'
            send = false
        }
        else {
            send = true
            item.email = ''
        }
        if (!chedked) {
            item.checked = 'error'
            send = false
        }
        else {
            item.checked = ''
            send = true
        }
        if (selectPay == 3) {
            if (!address) {
                item.address = 'error'
                send = false
            }
            else {
                send = true
                item.address = ''

            }
        }
        if (send) {
            if (selectPay === 2) {
                console.log('222')
                setLoading(true)
                dispatch(CreateCurrentTicket({
                    tickets: tickets.tickets,
                    buyerName: name,
                    buyerEmail: email,
                    buyerPhone: number,
                    deliveryLocation: address,
                    sessionId: tickets.tickets[0].sessionId,
                    paymentMethod: selectPay === 1 ? 'online' : 'cash',
                    buyerNotes: additional,
                    orderId: generateOrderNumber(),
                }))
                setLoading(false)
                window.location = `/telCell/${total}`
            }
            else {
                handlePurchase()
            }
        }
        setError(item)
    }


    const generateOrderNumber = () => {
        const timestamp = Date.now()
        const randomNum = Math.floor(Math.random() * 1000)
        return `tel-${timestamp}-${randomNum}`
    }



    return (
        <div>
            <div className='buyNowWrapper2'>
                <div className='BuyNowHeader'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className='BuyNowWrapper'>
                    <div className='BuyNowTitle'>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <div className='BuyNowTickert' id='BuyNowTickert'>
                            <p className='Seat'>Seat</p>
                            <p className='Seat'>Price</p>
                        </div>
                        {tickets?.tickets?.map((elm, i) => (
                            <div className='BuyNowTickert' key={i}>
                                {elm.row > 0 ?
                                    <p className='BuyNowTickertPrive' id='parter'>Parter, Line  {elm?.row}   Seat {elm?.seat}</p> :
                                    <p className='BuyNowTickertPrive' id='parter'>  {elm?.row} </p>

                                }

                                <p className='BuyNowTickertPrive' id='Amd' > {elm?.price} AMD</p>
                                <p style={{ cursor: 'pointer' }} onClick={() => dispatch(RemoveTicketsAction(elm))}> x</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='buyNowTotalPrice'>
                    <p>Total : <span>{total} AMD</span></p>
                </div>
                <div className='BuyMethod'>
                    <div className='selectPay' onClick={() => Select(1)}>
                        <div className='BuyMethodSelect'>
                            {selectPay == 1 ? <SelectedSvg /> : <SelectSvg />}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 10 }}>
                            <img alt='' width={45} height={20} src={require('../../assets/MIR_logo.png')} />
                            <img alt='' width={45} height={20} src={require('../../assets/amex_logo.png')} />
                            <img alt='' width={45} height={20} src={require('../../assets/arca_logo.png')} />
                            <img alt='' width={45} height={20} src={require('../../assets/mastercard_logo.png')} />
                            <img alt='' width={45} height={20} src={require('../../assets/visa_logo.png')} />

                        </div>
                    </div>
                    <div className='selectPay' onClick={() => Select(2)} style={{ cursor: 'pointer' }}>
                        <div className='BuyMethodSelect'>
                            {selectPay == 2 ? <SelectedSvg /> : <SelectSvg />}
                        </div>
                        <img alt='' width={80} height={50} src={require('../../assets/TelCell.jpg')} />
                    </div>
                    <div className='selectPay' onClick={() => Select(3)} style={{ cursor: 'pointer' }}>
                        <div className='BuyMethodSelect'>
                            {selectPay == 3 ? <SelectedSvg /> : <SelectSvg />}
                        </div>
                        <img alt='' width={80} height={30} src={require('../../assets/take.png')} />
                    </div>
                </div>
                <div className='BuyInputs'>
                    <div className='BuyInputsName'>
                        <div className='InputsBuy'>
                            <label>Name Surname</label>
                            <input id={error.name != '' ? 'errorInut' : 'inout'} value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='InputsBuy'>
                            <label>Phone Number</label>
                            <input id={error.phonNumber != '' ? 'errorInut' : 'inout'} value={number} type='number' onChange={(e) => setNumber(e.target.value)} />
                        </div>
                    </div>
                    <div className='InputsBuy'>
                        <label>E-mail</label>
                        <input id={error.email != '' ? 'errorInut' : 'inout'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='InputsBuy'>
                        <label>Additional notes</label>
                        <textarea value={additional} onChange={(e) => setAdditional(e.target.value)} />
                    </div>
                    {selectPay == 3 &&
                        <div className='InputsBuy'>
                            <label>Address</label>
                            <input id={error.address != '' ? 'errorInut' : 'inout'} value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    }
                </div>
                <div className='BuyButton'>

                    <button disabled={loading} onClick={validation} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                        {
                            !loading ? 'Գնել տոմս' :

                                <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <PuffLoader size={28} color="#FEE827" />
                                </div>
                        }

                    </button>
                </div>
                <div className='BuyCheck'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div onClick={() => setChedker(!chedked)} style={{ cursor: 'pointer' }}>
                        {chedked
                            ? <CheckedSvg />
                            : <CheckSvg error={error.checked == ''} />
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}