import { useEffect, useState } from 'react'
import { CategoryTicket } from '../../components/CategoryTicket'
import { MultySelect } from '../../components/MultySelect'
import { FilterSvg, MFilter, MultysElectSvg, OpenMulTyselect } from '../../components/svg'
import './style.css'
import { CategoryMenu } from '../../components/CategoryMenu'
import { GetAllEvents, OpenCategoryMenu } from '../../services/action/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
export const Category = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const openMenu = useSelector((st) => st.StaticReducer)
    const events = useSelector((st) => st.getAllEventes)
    const [startDate, setStartDate] = useState('')
    const [endData, setEndDate] = useState('')
    const navigation = useNavigate()
    const [title, setTitle] = useState('Hall')
    const SetDate = (type, value) => {
        const [year, month, day] = value.split("-");
        const formattedDate = `${month}-${day}-${year}`;
        if (type == 'start') {
            setStartDate(formattedDate)
        }
        else {
            setEndDate(formattedDate)
        }
    }
    useEffect(() => {
        dispatch(GetAllEvents(1, { category: id, startDate, endData }))
    }, [startDate, endData])

    if (openMenu.categoryMenu) {
        return <CategoryMenu />
    }

    return <div className='category'>
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
            <div className='DateInput'>
                {/* <label for="start">Start date:</label> */}
                <input onChange={(e) => SetDate('start', e.target.value)} type="date" id="start" name="trip-start" />

            </div>
            <div className='DateInput'>
                {/* <label for="start">End date:</label> */}
                <input onChange={(e) => SetDate('end', e.target.value)} type="date" id="start" name="trip-start" />
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
                    dispatch(OpenCategoryMenu(true))
                }}>Big Hall</div>
                <div onClick={() => {
                    dispatch(OpenCategoryMenu(true))
                }}>Big Hall</div>
            </div>
        }

        {/* <div className='mobileDate'>
            <div className='DateInput'>
                <input onChange={(e) =>
                    SetDate('start', e.target.value)} type="date" id="start" name="trip-start" value={startDate} placeholder='' />
            </div>
            <div className='DateInput'>
                <input onChange={(e) => SetDate('end', e.target.value)} type="date" id="start" name="trip-start" value={endData} />
            </div>
        </div> */}


        {!events.loading ? <div className='Category'>
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