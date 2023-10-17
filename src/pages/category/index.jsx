import './style.css'
import Stack from '@mui/material/Stack'
import 'react-date-range/dist/styles.css'
import { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners'
import { useTranslation } from 'react-i18next'
import 'react-date-range/dist/theme/default.css'
import Pagination from '@mui/material/Pagination'
import { DateRangePicker } from 'react-date-range'
import { useDispatch, useSelector } from 'react-redux'
import { CartPopup } from '../../components/popup/cart'
import { useNavigate, useParams } from 'react-router-dom'
import { MultySelect } from '../../components/MultySelect'
import { CategoryMenu } from '../../components/CategoryMenu'
import { CategoryTicket } from '../../components/CategoryTicket'
import { FilterSvg, MFilter, MultysElectSvg } from '../../components/svg'
import { GetAllEvents, GetHall, OpenCategoryMenu, SubCategory } from '../../services/action/action'

export const Category = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const { id } = useParams()
    const { t } = useTranslation()
    const events = useSelector((st) => st.getAllEventes)
    const openMenu = useSelector((st) => st.StaticReducer)
    const { language } = useSelector((st) => st.StaticReducer)
    const getSubCategory = useSelector((st) => st.getSubCAtegory)
    const [page, setPage] = useState(1)
    const [open, setOpen] = useState(false)
    const [hallId, setHallId] = useState('')
    const [endDate, setEndDate] = useState('')
    const [title, setTitle] = useState(t('Hall'))
    const [startDate, setStartDate] = useState('')
    const [subcategoryId, setSubcategoryId] = useState('')
    const [openCalendar, setOpenCalendar] = useState(false)
    const [activeButton, setActiveButton] = useState('Բոլորը')
    const [selectedDate, setSelectedDate] = useState([{ startDate: '', endDate: '', key: 'selection', },])

    useEffect(() => {
        let date = new Date(selectedDate[0].endDate)
        let startDate = new Date(selectedDate[0].startDate)
        let statDate = ''
        let endDate = ''
        if (selectedDate[0].endDate) {
            endDate = `${date.getFullYear()}-${date.getDate() + 1}-${date.getMonth() + 1}`
        }
        if (selectedDate[0].startDate) {
            statDate = `${startDate.getFullYear()}-${startDate.getDate()}-${startDate.getMonth() + 1}`
        }
        setStartDate(statDate)
        setEndDate(endDate)
    }, [selectedDate])

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(GetHall())
        dispatch(GetAllEvents(page, { category: id, subcategory: subcategoryId, startDate, endDate, hall: hallId }))
    }, [startDate, endDate, id, subcategoryId, page, hallId])

    useEffect(() => {
        dispatch(SubCategory({ id: id }))
        setActiveButton('Բոլորը')
        setSubcategoryId('')
        setEndDate('')
        setStartDate('')
        setHallId('')
        setTitle('Hall')
        setSelectedDate([{ startDate: '', endDate: '', key: 'selection' }])
    }, [id])

    if (openMenu?.categoryMenu) {
        return <CategoryMenu onClick={(e) => {
            setTitle(e.hall)
            setHallId(e._id)
        }} item={events.hall} close={() => setOpen(!open)} />
    }
    return (
        <div className='category'>
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
            {!events?.loading &&
                <div className='CategoryButtonWrapper'>
                    {getSubCategory?.data?.subcategories?.length &&
                        <button
                            onClick={() => {
                                setActiveButton('Բոլորը')
                                setSubcategoryId('')
                            }} id={activeButton == 'Բոլորը' && 'active'} className='CateogryButton'
                        >
                            {t('All')}
                        </button>}
                    {getSubCategory?.data?.subcategories?.map((elm, i) => {
                        let name = ''
                        if (language === 'am') {
                            name = elm?.name
                        }
                        else if (language === 'en') {
                            name = elm?.name_en
                        }
                        else if (language === 'ru') {
                            name = elm?.name_ru
                        }
                        return <button onClick={() => {
                            setActiveButton(elm?.name)
                            setSubcategoryId(elm?._id)
                        }} id={activeButton == elm?.name && 'active'} className='CateogryButton'>{name}</button>
                    })}
                </div>
            }

            {!events?.loading &&
                <div className='FilterWrapper'>
                    <FilterSvg />
                    {id !== '651568e7c6d0c9ab5a69365b' &&
                        <div className='SelectorDivWrapper'>
                            <MultySelect item={
                                events?.hall
                            } onClick={(e) => {
                                setTitle(language === 'am' ? e?.hall :
                                    language === 'ru' ? e?.hall_ru :
                                        e?.hall_en)
                                setHallId(e._id)
                            }} title={title} />
                        </div>
                    }
                    <div onClick={() => setOpenCalendar(true)}>
                        <img alt='' src={require('../../assets/calendar.png')} />
                    </div>
                </div>
            }
            {!events?.loading && !events?.events.sessions?.length > 0 &&
                <div className='notfound'>
                    <p>{t('Nodatafound')}</p>
                </div>
            }
            {events?.events?.sessions?.length > 0 &&
                <div className='mFilterWrapper' onClick={() => {
                    setOpen(!open)
                }}>
                    <MFilter />
                    <MultysElectSvg />
                </div>
            }
            {open &&
                <div className='MultyselectItemCategory'>
                    <div onClick={() => {
                        dispatch(OpenCategoryMenu(true))
                    }}>Hall</div>
                    <div onClick={() => {
                        setOpenCalendar(true)
                    }}>Calendar</div>
                </div>
            }
            {!events.loading ?
                <div className='Category'>
                    {events?.events?.sessions?.length > 0 && events?.events?.sessions?.map((elm, i) => {
                        const dateObject = new Date(elm.date)
                        let day = dateObject.getDate()
                        let month = dateObject.getMonth() + 1
                        if (day <= 9) {
                            day = `0${day}`
                        }
                        if (month <= 9) {
                            month = `0${month}`
                        }
                        return <CategoryTicket
                            data={elm.eventId}
                            onClick={() => navigation(`/Single/${elm?.eventId?._id}`)}
                            key={i}
                            id={elm?._id}
                            image={elm?.eventId?.image}
                            date={`${day}-${month}-${dateObject.getFullYear()}`}
                            location={elm?.hallId?.location}
                            price={`${elm?.priceStart} - ${elm?.priceEnd} AMD`}
                            title={elm?.eventId?.title}
                        />
                    })}
                </div>
                : <div className='loadingCategory'>
                    <PuffLoader color="#FEE827" />
                </div>
            }
            <div className='paginationDiv'>
                {events?.events?.sessions?.length > 21 && <Stack spacing={2}>
                    <Pagination
                        onChange={(e, value) => setPage(value)}
                        count={events?.events?.totalPages}
                        color="secondary"
                    />
                </Stack>
                }
            </div>
        </div >
    )
}