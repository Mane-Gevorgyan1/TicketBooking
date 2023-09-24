import { useState } from 'react'
import { CheckSvg, CheckedSvg, SelectSvg, SelectedSvg } from '../svg'
import './style.css'
export const BuyNow = ({ close }) => {
    const [chedked, setChedker] = useState(false)
    const [selectPay, setSelectPay] = useState(null)
    const Select = (i) => {
        setSelectPay(i)
    }
    return <div className='buyNowWrapper'>
        <div className='buyNowWrapper2'>
            <div className='BuyNowHeader'>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p onClick={() => close()} style={{ cursor: 'pointer' }}>x</p>
            </div>
            <div className='BuyNowWrapper'>
                <div className='BuyNowTitle'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className='BuyNowDate'>
                    <p>14.09.2023  /  19:00</p>
                </div>
                <div>
                    <div className='BuyNowTickert'>
                        <p className='Seat'>Seat</p>
                        <p className='Seat'>Price</p>
                    </div>
                    <div className='BuyNowTickert'>
                        <p className='BuyNowTickertPrive'>Parter  4  Line  15  Seat</p>
                        <p className='BuyNowTickertPrive' id='Amd' > 15.000 AMD</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className='buyNowTotalPrice'>
                <p>General : <span>60.000 AMD</span></p>
            </div>
            <div className='BuyMethod'>
                <div onClick={() => Select(1)}>
                    <div className='BuyMethodSelect'>
                        {selectPay == 1 ? <SelectedSvg /> : <SelectSvg />}
                    </div>
                    <img width={100} height={30} src={require('../../assets/idram.png')} />
                </div>
                <div onClick={() => Select(2)}>
                    <div className='BuyMethodSelect'>
                        {selectPay == 2 ? <SelectedSvg /> : <SelectSvg />}
                    </div>
                    <img width={100} height={30} src={require('../../assets/idram.png')} />
                </div>
                <div onClick={() => Select(3)}>
                    <div className='BuyMethodSelect'>
                        {selectPay == 3 ? <SelectedSvg /> : <SelectSvg />}
                    </div>
                    <img width={100} height={30} src={require('../../assets/idram.png')} />
                </div>
                <div onClick={() => Select(4)}>
                    <div className='BuyMethodSelect'>
                        {selectPay == 4 ? <SelectedSvg /> : <SelectSvg />}
                    </div>
                    <img width={100} height={30} src={require('../../assets/idram.png')} />
                </div>
            </div>
            <div className='BuyInputs'>
                <div className='BuyInputsName'>
                    <div className='InputsBuy'>
                        <label>Name Surname</label>
                        <input />
                    </div>
                    <div className='InputsBuy'>
                        <label>Phone Namber</label>
                        <input />
                    </div>
                </div>
                <div className='InputsBuy'>
                    <label>E-mail</label>
                    <input />
                </div>
                <div className='InputsBuy'>
                    <label>Additional notes</label>
                    <textarea />
                </div>
            </div>
            <div className='BuyButton'>
                <button onClick={() => window.location = '/hall'}>Buy Ticket</button>
            </div>
            <div className='BuyCheck'>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div onClick={() => setChedker(!chedked)}>
                    {!chedked ? <CheckSvg />
                        : <CheckedSvg />
                    }
                </div>
            </div>
        </div>
    </div >
}