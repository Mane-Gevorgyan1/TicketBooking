import { Search, SearchCloseSvg } from '../svg'
import './style.css'
export const SearchInput = ({ placeholder, close, changeValue, value }) => {
    return <div className='inputWrapper'>
        <input value={value} className='input' placeholder={placeholder} onChange={(e) => changeValue(e.target.value)} />
        <div className='searchWrapper' >
            <Search />
        </div>
        <div className='searchCloseWrapper' onClick={() => close()}>
            <SearchCloseSvg />
        </div>
    </div>
}