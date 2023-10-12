import './style.css'
import { CloseSvg, FreeSvg, MenuSvg, Search, Translate, User } from '../svg'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeLanguageAction, GetCategory, OpenCategoryMenu, SearchAction } from '../../services/action/action'
import { useEffect, useState } from 'react'
import { SearchInput } from '../SearchInput'
import { useNavigate, useParams } from 'react-router-dom'

export const Header = ({ open, menu }) => {
    const openMenu = useSelector((st) => st.StaticReducer)
    const dispatch = useDispatch()
    const [serchInput, setSearchInput] = useState(false)
    const [value, setValue] = useState('')
    const navigation = useNavigate()
    const search = useSelector((st) => st.search)
    const getCategory = useSelector((st) => st.getCategory)
    const { language } = useSelector((st) => st.StaticReducer)
    const [openLanguage, setOpenLanguage] = useState(false)

    document.body.addEventListener('click', function () {
        setOpenLanguage(false)
    });

    const { id } = useParams()
    useEffect(() => {
        dispatch(SearchAction(value))
    }, [value])
    useEffect(() => {
        dispatch(GetCategory())
    }, [])
    if (serchInput) {
        return <div className='inputWRapper' >
            <div>
                <SearchInput value={value} changeValue={(e) => setValue(e)} close={() => {
                    setSearchInput(false)
                    setValue('')
                }} />
                {search.events.length > 0 && value && < div className='searchDivWrapper'>
                    {search.events?.map((elm, i) => {
                        return <div onClick={() => window.location = (`/Single/${elm._id}`)}>{elm.title}</div>
                    })}
                </div>
                }
            </div>
        </div >
    }
    return (
        <div className='headerContainer'>
            <div className="header">
                <p onClick={() => navigation('/')} className='title'>Logo</p>
                <div className='textWrapper'>
                    {getCategory.category.map((elm, i) => {
                        let title = ''
                        if (language === 'am') {
                            title = elm.name
                        }
                        else if (language === 'en') {
                            title = elm.name_en
                        }
                        else if (language === 'ru') {
                            title = elm.name_ru
                        }
                        return <p id={id == elm._id ? 'activeHeader' : ''} onClick={() => navigation(`/Category/${elm.name}/${elm._id}`)} className='Headertext'>{title}</p>
                    })}
                </div>
                {!openMenu.categoryMenu ? <div className='buttonWrapperHeader'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', cursor: 'pointer' }} onClick={() => setSearchInput(true)}>
                        <Search />
                    </div>
                    <div className='Translate' onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setOpenLanguage(!openLanguage)
                    }} style={{ cursor: 'pointer' }}>
                        <Translate />
                        {openLanguage && <div className='translateDiv'>
                            <div onClick={() => dispatch(ChangeLanguageAction('am'))} className='languageWrapper'>
                                <div className='languageWrapperImg'>
                                    <img style={{ width: 20, height: 20 }} src={require('../../assets/armenia.png')} />
                                </div>
                                <p>հայերեն</p>
                            </div>
                            <div onClick={() => dispatch(ChangeLanguageAction('ru'))} className='languageWrapper'>
                                <div className='languageWrapperImg'>
                                    <img style={{ width: 20, height: 20 }} src={require('../../assets/russia.png')} />
                                </div>
                                <p>Русский</p>
                            </div>
                            <div onClick={() => dispatch(ChangeLanguageAction('en'))} className='languageWrapper'>
                                <div className='languageWrapperImg'>
                                    <img style={{ width: 20, height: 20 }} src={require('../../assets/united-kingdom.png')} />

                                </div>
                                <p>English</p>
                            </div>
                        </div>}
                    </div>
                    <div className='menuSvg' onClick={() => open(!menu)}>
                        {!menu ? <MenuSvg /> : <div>
                            <CloseSvg />
                        </div>}
                    </div>
                </div> :
                    <div onClick={() => dispatch(OpenCategoryMenu(false))}>
                        <CloseSvg />
                    </div>
                }
            </div>
            <div className='FreeSvg'>
                <img src={require('../../assets/free.png')} />
            </div>
            <div className='FreeSvg1'>
                <img src={require('../../assets/free1.png')} />
            </div>
        </div>
    )
}