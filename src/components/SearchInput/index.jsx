import { Search } from '../svg'
import './style.css'
export const SearchInput = ({ placeholder }) => {
    return <div className='inputWrapper'>
        <input className='input' placeholder={placeholder} />
        <div className='searchWrapper'>
            <Search />
        </div>
    </div>
}