import './style.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateCurrentTicket, RemoveTicketsAction, StatusSuccessAction } from '../../services/action/action'
import { CheckSvg, CheckedSvg, SelectSvg, SelectedSvg } from '../svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import CryptoJS from 'crypto-js'
import { Buffer } from "buffer"

export const BuyNow = () => {
    const generateOrderNumber = () => {
        const timestamp = Date.now()
        const randomNum = Math.floor(Math.random() * 1000)
        return `tel-${timestamp}-${randomNum}`
    }

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
    const issuerId = generateOrderNumber()
    const [delivery, setDelivery] = useState(false)
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
                        buyerNotes: additional,
                        orderId: res?.data?.orderId,
                        paymentMethod: 'ACBA',
                        delivery,
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
                setLoading(true)
                dispatch(CreateCurrentTicket({
                    tickets: tickets.tickets,
                    buyerName: name,
                    buyerEmail: email,
                    buyerPhone: number,
                    deliveryLocation: address,
                    sessionId: tickets.tickets[0].sessionId,
                    paymentMethod: 'Telcell',
                    buyerNotes: additional,
                    orderId: issuerId,
                }))
                setLoading(false)

                function getTelcellSecurityCode(shop_key, issuer, currency, price, product, issuer_id, valid_days) {
                    return CryptoJS.MD5(shop_key + issuer + currency + price + product + issuer_id + valid_days).toString();
                }

                const encodedProduct = new Buffer.from('Ticket111').toString('base64')
                const encodedIssuerId = new Buffer.from(issuerId).toString('base64')
                const security_code = getTelcellSecurityCode(
                    process.env.REACT_APP_TELCELL_SHOP_KEY,
                    process.env.REACT_APP_TELCELL_ISSUER,
                    "֏",
                    total,
                    encodedProduct,
                    encodedIssuerId,
                    "1"
                )

                document.getElementById('telcellForm').innerHTML = `
                <form id='form' style={{ margin: "20px" }} target="_blank" action="https://telcellmoney.am/invoices" method="POST" >
                    <input type="hidden" name="action" value="PostInvoice" />
                    <input type="hidden" name="issuer" value=${process.env.REACT_APP_TELCELL_ISSUER} />
                    <input type="hidden" name="currency" value="֏" />
                    <input type="hidden" name="price" value=${total} />
                    <input type="hidden" name="product" value=${encodedProduct} />
                    <input type="hidden" name="issuer_id" value=${encodedIssuerId} />
                    <input type="hidden" name="valid_days" value="1" />
                    <input type="hidden" name="lang" value="am" />
                    <input type="hidden" name="security_code" value=${security_code} />
                </form>`
                document.getElementById('form').submit()
                window.location.reload()
            } else {
                handlePurchase()
            }
        }
        setError(item)
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
                            <p className='Seat'>Տեղը</p>
                            <p className='Seat' style={{ marginRight: '15px' }}>Գինը</p>
                        </div>
                        {tickets?.tickets?.map((elm, i) => {
                            return <div className='BuyNowTickert' key={i}>
                                {elm.row > 0 ?
                                    <p className='BuyNowTickertPrive' id='parter'>{elm?.parterre && 'Պարտեր'} {elm?.lodge && 'Օթյակ'} {elm?.amphitheater && 'Ամֆիթատրոն'}, շարք {elm?.row}, տեղ {elm?.seat}</p> :
                                    <p className='BuyNowTickertPrive' id='parter'>{elm?.row}</p>
                                }
                                <div className='deleteTicket'>
                                    <p className='BuyNowTickertPrive' id='Amd' >{elm?.price} դրամ</p>
                                    <p style={{ cursor: 'pointer' }} onClick={() => dispatch(RemoveTicketsAction(elm))}> x</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='buyNowTotalPrice'>
                    <p>Ընդհանուր: <span>{total} դրամ</span></p>
                </div>
                <div className='BuyMethod'>
                    <div className='selectPay' onClick={() => {
                        setDelivery(false)
                        Select(1)
                    }}>
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
                    <div className='selectPay' onClick={() => {
                        Select(2)
                        setDelivery(false)
                    }} style={{ cursor: 'pointer' }}>
                        <div className='BuyMethodSelect'>
                            {selectPay == 2 ? <SelectedSvg /> : <SelectSvg />}
                        </div>
                        <img alt='' width={80} height={50} src={require('../../assets/TelCell.jpg')} />
                    </div>
                    <div className='selectPay' onClick={() => {
                        setDelivery(true)
                        Select(3)
                    }} style={{ cursor: 'pointer' }}>
                        <div className='BuyMethodSelect'>
                            {selectPay == 3 ? <SelectedSvg /> : <SelectSvg />}
                        </div>
                        <img alt='' width={80} height={30} src={require('../../assets/take.png')} />
                    </div>
                </div>
                <div className='BuyInputs'>
                    <div className='BuyInputsName'>
                        <div className='InputsBuy'>
                            <label>Անուն, Ազգանուն</label>
                            <input id={error.name != '' ? 'errorInut' : 'inout'} value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='InputsBuy'>
                            <label>Հեռախոսահամար</label>
                            <input id={error.phonNumber != '' ? 'errorInut' : 'inout'} value={number} type='number' onChange={(e) => setNumber(e.target.value)} />
                        </div>
                    </div>
                    <div className='InputsBuy'>
                        <label>Էլ. հասցե</label>
                        <input id={error.email != '' ? 'errorInut' : 'inout'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='InputsBuy'>
                        <label>Նշումներ</label>
                        <textarea value={additional} onChange={(e) => setAdditional(e.target.value)} />
                    </div>
                    {selectPay == 3 &&
                        <div className='InputsBuy'>
                            <label>Առաքման հասցե</label>
                            <input id={error.address != '' ? 'errorInut' : 'inout'} value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    }
                </div>
                <div className='BuyButton'>
                    <button disabled={loading} onClick={validation} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {!loading
                            ? 'Գնել տոմս'
                            : <div style={{ justifyContent: 'center', alignItems: 'center' }}>
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
                            : <CheckSvg error={error?.checked == ''} />
                        }
                    </div>
                </div>
                <div id='telcellForm' />
            </div>
        </div>
    )
}