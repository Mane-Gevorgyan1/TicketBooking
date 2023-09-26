import { useEffect, useState } from 'react'
import { CategoryTicket } from '../../components/CategoryTicket'
import { MultySelect } from '../../components/MultySelect'
import { FilterSvg, MFilter, MultysElectSvg } from '../../components/svg'
import './style.css'
import { CategoryMenu } from '../../components/CategoryMenu'
import { GetAllEvents, OpenCategoryMenu } from '../../services/action/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { CartPopup } from '../../components/popup/cart'
export const Category = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const openMenu = useSelector((st) => st.StaticReducer)
    const events = useSelector((st) => st.getAllEventes)
    const [startDate, setStartDate] = useState('')
    const [endData, setEndDate] = useState('')
    const [openCalendar, setOpenCalendar] = useState(false)
    const navigation = useNavigate()
    const [title, setTitle] = useState('Hall')
    const [selectedDate, setSelectedDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    useEffect(() => {
        let date = new Date(selectedDate[0].endDate)
        let startDate = new Date(selectedDate[0].startDate)
        let emm = date.getMonth()
        let edd = date.getDay()
        let eyy = date.getFullYear()
        let endDate = `${emm}-${edd}-${eyy}`

        let smm = startDate.getMonth()
        let sdd = startDate.getDay()
        let syy = startDate.getFullYear()
        let statDate = `${smm}-${sdd}-${syy}`
        setStartDate(statDate)
        setEndDate(endDate)
    }, [selectedDate])

    useEffect(() => {
        dispatch(GetAllEvents(1, { category: id, startDate, endData }))
    }, [startDate, endData])

    if (openMenu.categoryMenu) {
        return <CategoryMenu />
    }
    return <div className='category'>
        <CartPopup
            open={openCalendar}
            setOpen={setOpenCalendar}
            show={false}
        >
            <DateRangePicker
                dateDisplayFormat={'mm, dd, yyyy'}
                ranges={selectedDate}
                onChange={(ranges) => setSelectedDate([ranges.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
            />
        </CartPopup>
        <div className='CategoryButtonWrapper'>
            <button id='active' className='CateogryButton'>Classical</button>
            <button className='CateogryButton'>Classical</button>
            <button className='CateogryButton'>Classical</button>
            <button className='CateogryButton'>Classical</button>
            <button className='CateogryButton'>Classical</button>
        </div>
        <div className='FilterWrapper'>
            <FilterSvg />
            <div className='SelectorDivWrapper'>
                <MultySelect onClick={(e) => setTitle(e)} title={title} />
            </div>
            <div>
                <div style={{ marginLeft: 40 }} onClick={() => setOpenCalendar(true)}>
                    <img src={require('../../assets/calendar.png')} />
                </div>

            </div>
        </div>
        <div className='mFilterWrapper' onClick={() => {
            setOpen(!open)
        }}>
            <MFilter />
            <MultysElectSvg />
        </div>
        {
            open && <div className='MultyselectItemCategory'>
                <div onClick={() => {
                    dispatch(OpenCategoryMenu(true))
                }}>Big Hall</div>
                <div onClick={() => {
                    setOpenCalendar(true)
                }}>Big Hall</div>
                <div onClick={() => {
                    dispatch(OpenCategoryMenu(true))
                }}>Big Hall</div>
            </div>
        }
        {
            !events.loading ? <div className='Category'>
                {events?.events?.map((elm, i) => {
                    const dateObject = new Date(elm.date);
                    let dayOfWeek = dateObject.getDay();
                    const year = dateObject.getFullYear();
                    let month = dateObject.getMonth() + 1;
                    if (dayOfWeek <= 9) {
                        dayOfWeek = `0${dayOfWeek}`
                    }
                    if (month <= 9) {
                        month = `0${month}`
                    }
                    return <CategoryTicket
                        onClick={() => navigation(`/Single/${elm._id}`)}
                        key={i}
                        id={elm._id}
                        image='Rectangle 19.png'
                        date={`${dayOfWeek}-${month}-${year}`}
                        location={elm.location}
                        price={`${elm.priceStart} - ${elm.priceEnd} AMD`}
                        title={elm.title}
                    />
                })}
            </div> :
                <div className='loading'>
                    <PuffLoader color="#36d7b7" />
                </div>

        }
        <div style={{ marginBottom: 100 }}>

        </div>
    </div >
}