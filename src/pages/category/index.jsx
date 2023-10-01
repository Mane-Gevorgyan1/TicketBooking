import { useEffect, useRef, useState } from 'react'
import { CategoryTicket } from '../../components/CategoryTicket'
import { MultySelect } from '../../components/MultySelect'
import { FilterSvg, MFilter, MultysElectSvg } from '../../components/svg'
import './style.css'
import { CategoryMenu } from '../../components/CategoryMenu'
import { GetAllEvents, OpenCategoryMenu, SubCategory } from '../../services/action/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { CartPopup } from '../../components/popup/cart'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export const Category = () => {
    const containerRef = useRef(null);
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
    const getSubCategory = useSelector((st) => st.getSubCAtegory)
    const [subcategoryId, setSubcategoryId] = useState('')
    const [activeButton, setActiveButton] = useState('Բոլորը')

    const [selectedDate, setSelectedDate] = useState([
        {
            startDate: '',
            endDate: '',
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
    const [page, setPage] = useState(1)
    useEffect(() => {
        if (containerRef.current) {
            window.scrollTo(0, 0)
        }
        dispatch(GetAllEvents(page, { categoryId: id, subcategoryId: subcategoryId, startDate, endData }))
    }, [startDate, endData, id, subcategoryId, page])

    useEffect(() => {
        dispatch(SubCategory({ id: id }))
        setActiveButton('Բոլորը')
    }, [id])

    if (openMenu.categoryMenu) {
        return <CategoryMenu />
    }
    return <div ref={containerRef} className='category'>
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
        {!events.loading && <div className='CategoryButtonWrapper'>
            {getSubCategory.data?.subcategories?.length && <button onClick={() => {
                setActiveButton('Բոլորը')
                setSubcategoryId('')
            }} id={activeButton == 'Բոլորը' && 'active'} className='CateogryButton'>Բոլորը</button>}
            {getSubCategory.data?.subcategories?.map((elm, i) => {
                return <button onClick={() => {
                    setActiveButton(elm.name)
                    setSubcategoryId(elm._id)
                }} id={activeButton == elm.name && 'active'} className='CateogryButton'>{elm.name}</button>
            })}
        </div>}
        {!events.loading && <div className='FilterWrapper'>
            <FilterSvg />
            {id !== '651568e7c6d0c9ab5a69365b' && <div className='SelectorDivWrapper'>
                <MultySelect onClick={(e) => setTitle(e)} title={title} />
            </div>}
            <div>
                <div style={{ marginLeft: 40 }} onClick={() => setOpenCalendar(true)}>
                    <img src={require('../../assets/calendar.png')} />
                </div>
            </div>
        </div>}
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

                {events?.events.length > 0 && events?.events?.map((elm, i) => {
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
                        image={elm.image}
                        date={`${dayOfWeek}-${month}-${year}`}
                        location={elm.location}
                        price={`${elm.priceStart} - ${elm.priceEnd} AMD`}
                        title={elm.title}
                    />
                })}
            </div> :
                <div className='loadingCategory'>
                    <PuffLoader color="#36d7b7" />
                </div>

        }
        <div className='paginationDiv'>
            {events?.events.length > 21 && <Stack spacing={2}>
                <Pagination
                    onChange={(e, value) => setPage(value)}
                    count={10}
                    color="secondary"
                />
            </Stack>}
        </div>
    </div >
}