import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveAllTickets, SetTicketsAction } from '../../services/action/action';
import { CommitSharp } from '@mui/icons-material';


function countOccurrences(arr, itemToCount) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === itemToCount) {
            count++;
        }
    }

    return count;
}

export const Hall = ({ price = [{ price: 30000, _id: 1 }, { price: 20000, _id: 2 }], title, buy }) => {
    const { t } = useTranslation();
    const [value, setValue] = useState([])
    const dispatch = useDispatch()
    const tickets = useSelector((st) => st.tiketsForBuy)
    useEffect(() => {
        let item = [...value]
        price.map((elm, i) => {
            item.push({ value: 0, price: elm.price, _id: elm._id })
        })
        setValue(item)
    }, [])

    const AddTicket = (i, e, price) => {
        dispatch(RemoveAllTickets())
        let item = [...value]
        item[i].value = e
        value?.map((elm, index) => {
            for (let i = 0; i < elm?.value; i++) {
                dispatch(SetTicketsAction({
                    row: 0,
                    price: elm?.price,
                    bench: 0,
                    id: elm._id
                }))
            }
        })
        setValue(item)
    }

    useEffect(() => {
        let item = [...value]
        value.map((elm, i) => {
            let count = countOccurrences(tickets.tickets, elm._id)
            item[i].value = count
        })
        if (item.length > 0) {
            setValue(item)
        }
    }, [tickets])

    return <div>
        <p className='HallBuyTicket'>Buy Ticket</p>
        {price.map((elm, i) => {
            return <div key={i} className='HallWithoutSeat'>
                <div className='HallWithoutSeatText'>
                    <p className='HallTitle'>Մոխրոտը </p>
                    <p className='HallDate'>20.02.2020</p>
                    <p className='HallPice'>Price:{elm?.price}</p>
                </div>
                <div className='HallWithoutSeatButton'>
                    <input onChange={(e) => AddTicket(i, e.target.value, elm?.price)}
                        value={value[i]?.value}
                        type='number' />
                </div>
            </div>

        })}
        <div className='ButtonHallWrapper'>
            <Button onClick={buy} title={t('BuyNow')} />
        </div>
    </div>
}