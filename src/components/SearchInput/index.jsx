import { Search } from '../svg'
import './style.css'
export const SearchInput = () => {
    return <div className='inputWrapper'>
        <input className='input' placeholder='Search your favorite event or singer' />
        <div className='searchWrapper'>
            <Search />
        </div>
    </div>
}