import { Button } from '../../components/Button'
import './styles.css'
import { PuffLoader } from 'react-spinners'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButTickets, ClearDataBuy, ClearStatusAction } from '../../services/action/action';

export const StatusPage = ({ s }) => {
    const { status } = useSelector((st) => st.status)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { byTicketDate } = useSelector((st) => st)

    useEffect(() => {
        console.log(status);
        if (status != 2) {
            // window.location = '/'
        }
        else {
            dispatch(ButTickets({
                sessionId: byTicketDate.data.sessionId,
                tickets: byTicketDate.data.tickets,
                deliveryLocation: byTicketDate?.data?.address,
                orderId: byTicketDate.data.order,
                buyerName: byTicketDate.data.name,
                buyerEmail: byTicketDate.data.email,
            }))
            setLoading(false)
        }
        dispatch(ClearStatusAction())
        dispatch(ClearDataBuy())
    }, []);

    if (loading) {
        return <div className='loading'>
            <PuffLoader color="#FEE827" />
        </div>
    }
    return <div className='statusDiv'>
        {/* {s ? */}
        <div>
            <img src={require('../../assets/success.png')} />
        </div>
        {/*: <div>
                <img src={require('../../assets/success.png')} />
            </div> */}
        {/* } */}
        <Button onClick={() => window.location = '/'} title={'Go Home'} />

    </div>
}