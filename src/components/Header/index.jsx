import './style.css'
import { useEffect, useState } from 'react'
import { SearchInput } from '../SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { CloseSvg, MenuSvg, Search, Translate } from '../svg'
import { ChangeLanguageAction, GetCategory, OpenCaldendar, OpenCategoryMenu, SearchAction } from '../../services/action/action'
import { PuffLoader } from 'react-spinners'

export const Header = ({ open, menu }) => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const search = useSelector((st) => st.search)
    const openMenu = useSelector((st) => st.StaticReducer)
    const getCategory = useSelector((st) => st.getCategory)
    const { language } = useSelector((st) => st.StaticReducer)
    const [serchInput, setSearchInput] = useState(false)
    const [openLanguage, setOpenLanguage] = useState(false)
    const [value, setValue] = useState('')

    document.body.addEventListener('click', function () {
        setOpenLanguage(false)
        setSearchInput(false)

    });

    const { id } = useParams()
    useEffect(() => {
        dispatch(SearchAction(value))
    }, [value, dispatch])

    useEffect(() => {
        dispatch(GetCategory())
    }, [dispatch])
    if (serchInput) {
        return <div className='headerContainer' >
            <div>
                <SearchInput value={value} changeValue={(e) => setValue(e)} close={() => {
                    setSearchInput(false)
                    setValue('')
                }} />

                {search.loading ?
                    <div className='searchDivWrapper' id='LoadingSearch'>
                        <PuffLoader />
                    </div> :
                    <div>
                        {search.events.length > 0 && value &&
                            <div className='searchDivWrapper'>
                                {search.events?.map((elm, i) => {
                                    if (elm?.sessions.length) {
                                        return <div onClick={() => window.location = (`/Single/${elm._id}`)}>{elm.title}</div>
                                    }
                                })}
                            </div>
                        }
                        {search.events.length == 0 && value &&
                            <div onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                            }} className='searchDivWrapper'>
                                <div className='notfoundSearch'>not found</div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    }

    return (
        <div className='headerContainer'>
            <div className="header">
                {/* <p onClick={() => window.location = '/'} className='title'>Logo</p> */}
                <div onClick={() => window.location = '/'} className='sssa'>
                    <img style={{ width: 130, height: 67 }} src={require('../../assets/logo1.png')} />
                    <img src={require('../../assets/Logo.png')} />
                </div>
                <div className='textWrapper'>
                    {getCategory.category.map(elm => {
                        let title = ''
                        if (language === 'am') {
                            title = elm.name
                        } else if (language === 'en') {
                            title = elm.name_en
                        } else if (language === 'ru') {
                            title = elm.name_ru
                        }
                        return <p id={id == elm?._id ? 'activeHeader' : ''} onClick={() => navigation(`/Category/${elm.name}/${elm?._id}`)} className='Headertext'>{title}</p>
                    })}
                </div>
                {!openMenu.categoryMenu && !openMenu.openCalendar
                    ? <div className='buttonWrapperHeader'>
                        <div className='buttonWrapperHeaderDiv' onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            setSearchInput(true)
                        }}>
                            <Search />
                        </div>
                        <div className='Translate'
                            style={{ cursor: 'pointer' }}
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setOpenLanguage(!openLanguage)
                            }}
                        >
                            {localStorage.getItem('lang') === 'am'
                                ? <img alt='' style={{ width: 20, height: 20 }} src={require('../../assets/armenia.png')} />
                                : localStorage.getItem('lang') === 'en'
                                    ? <img alt='' style={{ width: 20, height: 20 }} src={require('../../assets/united-kingdom.png')} />
                                    : <img alt='' style={{ width: 20, height: 20 }} src={require('../../assets/russia.png')} />
                            }

                            {openLanguage
                                && <div className='translateDiv'>
                                    <div onClick={() => dispatch(ChangeLanguageAction('am'))} className='languageWrapper'>
                                        <div className='languageWrapperImg'>
                                            <img alt='' style={{ width: 20, height: 20 }} src={require('../../assets/armenia.png')} />
                                        </div>
                                        <p>հայերեն</p>
                                    </div>
                                    <div onClick={() => dispatch(ChangeLanguageAction('ru'))} className='languageWrapper'>
                                        <div className='languageWrapperImg'>
                                            <img alt='' style={{ width: 20, height: 20 }} src={require('../../assets/russia.png')} />
                                        </div>
                                        <p>Русский</p>
                                    </div>
                                    <div onClick={() => dispatch(ChangeLanguageAction('en'))} className='languageWrapper'>
                                        <div className='languageWrapperImg'>
                                            <img alt='' style={{ width: 20, height: 20 }} src={require('../../assets/united-kingdom.png')} />
                                        </div>
                                        <p>English</p>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='menuSvg' onClick={() => open(!menu)}>
                            {!menu
                                ? <MenuSvg />
                                : <div> <CloseSvg /></div>
                            }
                        </div>
                    </div>
                    : <div onClick={() => {
                        dispatch(OpenCaldendar(false))
                        dispatch(OpenCategoryMenu(false))
                    }}>
                        <CloseSvg />
                    </div>
                }
            </div>
            <div className='FreeSvg'>
                <img alt='' src={require('../../assets/free.png')} />
            </div>
            <div className='FreeSvg1'>
                <img alt='' src={require('../../assets/free1.png')} />
            </div>
        </div >
    )
}