import './style.css'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateCurrentTicket, RemoveTicketsAction, StatusSuccessAction } from '../../services/action/action'
import { CheckSvg, CheckedSvg, SelectSvg, SelectedSvg } from '../svg'
import axios from 'axios'
import { PuffLoader } from 'react-spinners'
import CryptoJS from 'crypto-js'
import { Buffer } from "buffer"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useTranslation } from 'react-i18next'

export const BuyNow = () => {
    const { language } = useSelector((st) => st.StaticReducer)
    const generateOrderNumber = () => {
        const timestamp = Date.now()
        const randomNum = Math.floor(Math.random() * 1000)
        return `tel-${timestamp}-${randomNum}`
    }
    const scrollRef = useRef();

    const scrollToBottom = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            container.scrollTop = container.scrollHeight;
        }
    };

    const { t } = useTranslation()


    const dispatch = useDispatch()
    const tickets = useSelector((st) => st.tiketsForBuy)
    const getSinglPage = useSelector((st) => st.getSinglPage)
    const Select = (i) => { setSelectPay(i) }
    const [total, setTotal] = useState(0)
    const [chedked, setChedker] = useState(false)
    const [selectPay, setSelectPay] = useState(1)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [additional, setAdditional] = useState('')
    const [address, setAddress] = useState('')
    const [disableButton, setDisableButton] = useState(false)
    const issuerId = generateOrderNumber()
    const { creatTicket } = useSelector((st) => st)
    const [delivery, setDelivery] = useState(false)
    let [title, setTitle] = useState()
    const [error, setError] = useState({
        name: '',
        email: '',
        phonNumber: '',
        checked: '',
        address: ''
    })

    useEffect(() => {
        if (selectPay == 3) {
            if (name == '' || number == '' || address == '' || email == '') {
                setDisableButton(true)
            }
            else {
                setDisableButton(false)
            }
        }
        else {
            if (name == '' || number == '' || email == '') {
                setDisableButton(true)
            }
            else {
                setDisableButton(false)
            }
        }

    }, [name, number, address, email, selectPay])

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

    useEffect(() => {
        if (language === 'am') {
            setTitle(getSinglPage.events.event.title)
        }
        else if (language === 'en') {
            setTitle(getSinglPage.events.event.title_en)


        }
        else if (language === 'ru') {
            setTitle(getSinglPage.events.event.title_ru)

        }
    }, [language, getSinglPage])



    function handlePurchase() {
        setLoading(true)
        axios.post(`${process.env.REACT_APP_HOSTNAME}/registerPayment`, { amount: total * 100 })
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
                        paymentMethod: 'CREDIT CARD',
                        delivery,
                    }))
                    setTimeout(() => {
                        dispatch(StatusSuccessAction())
                    }, 3000)
                } else {
                    window.open(`/`)
                }
            })
            .catch((error) => {
            })
    }

    const validation = () => {
        let item = { ...error }
        if (!name) {
            item.name = 'error'
        }
        else if (name) {
            item.name = ''
        }
        if (!number) {
            item.phonNumber = 'error'
        }
        else if (number.length < 11) {
            item.phonNumber = 'error'
        }
        else if (number) {
            item.phonNumber = ''
        }
        if (!ValidateEmail(email)) {
            item.email = 'error'
        }
        else if (ValidateEmail(email)) {
            item.email = ''
        }
        if (!chedked) {
            item.checked = 'error'
            scrollToBottom()
        }
        else if (chedked) {
            item.checked = ''
        }
        if (selectPay == 3) {
            if (!address) {
                item.address = 'error'
            }
            else {
                item.address = ''

            }
        }
        if (
            item.name == '' && item.address == '' && item.checked == '' && item.email == '' && item.phonNumber == ''
        ) {
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

                const encodedProduct = new Buffer.from('Ticket payment').toString('base64')
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
            }
            else if (selectPay === 3) {
                dispatch(CreateCurrentTicket({
                    tickets: tickets.tickets,
                    buyerName: name,
                    buyerEmail: email,
                    buyerPhone: number,
                    deliveryLocation: address,
                    sessionId: tickets.tickets[0].sessionId,
                    buyerNotes: additional,
                    orderId: issuerId,
                    paymentMethod: 'CASH',
                    delivery: true,
                }))
                localStorage.setItem('orderId', issuerId)
            }
            else {
                handlePurchase()
            }
        }
        setError(item)
    }

    useEffect(() => {
        if (creatTicket.status && selectPay == 3) {
            window.location = `/StatusACBA`
        }
    }, [creatTicket])

    return (
        <div className='buyNowWrapper3'>
            <div ref={scrollRef} className='buyNowWrapper2'>
                <p className='deliverText'>
                    {t('freeDelivery')}
                </p>


                <p className='buyNowTitle'>{title}</p>



                <p className='buyNowDate'>{getSinglPage?.events?.event.sessions[0].date.slice(0, 10)}  /  {getSinglPage?.events?.event?.sessions[0].time}</p>
                <div className='BuyNowWrapper'>
                    {tickets?.tickets?.map((elm, i) => {
                        return <div className='BuyNowTickertDiv'>

                            <div id={i == 0 && "firstChild" || i == tickets?.tickets?.length - 1 && 'lastChild'} className='BuyNowTickert' key={i}>
                                <div className='BuyNowTickertNumber'>
                                    {i + 1}.
                                </div>
                                {elm.row > 0 ?
                                    <p className='BuyNowTickertPrive' id='parter'>{elm?.parterre && t('Parterre')} {elm?.lodge && t('Lodge')} {elm?.amphitheater && t('Amphitheater')} {elm?.stage && 'Stage'}, {t('Line')} {elm?.row}, {t('Place')} {elm?.seat}</p> :
                                    <p className='BuyNowTickertPrive' id='parter'>{elm?.row}</p>
                                }
                                <div className='deleteTicket'>
                                    <p className='BuyNowTickertPrive' id='Amd' >{elm?.price}</p>
                                </div>
                            </div>
                            <p className='removeTicket' onClick={() => dispatch(RemoveTicketsAction(elm))}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0306 11.9695C13.1715 12.1104 13.2506 12.3015 13.2506 12.5007C13.2506 12.7 13.1715 12.8911 13.0306 13.032C12.8897 13.1729 12.6986 13.252 12.4993 13.252C12.3001 13.252 12.109 13.1729 11.9681 13.032L7.99997 9.06261L4.0306 13.0307C3.8897 13.1716 3.69861 13.2508 3.49935 13.2508C3.30009 13.2508 3.10899 13.1716 2.9681 13.0307C2.8272 12.8898 2.74805 12.6987 2.74805 12.4995C2.74805 12.3002 2.8272 12.1091 2.9681 11.9682L6.93747 8.00011L2.96935 4.03073C2.82845 3.88984 2.7493 3.69874 2.7493 3.49948C2.7493 3.30023 2.82845 3.10913 2.96935 2.96823C3.11024 2.82734 3.30134 2.74818 3.5006 2.74818C3.69986 2.74818 3.89095 2.82734 4.03185 2.96823L7.99997 6.93761L11.9693 2.96761C12.1102 2.82671 12.3013 2.74756 12.5006 2.74756C12.6999 2.74756 12.8909 2.82671 13.0318 2.96761C13.1727 3.10851 13.2519 3.2996 13.2519 3.49886C13.2519 3.69812 13.1727 3.88921 13.0318 4.03011L9.06247 8.00011L13.0306 11.9695Z" fill="black" />
                                </svg>

                            </p>

                        </div>
                    })}

                </div>
                <div className='buyNowTotalPrice'>
                    <p>{t('Total')}: <span>{total} AMD</span></p>
                </div>
                <div className='BuyMethod'>
                    <div className='selectPay' onClick={() => {
                        setDelivery(false)
                        Select(1)
                    }}>
                        <div className='BuyMethodSelect'>
                            {selectPay == 1 ? <SelectedSvg /> : <SelectSvg />}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 10, flexWrap: 'wrap' }}>
                            <img alt='' width={80} height={34} src={require('../../assets/MIR_logo.png')} />
                            <img alt='' width={55} height={34} src={require('../../assets/amex_logo.png')} />
                            <img alt='' width={55} height={34} src={require('../../assets/mastercard_logo.png')} />
                            <img alt='' width={80} height={34} src={require('../../assets/visa_logo.png')} />
                            <img alt='' width={55} height={34} src={require('../../assets/arca_logo.png')} />
                        </div>
                    </div>
                    <p className='ticketInfno'>{t('Youwillreceive')}</p>
                    <div className='selectPay' onClick={() => {
                        Select(2)
                        setDelivery(false)
                    }} style={{ cursor: 'pointer' }}>
                        <div className='BuyMethodSelect'>
                            {selectPay == 2 ? <SelectedSvg /> : <SelectSvg />}
                        </div>
                        <img alt='' width={65} height={34} src={require('../../assets/TelCell.png')} />
                    </div>
                    <p className='ticketInfno'>{t('Youwillreceive')}</p>

                    <div className='selectPay' onClick={() => {
                        setDelivery(true)
                        Select(3)
                    }} style={{ cursor: 'pointer' }}>
                        <div className='BuyMethodSelect'>
                            {selectPay == 3 ? <SelectedSvg /> : <SelectSvg />}
                        </div>
                        <img width={68} height={34} src={require('../../assets/22.png')} />

                    </div>
                    <p className='ticketInfno'>{t('Shippingisfree')}</p>
                </div>
                <div className='BuyInputs'>
                    <div className='BuyInputsName'>
                        <div className='InputsBuy'>
                            <label>{t('NameSurname')}<span className='span'>*</span></label>
                            <input id={error.name != '' ? 'errorInut' : 'inout'} value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='InputsBuy'>
                            <label>{t('PhoneNumber')} <span className='span'>*</span></label>
                            <PhoneInput
                                country={'am'}
                                value={number}
                                onChange={phone => setNumber(phone)}
                                isValid={error.phonNumber == ''}
                            />
                        </div>
                    </div>
                    <div className='InputsBuy'>
                        <label>{t('Email')} <span className='span'>*</span></label>
                        <input id={error.email != '' ? 'errorInut' : 'inout'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {delivery &&
                        <div className='InputsBuy'>
                            <label>{t('Deliveryaddress')} <span className='span'>*</span></label>
                            <input id={error.address != '' ? 'errorInut' : 'inout'} value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    }
                    <div className='InputsBuy'>
                        <label>{t('Notes')} </label>
                        <textarea value={additional} onChange={(e) => setAdditional(e.target.value)} />
                    </div>

                </div>
                <div className='BuyCheck'>
                    <div
                        onClick={() => setChedker(!chedked)} style={{ cursor: 'pointer', height: 24 }}>
                        {chedked
                            ? <CheckedSvg />
                            : <CheckSvg error={error?.checked == ''} />
                        }
                    </div>
                    <a className='textDD' style={{ color: 'black', textDecoration: 'none' }} href='https://shinetickets.com/PrivacyPolicy'>{t('Termsandconditions')}</a>
                </div>
                <div className='BuyButton'>

                    <button
                        id={
                            disableButton &&
                            'disable'
                        }

                        disabled={loading} onClick={validation} >
                        {!loading
                            ? t('BuyTicket')
                            : <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <PuffLoader size={28} color="#FEE827" />
                            </div>
                        }
                    </button>
                </div>

                <div id='telcellForm' />
            </div>
        </div>
    )
}